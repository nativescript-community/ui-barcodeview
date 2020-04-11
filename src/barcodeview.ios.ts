import { BarcodeFormat, BarcodeView as BarcodeScannerBaseView, formatsProperty, preferFrontCameraProperty, pauseProperty, torchOnProperty } from './barcodeview-common';
import * as perms from 'nativescript-perms';
import { ImageSource } from '@nativescript/core/image-source/image-source';
import { Color } from '@nativescript/core/color';

export class BarcodeView extends BarcodeScannerBaseView {
    private _reader: QRCodeReader;
    private _hasSupport;

    constructor() {
        super();
        this._hasSupport = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo) !== null;
        if (this._hasSupport) {
            if (typeof AVAudioSession.sharedInstance().setCategoryModeOptionsError === 'function') {
                // if music was playing, it would stop unless we do this:
                AVAudioSession.sharedInstance().setCategoryModeOptionsError(AVAudioSessionCategoryPlayback, AVAudioSessionModeDefault, AVAudioSessionCategoryOptions.MixWithOthers);
            }
        }
    }
    createNativeView() {
        let v = super.createNativeView() as UIView;
        const types = getBarcodeTypes(this.formats);
        this._reader = QRCodeReader.readerWithMetadataObjectTypes(<any>types);
        if (this._hasSupport) {
            v.layer.insertSublayerAtIndex(this._reader.previewLayer, 0);
        }
        return v;
    }

    disposeNativeView() {
        this._reader = null;
        this._player = null;
        this.lastText = null;
        // this._scanner.delegate = null;
        // this._scanner = null;
    }
    private _player: AVAudioPlayer;
    private lastText: string;

    initNativeView() {
        super.initNativeView();
        this._reader.setCompletionWithBlock((text, format) => {
            if (!this.reportDuplicates && text === this.lastText) {
                // Prevent duplicate scans
                return;
            }
            this.lastText = text;
            if (this.beepOnScan) {
                if (!this._player) {
                    const beepPath = NSBundle.mainBundle.pathForResourceOfType('beep', 'caf');
                    this._player = AVAudioPlayer.alloc().initWithContentsOfURLError(NSURL.fileURLWithPath(beepPath));
                    this._player.numberOfLoops = 1;
                    this._player.volume = 0.7; // this is not the actual volume, as that really depends on the device volume
                    this._player.prepareToPlay();
                }
                this._player.play();
            }

            let barcodeFormat = getBarcodeFormat(format);
            if (shouldReturnEAN13AsUPCA(barcodeFormat, text, this.formats)) {
                barcodeFormat = 'UPC_A';
                text = text.substring(1);
            }
            this.notify({
                eventName: BarcodeScannerBaseView.scanResultEvent,
                object: this,
                format: getBarcodeFormat(format),
                text: text
            });
        });
        if (!this.pause) {
            this.resumeScanning();
        }
    }
    public onLayout(left: number, top: number, right: number, bottom: number): void {
        super.onLayout(left, top, right, bottom);
        if (this._hasSupport && this.nativeViewProtected && this._reader) {
            this._reader.previewLayer.frame = this.nativeViewProtected.layer.bounds;
        }
    }

    pauseScanning(): void {
        if (this._reader && this._reader.running()) {
            this._reader.stopScanning();
        }
    }

    resumeScanning(): void {
        if (this._reader && !this._reader.running()) {
            perms
                .request('camera')
                .then(r => r[0] === 'authorized')
                .then(r => {
                    if (r) {
                        this._reader.startScanning();
                    }
                })
                .catch(err => {
                    console.error(err);
                    setTimeout(() => {
                        throw err;
                    }, 0);
                });
        }
    }

    triggerScan(view) {
        // this.nativeViewProtected.decodeSingle(this.callback);
    }

    [pauseProperty.setNative](value: boolean) {
        value ? this.pauseScanning() : this.resumeScanning();
    }
    [torchOnProperty.setNative](value: boolean) {
        this._reader.setTorch(value);
    }

    [formatsProperty.setNative](value: string) {
        console.log('formatsProperty', value);
        // if (this.initFormats !== null && this.initFormats !== value) {
        //     this.initFormats = null;
        // }
        const types = getBarcodeTypes(value);

        this._reader.setMetadataObjectTypes(types);
    }

    [preferFrontCameraProperty.setNative](value: boolean) {
        this._reader.switchDeviceInput();
    }
}

const shouldReturnEAN13AsUPCA = (barcodeFormat: BarcodeFormat, value: string, requestedFormats?: string): boolean => {
    return barcodeFormat === 'EAN_13' && value.indexOf('0') === 0;
    // why not add the line below? Well, see https://github.com/EddyVerbruggen/nativescript-barcodeview/issues/176
    // && (!requestedFormats || requestedFormats.indexOf("UPC_A") > -1);
};

function nativeFormat(format: BarcodeFormat) {
    switch (format) {
        case 'QR_CODE':
            return AVMetadataObjectTypeQRCode;
        case 'PDF_417':
            return AVMetadataObjectTypePDF417Code;
        case 'AZTEC':
            return AVMetadataObjectTypeAztecCode;
        case 'UPC_E':
            return AVMetadataObjectTypeUPCECode;
        case 'CODE_39':
            return AVMetadataObjectTypeCode39Code;
        case 'CODE_39_MOD_43':
            return AVMetadataObjectTypeCode39Mod43Code;
        case 'CODE_93':
            return AVMetadataObjectTypeCode93Code;
        case 'CODE_128':
            return AVMetadataObjectTypeCode128Code;
        case 'DATA_MATRIX':
            return AVMetadataObjectTypeDataMatrixCode;
        case 'EAN_8':
            return AVMetadataObjectTypeEAN8Code;
        case 'ITF':
            return AVMetadataObjectTypeITF14Code;
        case 'INTERLEAVED_2_OF_5':
            return AVMetadataObjectTypeInterleaved2of5Code;
        // see https://github.com/EddyVerbruggen/nativescript-barcodeview/issues/176
        case 'EAN_13':
        case 'UPC_A':
            return AVMetadataObjectTypePDF417Code;
    }
    return null;
}

const getBarcodeFormat = (nativeFormat: string): BarcodeFormat => {
    if (nativeFormat === AVMetadataObjectTypeQRCode) return 'QR_CODE';
    else if (nativeFormat === AVMetadataObjectTypePDF417Code) return 'PDF_417';
    else if (nativeFormat === AVMetadataObjectTypeAztecCode) return 'AZTEC';
    else if (nativeFormat === AVMetadataObjectTypeUPCECode) return 'UPC_E';
    else if (nativeFormat === AVMetadataObjectTypeCode39Code) return 'CODE_39';
    else if (nativeFormat === AVMetadataObjectTypeCode39Mod43Code) return 'CODE_39_MOD_43';
    else if (nativeFormat === AVMetadataObjectTypeCode93Code) return 'CODE_93';
    else if (nativeFormat === AVMetadataObjectTypeCode128Code) return 'CODE_128';
    else if (nativeFormat === AVMetadataObjectTypeDataMatrixCode) return 'DATA_MATRIX';
    else if (nativeFormat === AVMetadataObjectTypeEAN8Code) return 'EAN_8';
    else if (nativeFormat === AVMetadataObjectTypeITF14Code) return 'ITF';
    else if (nativeFormat === AVMetadataObjectTypeEAN13Code) return 'EAN_13';
    else if (nativeFormat === AVMetadataObjectTypeInterleaved2of5Code) return 'INTERLEAVED_2_OF_5';
    else {
        console.log('Unknown format scanned: ' + nativeFormat + ', please report this at https://github.com/EddyVerbruggen/nativescript-barcodeview/issues');
        return <BarcodeFormat>nativeFormat;
    }
};

const getBarcodeTypes = (formatsString: string): Array<string> => {
    const types = [];
    if (formatsString) {
        let formats = formatsString.split(',');
        for (let format of formats) {
            format = format.trim();
            const nFormat = nativeFormat(format as BarcodeFormat);
            if (nFormat) {
                types.push(nFormat);
            }
        }
    } else {
        types.push(
            AVMetadataObjectTypeUPCECode,
            AVMetadataObjectTypeCode39Code,
            AVMetadataObjectTypeCode39Mod43Code,
            AVMetadataObjectTypeEAN13Code,
            AVMetadataObjectTypeEAN8Code,
            AVMetadataObjectTypeCode93Code,
            AVMetadataObjectTypeCode128Code,
            AVMetadataObjectTypeDataMatrixCode,
            AVMetadataObjectTypeITF14Code,
            AVMetadataObjectTypePDF417Code,
            AVMetadataObjectTypeQRCode,
            AVMetadataObjectTypeAztecCode,
            AVMetadataObjectTypeInterleaved2of5Code
        );
    }
    return types;
};

export function generateBarCode({
    text,
    type,
    width,
    height,
    frontColor,
    backColor
}: {
    text: string;
    type: BarcodeFormat;
    width: number;
    height: number;
    frontColor?: Color | string;
    backColor?: Color | string;
}) {
    let data = NSString.stringWithString(text).dataUsingEncoding(NSISOLatin1StringEncoding);
    let generatorKey;
    switch (type) {
        case 'QR_CODE':
            generatorKey = 'CIQRCodeGenerator';
            break;
        case 'PDF_417':
            generatorKey = 'CIPDF417BarcodeGenerator';
            break;
        case 'AZTEC':
            generatorKey = 'CIAztecCodeGenerator';
            break;
        case 'UPC_E':
        case 'CODE_39':
        case 'CODE_39_MOD_43':
        case 'CODE_93':
        case 'EAN_13':
        case 'EAN_8':
        case 'UPC_A':
        case 'CODE_128':
            generatorKey = 'CICode128BarcodeGenerator';
            break;
    }
    if (generatorKey) {
        let filter = CIFilter.filterWithName(generatorKey);
        if (filter) {
            filter.setValueForKey(data, 'inputMessage');
            // filter.setValueForKey('H', 'inputCorrectionLevel');

            let output = filter.outputImage;
            if (output) {
                if (frontColor || backColor) {
                    //change qrcode color : #1e3259
                    let filterFalseColor = CIFilter.filterWithName('CIFalseColor');
                    filterFalseColor.setDefaults();
                    filterFalseColor.setValueForKey(output, 'inputImage');
                    // convert method
                    if (frontColor) {
                        let color = frontColor instanceof Color ? frontColor : new Color(frontColor);
                        filterFalseColor.setValueForKey(CIColor.colorWithCGColor(color.ios.CGColor), 'inputColor0');
                    } else {
                        filterFalseColor.setValueForKey(CIColor.colorWithString('black'), 'inputColor0');
                    }
                    if (backColor) {
                        let color = backColor instanceof Color ? backColor : new Color(backColor);
                        filterFalseColor.setValueForKey(CIColor.colorWithCGColor(color.ios.CGColor), 'inputColor1');
                    } else {
                        filterFalseColor.setValueForKey(CIColor.colorWithString('white'), 'inputColor1');
                    }
                    output = filterFalseColor.outputImage;
                }
                const scaleX = width / output.extent.size.width;
                const scaleY = height / output.extent.size.height;

                output = output.imageByApplyingTransform(CGAffineTransformMakeScale(scaleX, scaleY));

                let context = CIContext.context();
                if (context) {
                    const CGImage = context.createCGImageFromRect(output, output.extent);
                    return new ImageSource(UIImage.imageWithCGImageScaleOrientation(CGImage, UIScreen.mainScreen.scale, UIImageOrientation.Up));
                }

            }
        }
    }
    return null;
}
