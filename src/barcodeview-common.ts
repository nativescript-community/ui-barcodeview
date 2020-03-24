import { ContentView } from '@nativescript/core/ui/content-view';
import { Property } from '@nativescript/core/ui/core/properties';
import { booleanConverter, Color } from '@nativescript/core/ui/core/view-base';
import { ImageSource } from '@nativescript/core/image-source/image-source';

export type BarcodeFormat =
    | 'QR_CODE'
    | 'PDF_417'
    | 'AZTEC'
    | 'UPC_E'
    | 'CODE_39'
    | 'CODE_39_MOD_43'
    | 'CODE_93'
    | 'CODE_128'
    | 'DATA_MATRIX'
    | 'EAN_8'
    | 'ITF'
    | 'EAN_13'
    | 'UPC_A'
    | 'CODABAR'
    | 'MAXICODE'
    | 'RSS_14'
    | 'INTERLEAVED_2_OF_5';

export interface ScanResult {
    text: string;
    format: BarcodeFormat;
}


/**** View-related stuff below ****/
export const formatsProperty = new Property<BarcodeView, string>({
    name: 'formats',
    defaultValue: null
});

export const preferFrontCameraProperty = new Property<BarcodeView, boolean>({
    name: 'preferFrontCamera',
    defaultValue: false,
    valueConverter: booleanConverter
});
export const torchOnProperty = new Property<BarcodeView, boolean>({
    name: 'torchOn',
    defaultValue: false,
    valueConverter: booleanConverter
});

export const beepOnScanProperty = new Property<BarcodeView, boolean>({
    name: 'beepOnScan',
    defaultValue: true,
    valueConverter: booleanConverter
});

export const reportDuplicatesProperty = new Property<BarcodeView, boolean>({
    name: 'reportDuplicates',
    defaultValue: false,
    valueConverter: booleanConverter
});

export const pauseProperty = new Property<BarcodeView, boolean>({
    name: 'pause',
    defaultValue: false,
    valueConverter: booleanConverter
});

export abstract class BarcodeView extends ContentView {
    static scanResultEvent: string = 'scanResult';

    protected formats: string;
    protected preferFrontCamera: boolean;
    protected beepOnScan: boolean;
    protected reportDuplicates: boolean;
    protected pause: boolean;
    protected torchOn: boolean;

    abstract pauseScanning();

    abstract resumeScanning();
}

export function generateBarCode(options: { text: string; type: BarcodeFormat; width: number; height: number; frontColor?: Color | string; backColor?: Color | string }): ImageSource {
    return null;
}

pauseProperty.register(BarcodeView);
formatsProperty.register(BarcodeView);
preferFrontCameraProperty.register(BarcodeView);
beepOnScanProperty.register(BarcodeView);
reportDuplicatesProperty.register(BarcodeView);
torchOnProperty.register(BarcodeView);
