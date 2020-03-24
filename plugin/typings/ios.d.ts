declare class QRCodeReader extends NSObject {
    static alloc(): QRCodeReader; // inherited from NSObject

    static isAvailable(): boolean;

    static new(): QRCodeReader; // inherited from NSObject

    static readerWithMetadataObjectTypes(metadataObjectTypes: NSArray<any>): QRCodeReader;

    static supportsMetadataObjectTypes(metadataObjectTypes: NSArray<any>): boolean;

    static videoOrientationFromInterfaceOrientation(interfaceOrientation: UIInterfaceOrientation): AVCaptureVideoOrientation;

    readonly defaultDeviceInput: AVCaptureDeviceInput;

    readonly frontDeviceInput: AVCaptureDeviceInput;

    readonly metadataObjectTypes: NSArray<any>;

    readonly metadataOutput: AVCaptureMetadataOutput;

    readonly previewLayer: AVCaptureVideoPreviewLayer;

    constructor(o: { metadataObjectTypes: NSArray<any> });

    hasFrontDevice(): boolean;

    initWithMetadataObjectTypes(metadataObjectTypes: NSArray<any>): this;

    isTorchAvailable(): boolean;

    running(): boolean;

    setCompletionWithBlock(completionBlock: (p1: string, p2: string) => void): void;

    startScanning(): void;

    stopScanning(): void;

    switchDeviceInput(): void;

    toggleTorch(): void;
    setTorch(on: boolean): void;
    setMetadataObjectTypes(types: Array<any>);
}
