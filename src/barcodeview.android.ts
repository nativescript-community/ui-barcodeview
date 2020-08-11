import {
    BarcodeFormat,
    BarcodeView as BarcodeScannerBaseView,
    formatsProperty,
    preferFrontCameraProperty,
    beepOnScanProperty,
    pauseProperty,
    torchOnProperty
} from './barcodeview-common';
import { android as androidApp } from '@nativescript/core/application';
import * as perms from 'nativescript-perms';
import { ImageSource } from '@nativescript/core/image-source/image-source';
import { Color } from '@nativescript/core/color';

function nativeFormat(format: BarcodeFormat) {
    const NBarcodeFormat = com.google.zxing.BarcodeFormat;
    switch (format) {
        case 'QR_CODE':
            return NBarcodeFormat.QR_CODE;
        case 'PDF_417':
            return NBarcodeFormat.PDF_417;
        case 'AZTEC':
            return NBarcodeFormat.AZTEC;
        case 'UPC_E':
            return NBarcodeFormat.UPC_E;
        case 'CODE_39':
            return NBarcodeFormat.CODE_39;
        case 'CODE_93':
            return NBarcodeFormat.CODE_93;
        case 'CODE_128':
            return NBarcodeFormat.CODE_128;
        case 'DATA_MATRIX':
            return NBarcodeFormat.DATA_MATRIX;
        case 'EAN_8':
            return NBarcodeFormat.EAN_8;
        case 'ITF':
            return NBarcodeFormat.ITF;
        // see https://github.com/EddyVerbruggen/nativescript-barcodeview/issues/176
        case 'EAN_13':
        case 'UPC_A':
            return NBarcodeFormat.PDF_417;
    }
    return null;
}

const getBarcodeTypes = (formatsString: string): java.util.ArrayList<com.google.zxing.BarcodeFormat> => {
    const types = new java.util.ArrayList<com.google.zxing.BarcodeFormat>();
    const BarcodeFormat = com.google.zxing.BarcodeFormat;
    if (formatsString) {
        let formats = formatsString.split(',');
        for (let format of formats) {
            format = format.trim();
            const nFormat = nativeFormat(format as BarcodeFormat);
            if (nFormat) {
                types.add(nFormat);
            }
        }
    } else {
        types.add(BarcodeFormat.UPC_E);
        types.add(BarcodeFormat.CODE_39);
        types.add(BarcodeFormat.EAN_8);
        types.add(BarcodeFormat.EAN_13);
        types.add(BarcodeFormat.CODE_93);
        types.add(BarcodeFormat.CODE_128);
        types.add(BarcodeFormat.DATA_MATRIX);
        types.add(BarcodeFormat.ITF);
        types.add(BarcodeFormat.PDF_417);
        types.add(BarcodeFormat.QR_CODE);
        types.add(BarcodeFormat.AZTEC);
    }
    return types;
};

export class BarcodeView extends BarcodeScannerBaseView {
    nativeViewProtected: com.journeyapps.barcodescanner.BarcodeView;
    static beepManager: com.google.zxing.client.android.BeepManager;

    callback: com.journeyapps.barcodescanner.BarcodeCallback;
    private lastText: string;

    createNativeView() {
        return new com.journeyapps.barcodescanner.BarcodeView(this._context);
    }

    onActivityResume() {
        this.nativeViewProtected.resume();
    }

    onActivityPause() {
        this.nativeViewProtected.pause();
    }
    initNativeView() {
        super.initNativeView();
        const barcodeView = this.nativeViewProtected;

        this.callback = new com.journeyapps.barcodescanner.BarcodeCallback({
            barcodeResult: (result: com.journeyapps.barcodescanner.BarcodeResult) => {
                const text = result.getText();
                if (!text) {
                    return;
                }
                // console.log('barcodeResult', text, this.reportDuplicates, this.lastText)
                if (!this.reportDuplicates && text === this.lastText) {
                    // Prevent duplicate scans
                    return;
                }
                this.lastText = text;
                if (BarcodeView.beepManager && this.beepOnScan) {
                    BarcodeView.beepManager.playBeepSound();
                }
                this.notify({
                    eventName: BarcodeScannerBaseView.scanResultEvent,
                    object: this,
                    format: result.getBarcodeFormat().toString(),
                    text: result.getText()
                });
            },
            possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>) {}
        });
        barcodeView.decodeContinuous(this.callback);
        androidApp.on('activityResumed', this.onActivityResume, this);
        androidApp.on('activityPaused', this.onActivityPause, this);
        if (!this.formats) {
            const types = getBarcodeTypes(null);
            barcodeView.setDecoderFactory(new com.journeyapps.barcodescanner.DefaultDecoderFactory(types));
        }
        if (!this.pause) {
            this.resumeScanning();
        }
    }

    disposeNativeView() {
        const barcodeView = this.nativeViewProtected;
        barcodeView.decodeContinuous(null);
        barcodeView.stopDecoding();
        barcodeView.pause();
        this.callback = null;
        // this.beepManager = null;

        androidApp.off('activityResumed', this.onActivityResume, this);
        androidApp.off('activityPaused', this.onActivityPause, this);
        super.disposeNativeView();
    }

    pauseScanning(): void {
        this.nativeViewProtected.pause();
    }

    resumeScanning(): void {
        perms
            .request('camera')
            .then(r => r[0] === 'authorized')
            .then(r => {
                if (r) {
                    this.nativeViewProtected.resume();
                }
            });
    }
    triggerScan(view) {
        this.nativeViewProtected.decodeSingle(this.callback);
    }

    [formatsProperty.setNative](value: string) {
        this.formats = value;

        const types = getBarcodeTypes(value);
        this.nativeViewProtected.setDecoderFactory(new com.journeyapps.barcodescanner.DefaultDecoderFactory(types));
    }

    [torchOnProperty.setNative](value: boolean) {
        this.nativeViewProtected.setTorch(value);
    }

    [preferFrontCameraProperty.setNative](value: boolean) {
        this.preferFrontCamera = value;

        const barcodeView = this.nativeViewProtected;
        const settings = barcodeView.getCameraSettings();

        if (barcodeView.isPreviewActive()) {
            barcodeView.pause();
        }

        //swap the id of the camera to be used
        if (value && settings.getRequestedCameraId() == android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK) {
            settings.setRequestedCameraId(android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT);
        } else if (!value && settings.getRequestedCameraId() == android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT) {
            settings.setRequestedCameraId(android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK);
        }
        barcodeView.setCameraSettings(settings);

        barcodeView.resume();
    }

    [beepOnScanProperty.setNative](value: boolean) {
        if (value && !BarcodeView.beepManager) {
            BarcodeView.beepManager = new com.google.zxing.client.android.BeepManager(this._context);
        }
    }

    [pauseProperty.setNative](value: boolean) {
        value ? this.pauseScanning() : this.resumeScanning();
    }
}

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
    const barcodeEncoder = new com.nativescript.barcodeview.BarcodeEncoder();
    if (frontColor) {
        let color = frontColor instanceof Color? frontColor : new Color(frontColor);
        barcodeEncoder.frontColor = color.android;
    }
    if (backColor) {
        let color = backColor instanceof Color? backColor : new Color(backColor);
        barcodeEncoder.backColor = color.android;
    }
    const nFormat = nativeFormat(type);
    if (nFormat) {
        const bitmap = barcodeEncoder.encodeBitmap(text, nFormat, width, height);
        return new ImageSource(bitmap);
    }
    return null;
}
