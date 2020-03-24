declare module com {
	export module nativescript {
		export module barcodeview {
            export class BarcodeEncoder extends com.journeyapps.barcodescanner.BarcodeEncoder {
                frontColor:number
                backColor:number
            }
        }
    }
}
declare module com {
	export module google {
		export module zxing {
			export class BarcodeFormat {
				public static class: java.lang.Class<com.google.zxing.BarcodeFormat>;
				public static AZTEC: com.google.zxing.BarcodeFormat;
				public static CODABAR: com.google.zxing.BarcodeFormat;
				public static CODE_39: com.google.zxing.BarcodeFormat;
				public static CODE_93: com.google.zxing.BarcodeFormat;
				public static CODE_128: com.google.zxing.BarcodeFormat;
				public static DATA_MATRIX: com.google.zxing.BarcodeFormat;
				public static EAN_8: com.google.zxing.BarcodeFormat;
				public static EAN_13: com.google.zxing.BarcodeFormat;
				public static ITF: com.google.zxing.BarcodeFormat;
				public static MAXICODE: com.google.zxing.BarcodeFormat;
				public static PDF_417: com.google.zxing.BarcodeFormat;
				public static QR_CODE: com.google.zxing.BarcodeFormat;
				public static RSS_14: com.google.zxing.BarcodeFormat;
				public static RSS_EXPANDED: com.google.zxing.BarcodeFormat;
				public static UPC_A: com.google.zxing.BarcodeFormat;
				public static UPC_E: com.google.zxing.BarcodeFormat;
				public static UPC_EAN_EXTENSION: com.google.zxing.BarcodeFormat;
				public static valueOf(param0: string): com.google.zxing.BarcodeFormat;
				public static values(): native.Array<com.google.zxing.BarcodeFormat>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export abstract class Binarizer extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.Binarizer>;
				public getBlackMatrix(): com.google.zxing.common.BitMatrix;
				public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
				public getWidth(): number;
				public getHeight(): number;
				public getLuminanceSource(): com.google.zxing.LuminanceSource;
				public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
				public constructor(param0: com.google.zxing.LuminanceSource);
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class BinaryBitmap extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.BinaryBitmap>;
				public rotateCounterClockwise45(): com.google.zxing.BinaryBitmap;
				public getBlackMatrix(): com.google.zxing.common.BitMatrix;
				public constructor(param0: com.google.zxing.Binarizer);
				public getWidth(): number;
				public getHeight(): number;
				public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.BinaryBitmap;
				public isRotateSupported(): boolean;
				public isCropSupported(): boolean;
				public toString(): string;
				public rotateCounterClockwise(): com.google.zxing.BinaryBitmap;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class ChecksumException extends com.google.zxing.ReaderException {
				public static class: java.lang.Class<com.google.zxing.ChecksumException>;
				public static getChecksumInstance(param0: java.lang.Throwable): com.google.zxing.ChecksumException;
				public static getChecksumInstance(): com.google.zxing.ChecksumException;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class DecodeHintType {
				public static class: java.lang.Class<com.google.zxing.DecodeHintType>;
				public static OTHER: com.google.zxing.DecodeHintType;
				public static PURE_BARCODE: com.google.zxing.DecodeHintType;
				public static POSSIBLE_FORMATS: com.google.zxing.DecodeHintType;
				public static TRY_HARDER: com.google.zxing.DecodeHintType;
				public static CHARACTER_SET: com.google.zxing.DecodeHintType;
				public static ALLOWED_LENGTHS: com.google.zxing.DecodeHintType;
				public static ASSUME_CODE_39_CHECK_DIGIT: com.google.zxing.DecodeHintType;
				public static ASSUME_GS1: com.google.zxing.DecodeHintType;
				public static RETURN_CODABAR_START_END: com.google.zxing.DecodeHintType;
				public static NEED_RESULT_POINT_CALLBACK: com.google.zxing.DecodeHintType;
				public static ALLOWED_EAN_EXTENSIONS: com.google.zxing.DecodeHintType;
				public static valueOf(param0: string): com.google.zxing.DecodeHintType;
				public getValueType(): java.lang.Class<any>;
				public static values(): native.Array<com.google.zxing.DecodeHintType>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class Dimension extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.Dimension>;
				public constructor(param0: number, param1: number);
				public getWidth(): number;
				public getHeight(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class EncodeHintType {
				public static class: java.lang.Class<com.google.zxing.EncodeHintType>;
				public static ERROR_CORRECTION: com.google.zxing.EncodeHintType;
				public static CHARACTER_SET: com.google.zxing.EncodeHintType;
				public static DATA_MATRIX_SHAPE: com.google.zxing.EncodeHintType;
				public static MIN_SIZE: com.google.zxing.EncodeHintType;
				public static MAX_SIZE: com.google.zxing.EncodeHintType;
				public static MARGIN: com.google.zxing.EncodeHintType;
				public static PDF417_COMPACT: com.google.zxing.EncodeHintType;
				public static PDF417_COMPACTION: com.google.zxing.EncodeHintType;
				public static PDF417_DIMENSIONS: com.google.zxing.EncodeHintType;
				public static AZTEC_LAYERS: com.google.zxing.EncodeHintType;
				public static QR_VERSION: com.google.zxing.EncodeHintType;
				public static valueOf(param0: string): com.google.zxing.EncodeHintType;
				public static values(): native.Array<com.google.zxing.EncodeHintType>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class FormatException extends com.google.zxing.ReaderException {
				public static class: java.lang.Class<com.google.zxing.FormatException>;
				public static getFormatInstance(): com.google.zxing.FormatException;
				public static getFormatInstance(param0: java.lang.Throwable): com.google.zxing.FormatException;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class InvertedLuminanceSource extends com.google.zxing.LuminanceSource {
				public static class: java.lang.Class<com.google.zxing.InvertedLuminanceSource>;
				public constructor(param0: number, param1: number);
				public isRotateSupported(): boolean;
				public invert(): com.google.zxing.LuminanceSource;
				public getMatrix(): native.Array<number>;
				public rotateCounterClockwise(): com.google.zxing.LuminanceSource;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
				public rotateCounterClockwise45(): com.google.zxing.LuminanceSource;
				public constructor(param0: com.google.zxing.LuminanceSource);
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export abstract class LuminanceSource extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.LuminanceSource>;
				public constructor(param0: number, param1: number);
				public getWidth(): number;
				public getHeight(): number;
				public isRotateSupported(): boolean;
				public invert(): com.google.zxing.LuminanceSource;
				public getMatrix(): native.Array<number>;
				public rotateCounterClockwise(): com.google.zxing.LuminanceSource;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
				public rotateCounterClockwise45(): com.google.zxing.LuminanceSource;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class MultiFormatReader extends java.lang.Object implements com.google.zxing.Reader {
				public static class: java.lang.Class<com.google.zxing.MultiFormatReader>;
				public reset(): void;
				public decodeWithState(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
				public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
				public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
				public setHints(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class MultiFormatWriter extends java.lang.Object implements com.google.zxing.Writer {
				public static class: java.lang.Class<com.google.zxing.MultiFormatWriter>;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class NotFoundException extends com.google.zxing.ReaderException {
				public static class: java.lang.Class<com.google.zxing.NotFoundException>;
				public static getNotFoundInstance(): com.google.zxing.NotFoundException;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class PlanarYUVLuminanceSource extends com.google.zxing.LuminanceSource {
				public static class: java.lang.Class<com.google.zxing.PlanarYUVLuminanceSource>;
				public constructor(param0: number, param1: number);
				public renderThumbnail(): native.Array<number>;
				public getThumbnailHeight(): number;
				public getMatrix(): native.Array<number>;
				public getThumbnailWidth(): number;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class RGBLuminanceSource extends com.google.zxing.LuminanceSource {
				public static class: java.lang.Class<com.google.zxing.RGBLuminanceSource>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: native.Array<number>);
				public getMatrix(): native.Array<number>;
				public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
				public isCropSupported(): boolean;
				public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class Reader extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.Reader>;
				/**
				 * Constructs a new instance of the com.google.zxing.Reader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					reset(): void;
				});
				public constructor();
				public reset(): void;
				public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
				public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export abstract class ReaderException extends java.lang.Exception {
				public static class: java.lang.Class<com.google.zxing.ReaderException>;
				public static isStackTrace: boolean;
				public static NO_TRACE: native.Array<java.lang.StackTraceElement>;
				public fillInStackTrace(): java.lang.Throwable;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class Result extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.Result>;
				public constructor(param0: string, param1: native.Array<number>, param2: number, param3: native.Array<com.google.zxing.ResultPoint>, param4: com.google.zxing.BarcodeFormat, param5: number);
				public getBarcodeFormat(): com.google.zxing.BarcodeFormat;
				public addResultPoints(param0: native.Array<com.google.zxing.ResultPoint>): void;
				public getRawBytes(): native.Array<number>;
				public putMetadata(param0: com.google.zxing.ResultMetadataType, param1: any): void;
				public toString(): string;
				public getText(): string;
				public constructor(param0: string, param1: native.Array<number>, param2: native.Array<com.google.zxing.ResultPoint>, param3: com.google.zxing.BarcodeFormat, param4: number);
				public putAllMetadata(param0: java.util.Map<com.google.zxing.ResultMetadataType,any>): void;
				public constructor(param0: string, param1: native.Array<number>, param2: native.Array<com.google.zxing.ResultPoint>, param3: com.google.zxing.BarcodeFormat);
				public getResultMetadata(): java.util.Map<com.google.zxing.ResultMetadataType,any>;
				public getNumBits(): number;
				public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
				public getTimestamp(): number;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class ResultMetadataType {
				public static class: java.lang.Class<com.google.zxing.ResultMetadataType>;
				public static OTHER: com.google.zxing.ResultMetadataType;
				public static ORIENTATION: com.google.zxing.ResultMetadataType;
				public static BYTE_SEGMENTS: com.google.zxing.ResultMetadataType;
				public static ERROR_CORRECTION_LEVEL: com.google.zxing.ResultMetadataType;
				public static ISSUE_NUMBER: com.google.zxing.ResultMetadataType;
				public static SUGGESTED_PRICE: com.google.zxing.ResultMetadataType;
				public static POSSIBLE_COUNTRY: com.google.zxing.ResultMetadataType;
				public static UPC_EAN_EXTENSION: com.google.zxing.ResultMetadataType;
				public static PDF417_EXTRA_METADATA: com.google.zxing.ResultMetadataType;
				public static STRUCTURED_APPEND_SEQUENCE: com.google.zxing.ResultMetadataType;
				public static STRUCTURED_APPEND_PARITY: com.google.zxing.ResultMetadataType;
				public static valueOf(param0: string): com.google.zxing.ResultMetadataType;
				public static values(): native.Array<com.google.zxing.ResultMetadataType>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class ResultPoint extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.ResultPoint>;
				public constructor(param0: number, param1: number);
				public getX(): number;
				public hashCode(): number;
				public getY(): number;
				public equals(param0: any): boolean;
				public static distance(param0: com.google.zxing.ResultPoint, param1: com.google.zxing.ResultPoint): number;
				public toString(): string;
				public static orderBestPatterns(param0: native.Array<com.google.zxing.ResultPoint>): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class ResultPointCallback extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.ResultPointCallback>;
				/**
				 * Constructs a new instance of the com.google.zxing.ResultPointCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				});
				public constructor();
				public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class Writer extends java.lang.Object {
				public static class: java.lang.Class<com.google.zxing.Writer>;
				/**
				 * Constructs a new instance of the com.google.zxing.Writer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				});
				public constructor();
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export class WriterException extends java.lang.Exception {
				public static class: java.lang.Class<com.google.zxing.WriterException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export class AztecDetectorResult extends com.google.zxing.common.DetectorResult {
					public static class: java.lang.Class<com.google.zxing.aztec.AztecDetectorResult>;
					public getNbLayers(): number;
					public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>);
					public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>, param2: boolean, param3: number, param4: number);
					public isCompact(): boolean;
					public getNbDatablocks(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export class AztecReader extends java.lang.Object implements com.google.zxing.Reader {
					public static class: java.lang.Class<com.google.zxing.aztec.AztecReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export class AztecWriter extends java.lang.Object implements com.google.zxing.Writer {
					public static class: java.lang.Class<com.google.zxing.aztec.AztecWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module decoder {
					export class Decoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.decoder.Decoder>;
						public constructor();
						public decode(param0: com.google.zxing.aztec.AztecDetectorResult): com.google.zxing.common.DecoderResult;
						public static highLevelDecode(param0: native.Array<boolean>): string;
					}
					export module Decoder {
						export class Table {
							public static class: java.lang.Class<com.google.zxing.aztec.decoder.Decoder.Table>;
							public static UPPER: com.google.zxing.aztec.decoder.Decoder.Table;
							public static LOWER: com.google.zxing.aztec.decoder.Decoder.Table;
							public static MIXED: com.google.zxing.aztec.decoder.Decoder.Table;
							public static DIGIT: com.google.zxing.aztec.decoder.Decoder.Table;
							public static PUNCT: com.google.zxing.aztec.decoder.Decoder.Table;
							public static BINARY: com.google.zxing.aztec.decoder.Decoder.Table;
							public static valueOf(param0: string): com.google.zxing.aztec.decoder.Decoder.Table;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static values(): native.Array<com.google.zxing.aztec.decoder.Decoder.Table>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module detector {
					export class Detector extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.detector.Detector>;
						public detect(param0: boolean): com.google.zxing.aztec.AztecDetectorResult;
						public detect(): com.google.zxing.aztec.AztecDetectorResult;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
					export module Detector {
						export class Point extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.aztec.detector.Detector.Point>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class AztecCode extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.AztecCode>;
						public setSize(param0: number): void;
						public getMatrix(): com.google.zxing.common.BitMatrix;
						public setCompact(param0: boolean): void;
						public constructor();
						public getSize(): number;
						public setCodeWords(param0: number): void;
						public isCompact(): boolean;
						public setLayers(param0: number): void;
						public getCodeWords(): number;
						public setMatrix(param0: com.google.zxing.common.BitMatrix): void;
						public getLayers(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class BinaryShiftToken extends com.google.zxing.aztec.encoder.Token {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.BinaryShiftToken>;
						public toString(): string;
						public appendTo(param0: com.google.zxing.common.BitArray, param1: native.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class Encoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.Encoder>;
						public static DEFAULT_EC_PERCENT: number;
						public static DEFAULT_AZTEC_LAYERS: number;
						public static encode(param0: native.Array<number>, param1: number, param2: number): com.google.zxing.aztec.encoder.AztecCode;
						public static encode(param0: native.Array<number>): com.google.zxing.aztec.encoder.AztecCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class HighLevelEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.HighLevelEncoder>;
						public encode(): com.google.zxing.common.BitArray;
						public constructor(param0: native.Array<number>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class SimpleToken extends com.google.zxing.aztec.encoder.Token {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.SimpleToken>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export class State extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.State>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module aztec {
				export module encoder {
					export abstract class Token extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.aztec.encoder.Token>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class AmbientLightManager extends java.lang.Object implements globalAndroid.hardware.SensorEventListener {
						public static class: java.lang.Class<com.google.zxing.client.android.AmbientLightManager>;
						public start(): void;
						public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
						public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.journeyapps.barcodescanner.camera.CameraManager, param2: com.journeyapps.barcodescanner.camera.CameraSettings);
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class BeepManager extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.android.BeepManager>;
						public constructor(param0: globalAndroid.app.Activity);
						public playBeepSoundAndVibrate(): void;
						public playBeepSound(): globalAndroid.media.MediaPlayer;
						public setVibrateEnabled(param0: boolean): void;
						public setBeepEnabled(param0: boolean): void;
						public isVibrateEnabled(): boolean;
						public isBeepEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.android.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class DecodeFormatManager extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.android.DecodeFormatManager>;
						public static parseDecodeFormats(param0: globalAndroid.content.Intent): java.util.Set<com.google.zxing.BarcodeFormat>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class DecodeHintManager extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.android.DecodeHintManager>;
						public static parseDecodeHints(param0: globalAndroid.content.Intent): java.util.Map<com.google.zxing.DecodeHintType,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class InactivityTimer extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.android.InactivityTimer>;
						public activity(): void;
						public start(): void;
						public cancel(): void;
						public constructor(param0: globalAndroid.content.Context, param1: java.lang.Runnable);
					}
					export module InactivityTimer {
						export class PowerStatusReceiver extends globalAndroid.content.BroadcastReceiver {
							public static class: java.lang.Class<com.google.zxing.client.android.InactivityTimer.PowerStatusReceiver>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export class Intents extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.android.Intents>;
					}
					export module Intents {
						export class Scan extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.client.android.Intents.Scan>;
							public static ACTION: string;
							public static MODE: string;
							public static PRODUCT_MODE: string;
							public static ONE_D_MODE: string;
							public static QR_CODE_MODE: string;
							public static DATA_MATRIX_MODE: string;
							public static AZTEC_MODE: string;
							public static PDF417_MODE: string;
							public static FORMATS: string;
							public static CAMERA_ID: string;
							public static TORCH_ENABLED: string;
							public static CHARACTER_SET: string;
							public static BEEP_ENABLED: string;
							public static BARCODE_IMAGE_ENABLED: string;
							public static TIMEOUT: string;
							public static MISSING_CAMERA_PERMISSION: string;
							public static SHOW_MISSING_CAMERA_PERMISSION_DIALOG: string;
							public static MISSING_CAMERA_PERMISSION_DIALOG_MESSAGE: string;
							public static ORIENTATION_LOCKED: string;
							public static PROMPT_MESSAGE: string;
							public static RESULT: string;
							public static RESULT_FORMAT: string;
							public static RESULT_UPC_EAN_EXTENSION: string;
							public static RESULT_BYTES: string;
							public static RESULT_ORIENTATION: string;
							public static RESULT_ERROR_CORRECTION_LEVEL: string;
							public static RESULT_BYTE_SEGMENTS_PREFIX: string;
							public static RESULT_BARCODE_IMAGE_PATH: string;
							public static SCAN_TYPE: string;
							public static NORMAL_SCAN: number;
							public static INVERTED_SCAN: number;
							public static MIXED_SCAN: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export module camera {
						export class CameraConfigurationUtils extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.client.android.camera.CameraConfigurationUtils>;
							public static setBestPreviewFPS(param0: globalAndroid.hardware.Camera.Parameters): void;
							public static setBarcodeSceneMode(param0: globalAndroid.hardware.Camera.Parameters): void;
							public static collectStats(param0: globalAndroid.hardware.Camera.Parameters): string;
							public static setVideoStabilization(param0: globalAndroid.hardware.Camera.Parameters): void;
							public static setFocusArea(param0: globalAndroid.hardware.Camera.Parameters): void;
							public static setInvertColor(param0: globalAndroid.hardware.Camera.Parameters): void;
							public static collectStats(param0: string): string;
							public static setTorch(param0: globalAndroid.hardware.Camera.Parameters, param1: boolean): void;
							public static setZoom(param0: globalAndroid.hardware.Camera.Parameters, param1: number): void;
							public static setBestExposure(param0: globalAndroid.hardware.Camera.Parameters, param1: boolean): void;
							public static setBestPreviewFPS(param0: globalAndroid.hardware.Camera.Parameters, param1: number, param2: number): void;
							public static setFocus(param0: globalAndroid.hardware.Camera.Parameters, param1: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode, param2: boolean): void;
							public static setMetering(param0: globalAndroid.hardware.Camera.Parameters): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module android {
					export module camera {
						export module open {
							export class OpenCameraInterface extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.client.android.camera.open.OpenCameraInterface>;
								public static NO_REQUESTED_CAMERA: number;
								public static open(param0: number): globalAndroid.hardware.Camera;
								public static getCameraId(param0: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export abstract class AbstractDoCoMoResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.AbstractDoCoMoResultParser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class AddressBookAUResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.AddressBookAUResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class AddressBookDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.AddressBookDoCoMoResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class AddressBookParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.AddressBookParsedResult>;
						public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: native.Array<string>, param3: native.Array<string>, param4: native.Array<string>, param5: native.Array<string>, param6: native.Array<string>);
						public getNicknames(): native.Array<string>;
						public getGeo(): native.Array<string>;
						public getEmails(): native.Array<string>;
						public getAddressTypes(): native.Array<string>;
						public getURLs(): native.Array<string>;
						public getDisplayResult(): string;
						public getTitle(): string;
						public getOrg(): string;
						public getNames(): native.Array<string>;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getBirthday(): string;
						public getPhoneNumbers(): native.Array<string>;
						public getPhoneTypes(): native.Array<string>;
						public getEmailTypes(): native.Array<string>;
						public getNote(): string;
						public getAddresses(): native.Array<string>;
						public getPronunciation(): string;
						public getInstantMessenger(): string;
						public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: native.Array<string>, param5: native.Array<string>, param6: native.Array<string>, param7: string, param8: string, param9: native.Array<string>, param10: native.Array<string>, param11: string, param12: string, param13: string, param14: native.Array<string>, param15: native.Array<string>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class BizcardResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.BizcardResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class BookmarkDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.BookmarkDoCoMoResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class CalendarParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.CalendarParsedResult>;
						public getLongitude(): number;
						public isStartAllDay(): boolean;
						public getEnd(): java.util.Date;
						public getSummary(): string;
						public getLocation(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: number, param9: number);
						public getAttendees(): native.Array<string>;
						public getDisplayResult(): string;
						public getOrganizer(): string;
						public getLatitude(): number;
						public getStart(): java.util.Date;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public isEndAllDay(): boolean;
						public getDescription(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class EmailAddressParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.EmailAddressParsedResult>;
						public getBody(): string;
						public getTos(): native.Array<string>;
						public getCCs(): native.Array<string>;
						public getSubject(): string;
						public getBCCs(): native.Array<string>;
						/** @deprecated */
						public getEmailAddress(): string;
						/** @deprecated */
						public getMailtoURI(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class EmailAddressResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.EmailAddressResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class EmailDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.EmailDoCoMoResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ExpandedProductParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.ExpandedProductParsedResult>;
						public static KILOGRAM: string;
						public static POUND: string;
						public getProductionDate(): string;
						public getLotNumber(): string;
						public getPackagingDate(): string;
						public getWeightIncrement(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: java.util.Map<string,string>);
						public getPrice(): string;
						public getPriceIncrement(): string;
						public getPriceCurrency(): string;
						public getDisplayResult(): string;
						public getProductID(): string;
						public getSscc(): string;
						public getBestBeforeDate(): string;
						public getWeightType(): string;
						public getExpirationDate(): string;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getUncommonAIs(): java.util.Map<string,string>;
						public getRawText(): string;
						public getWeight(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ExpandedProductResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.ExpandedProductResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ExpandedProductParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class GeoParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.GeoParsedResult>;
						public getLatitude(): number;
						public getLongitude(): number;
						public getGeoURI(): string;
						public getQuery(): string;
						public getAltitude(): number;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class GeoResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.GeoResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.GeoParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ISBNParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.ISBNParsedResult>;
						public getISBN(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ISBNResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.ISBNResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ISBNParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export abstract class ParsedResult extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.result.ParsedResult>;
						public getType(): com.google.zxing.client.result.ParsedResultType;
						public static maybeAppend(param0: native.Array<string>, param1: java.lang.StringBuilder): void;
						public static maybeAppend(param0: string, param1: java.lang.StringBuilder): void;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getDisplayResult(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ParsedResultType {
						public static class: java.lang.Class<com.google.zxing.client.result.ParsedResultType>;
						public static ADDRESSBOOK: com.google.zxing.client.result.ParsedResultType;
						public static EMAIL_ADDRESS: com.google.zxing.client.result.ParsedResultType;
						public static PRODUCT: com.google.zxing.client.result.ParsedResultType;
						public static URI: com.google.zxing.client.result.ParsedResultType;
						public static TEXT: com.google.zxing.client.result.ParsedResultType;
						public static GEO: com.google.zxing.client.result.ParsedResultType;
						public static TEL: com.google.zxing.client.result.ParsedResultType;
						public static SMS: com.google.zxing.client.result.ParsedResultType;
						public static CALENDAR: com.google.zxing.client.result.ParsedResultType;
						public static WIFI: com.google.zxing.client.result.ParsedResultType;
						public static ISBN: com.google.zxing.client.result.ParsedResultType;
						public static VIN: com.google.zxing.client.result.ParsedResultType;
						public static values(): native.Array<com.google.zxing.client.result.ParsedResultType>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.google.zxing.client.result.ParsedResultType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ProductParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.ProductParsedResult>;
						public getDisplayResult(): string;
						public getProductID(): string;
						public getNormalizedProductID(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class ProductResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.ProductResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ProductParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export abstract class ResultParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.client.result.ResultParser>;
						public constructor();
						public static getMassagedText(param0: com.google.zxing.Result): string;
						public static parseResult(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public static isStringOfDigits(param0: string, param1: number): boolean;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public static maybeAppend(param0: native.Array<string>, param1: java.lang.StringBuilder): void;
						public static maybeAppend(param0: string, param1: java.lang.StringBuilder): void;
						public static unescapeBackslash(param0: string): string;
						public static parseHexDigit(param0: string): number;
						public static maybeWrap(param0: string): native.Array<string>;
						public static isSubstringOfDigits(param0: string, param1: number, param2: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMSMMSResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.SMSMMSResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.SMSParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMSParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.SMSParsedResult>;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public getBody(): string;
						public getNumbers(): native.Array<string>;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getSMSURI(): string;
						public getSubject(): string;
						public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: string, param3: string);
						public getVias(): native.Array<string>;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMSTOMMSTOResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.SMSTOMMSTOResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.SMSParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class SMTPResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.SMTPResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class TelParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.TelParsedResult>;
						public getNumber(): string;
						public constructor(param0: string, param1: string, param2: string);
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getTelURI(): string;
						public getDisplayResult(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class TelResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.TelResultParser>;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.TelParsedResult;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class TextParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.TextParsedResult>;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public constructor(param0: string, param1: string);
						public getLanguage(): string;
						public getText(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class URIParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.URIParsedResult>;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public isPossiblyMaliciousURI(): boolean;
						public getURI(): string;
						public constructor(param0: string, param1: string);
						public getDisplayResult(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class URIResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.URIResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class URLTOResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.URLTOResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VCardResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.VCardResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VEventResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.VEventResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.CalendarParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VINParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.VINParsedResult>;
						public getVehicleIdentifierSection(): string;
						public getModelYear(): number;
						public getVehicleAttributes(): string;
						public getSequentialNumber(): string;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public getVehicleDescriptorSection(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: string, param8: string);
						public getCountryCode(): string;
						public getVIN(): string;
						public getDisplayResult(): string;
						public getWorldManufacturerID(): string;
						public getPlantCode(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class VINResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.VINResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.VINParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class WifiParsedResult extends com.google.zxing.client.result.ParsedResult {
						public static class: java.lang.Class<com.google.zxing.client.result.WifiParsedResult>;
						public constructor(param0: string, param1: string, param2: string);
						public isHidden(): boolean;
						public constructor(param0: com.google.zxing.client.result.ParsedResultType);
						public constructor(param0: string, param1: string, param2: string, param3: boolean);
						public getPassword(): string;
						public getNetworkEncryption(): string;
						public getSsid(): string;
						public getDisplayResult(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module client {
				export module result {
					export class WifiResultParser extends com.google.zxing.client.result.ResultParser {
						public static class: java.lang.Class<com.google.zxing.client.result.WifiResultParser>;
						public constructor();
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
						public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.WifiParsedResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class BitArray extends java.lang.Object implements java.lang.Cloneable {
					public static class: java.lang.Class<com.google.zxing.common.BitArray>;
					public appendBits(param0: number, param1: number): void;
					public setRange(param0: number, param1: number): void;
					public setBulk(param0: number, param1: number): void;
					public xor(param0: com.google.zxing.common.BitArray): void;
					public getSize(): number;
					public appendBitArray(param0: com.google.zxing.common.BitArray): void;
					public clone(): com.google.zxing.common.BitArray;
					public toString(): string;
					public clone(): any;
					public constructor();
					public clear(): void;
					public flip(param0: number): void;
					public hashCode(): number;
					public constructor(param0: number);
					public get(param0: number): boolean;
					public appendBit(param0: boolean): void;
					public toBytes(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
					public getNextUnset(param0: number): number;
					public getSizeInBytes(): number;
					public reverse(): void;
					public equals(param0: any): boolean;
					public getNextSet(param0: number): number;
					public set(param0: number): void;
					public isRange(param0: number, param1: number, param2: boolean): boolean;
					public getBitArray(): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class BitMatrix extends java.lang.Object implements java.lang.Cloneable {
					public static class: java.lang.Class<com.google.zxing.common.BitMatrix>;
					public toString(param0: string, param1: string): string;
					public rotate180(): void;
					public clone(): com.google.zxing.common.BitMatrix;
					public flip(param0: number, param1: number): void;
					public unset(param0: number, param1: number): void;
					public setRow(param0: number, param1: com.google.zxing.common.BitArray): void;
					public toString(): string;
					public clone(): any;
					public clear(): void;
					public getEnclosingRectangle(): native.Array<number>;
					public setRegion(param0: number, param1: number, param2: number, param3: number): void;
					public hashCode(): number;
					public get(param0: number, param1: number): boolean;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public getRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
					public getHeight(): number;
					public getWidth(): number;
					/** @deprecated */
					public toString(param0: string, param1: string, param2: string): string;
					public equals(param0: any): boolean;
					public static parse(param0: string, param1: string, param2: string): com.google.zxing.common.BitMatrix;
					public set(param0: number, param1: number): void;
					public xor(param0: com.google.zxing.common.BitMatrix): void;
					public getTopLeftOnBit(): native.Array<number>;
					public getBottomRightOnBit(): native.Array<number>;
					public getRowSize(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class BitSource extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.common.BitSource>;
					public available(): number;
					public constructor(param0: native.Array<number>);
					public getBitOffset(): number;
					public readBits(param0: number): number;
					public getByteOffset(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class CharacterSetECI {
					public static class: java.lang.Class<com.google.zxing.common.CharacterSetECI>;
					public static Cp437: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_1: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_2: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_3: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_4: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_5: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_6: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_7: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_8: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_9: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_10: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_11: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_13: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_14: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_15: com.google.zxing.common.CharacterSetECI;
					public static ISO8859_16: com.google.zxing.common.CharacterSetECI;
					public static SJIS: com.google.zxing.common.CharacterSetECI;
					public static Cp1250: com.google.zxing.common.CharacterSetECI;
					public static Cp1251: com.google.zxing.common.CharacterSetECI;
					public static Cp1252: com.google.zxing.common.CharacterSetECI;
					public static Cp1256: com.google.zxing.common.CharacterSetECI;
					public static UnicodeBigUnmarked: com.google.zxing.common.CharacterSetECI;
					public static UTF8: com.google.zxing.common.CharacterSetECI;
					public static ASCII: com.google.zxing.common.CharacterSetECI;
					public static Big5: com.google.zxing.common.CharacterSetECI;
					public static GB18030: com.google.zxing.common.CharacterSetECI;
					public static EUC_KR: com.google.zxing.common.CharacterSetECI;
					public static getCharacterSetECIByName(param0: string): com.google.zxing.common.CharacterSetECI;
					public static values(): native.Array<com.google.zxing.common.CharacterSetECI>;
					public getValue(): number;
					public static valueOf(param0: string): com.google.zxing.common.CharacterSetECI;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static getCharacterSetECIByValue(param0: number): com.google.zxing.common.CharacterSetECI;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class DecoderResult extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.common.DecoderResult>;
					public constructor(param0: native.Array<number>, param1: string, param2: java.util.List<native.Array<number>>, param3: string);
					public getByteSegments(): java.util.List<native.Array<number>>;
					public getErrorsCorrected(): java.lang.Integer;
					public setErrorsCorrected(param0: java.lang.Integer): void;
					public getText(): string;
					public getErasures(): java.lang.Integer;
					public getECLevel(): string;
					public setNumBits(param0: number): void;
					public setErasures(param0: java.lang.Integer): void;
					public setOther(param0: any): void;
					public getStructuredAppendParity(): number;
					public hasStructuredAppend(): boolean;
					public constructor(param0: native.Array<number>, param1: string, param2: java.util.List<native.Array<number>>, param3: string, param4: number, param5: number);
					public getRawBytes(): native.Array<number>;
					public getOther(): any;
					public getStructuredAppendSequenceNumber(): number;
					public getNumBits(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class DefaultGridSampler extends com.google.zxing.common.GridSampler {
					public static class: java.lang.Class<com.google.zxing.common.DefaultGridSampler>;
					public constructor();
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number): com.google.zxing.common.BitMatrix;
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: com.google.zxing.common.PerspectiveTransform): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class DetectorResult extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.common.DetectorResult>;
					public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>);
					public getBits(): com.google.zxing.common.BitMatrix;
					public getPoints(): native.Array<com.google.zxing.ResultPoint>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class GlobalHistogramBinarizer extends com.google.zxing.Binarizer {
					public static class: java.lang.Class<com.google.zxing.common.GlobalHistogramBinarizer>;
					public constructor(param0: com.google.zxing.LuminanceSource);
					public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
					public getBlackMatrix(): com.google.zxing.common.BitMatrix;
					public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export abstract class GridSampler extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.common.GridSampler>;
					public constructor();
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number): com.google.zxing.common.BitMatrix;
					public static checkAndNudgePoints(param0: com.google.zxing.common.BitMatrix, param1: native.Array<number>): void;
					public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: com.google.zxing.common.PerspectiveTransform): com.google.zxing.common.BitMatrix;
					public static getInstance(): com.google.zxing.common.GridSampler;
					public static setGridSampler(param0: com.google.zxing.common.GridSampler): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class HybridBinarizer extends com.google.zxing.common.GlobalHistogramBinarizer {
					public static class: java.lang.Class<com.google.zxing.common.HybridBinarizer>;
					public constructor(param0: com.google.zxing.LuminanceSource);
					public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
					public getBlackMatrix(): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class PerspectiveTransform extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.common.PerspectiveTransform>;
					public transformPoints(param0: native.Array<number>, param1: native.Array<number>): void;
					public transformPoints(param0: native.Array<number>): void;
					public static quadrilateralToQuadrilateral(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number): com.google.zxing.common.PerspectiveTransform;
					public static quadrilateralToSquare(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): com.google.zxing.common.PerspectiveTransform;
					public static squareToQuadrilateral(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): com.google.zxing.common.PerspectiveTransform;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export class StringUtils extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.common.StringUtils>;
					public static SHIFT_JIS: string;
					public static GB2312: string;
					public static guessEncoding(param0: native.Array<number>, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module detector {
					export class MathUtils extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.detector.MathUtils>;
						public static distance(param0: number, param1: number, param2: number, param3: number): number;
						public static round(param0: number): number;
						public static sum(param0: native.Array<number>): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module detector {
					export class MonochromeRectangleDetector extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.detector.MonochromeRectangleDetector>;
						public detect(): native.Array<com.google.zxing.ResultPoint>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module detector {
					export class WhiteRectangleDetector extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.detector.WhiteRectangleDetector>;
						public constructor(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number);
						public detect(): native.Array<com.google.zxing.ResultPoint>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class GenericGF extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.reedsolomon.GenericGF>;
						public static AZTEC_DATA_12: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_DATA_10: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_DATA_6: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_PARAM: com.google.zxing.common.reedsolomon.GenericGF;
						public static QR_CODE_FIELD_256: com.google.zxing.common.reedsolomon.GenericGF;
						public static DATA_MATRIX_FIELD_256: com.google.zxing.common.reedsolomon.GenericGF;
						public static AZTEC_DATA_8: com.google.zxing.common.reedsolomon.GenericGF;
						public static MAXICODE_FIELD_64: com.google.zxing.common.reedsolomon.GenericGF;
						public getSize(): number;
						public constructor(param0: number, param1: number, param2: number);
						public getGeneratorBase(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class GenericGFPoly extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.reedsolomon.GenericGFPoly>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class ReedSolomonDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.reedsolomon.ReedSolomonDecoder>;
						public constructor(param0: com.google.zxing.common.reedsolomon.GenericGF);
						public decode(param0: native.Array<number>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class ReedSolomonEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.common.reedsolomon.ReedSolomonEncoder>;
						public constructor(param0: com.google.zxing.common.reedsolomon.GenericGF);
						public encode(param0: native.Array<number>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module common {
				export module reedsolomon {
					export class ReedSolomonException extends java.lang.Exception {
						public static class: java.lang.Class<com.google.zxing.common.reedsolomon.ReedSolomonException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export class DataMatrixReader extends java.lang.Object implements com.google.zxing.Reader {
					public static class: java.lang.Class<com.google.zxing.datamatrix.DataMatrixReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export class DataMatrixWriter extends java.lang.Object implements com.google.zxing.Writer {
					public static class: java.lang.Class<com.google.zxing.datamatrix.DataMatrixWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class BitMatrixParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.BitMatrixParser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class DataBlock extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.DataBlock>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class DecodedBitStreamParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser>;
					}
					export module DecodedBitStreamParser {
						export class Mode {
							public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode>;
							public static PAD_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static ASCII_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static C40_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static TEXT_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static ANSIX12_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static EDIFACT_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static BASE256_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static valueOf(param0: string): com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static values(): native.Array<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class Decoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Decoder>;
						public constructor();
						public decode(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module decoder {
					export class Version extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Version>;
						public getDataRegionSizeRows(): number;
						public getSymbolSizeColumns(): number;
						public getDataRegionSizeColumns(): number;
						public getVersionNumber(): number;
						public getTotalCodewords(): number;
						public getSymbolSizeRows(): number;
						public static getVersionForDimensions(param0: number, param1: number): com.google.zxing.datamatrix.decoder.Version;
						public toString(): string;
					}
					export module Version {
						export class ECB extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Version.ECB>;
						}
						export class ECBlocks extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Version.ECBlocks>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module detector {
					export class Detector extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.detector.Detector>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
						public detect(): com.google.zxing.common.DetectorResult;
					}
					export module Detector {
						export class ResultPointsAndTransitions extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.datamatrix.detector.Detector.ResultPointsAndTransitions>;
							public toString(): string;
						}
						export class ResultPointsAndTransitionsComparator extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.datamatrix.detector.Detector.ResultPointsAndTransitionsComparator>;
							public compare(param0: any, param1: any): number;
							public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public compare(param0: com.google.zxing.datamatrix.detector.Detector.ResultPointsAndTransitions, param1: com.google.zxing.datamatrix.detector.Detector.ResultPointsAndTransitions): number;
							public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class ASCIIEncoder extends java.lang.Object implements com.google.zxing.datamatrix.encoder.Encoder {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.ASCIIEncoder>;
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class Base256Encoder extends java.lang.Object implements com.google.zxing.datamatrix.encoder.Encoder {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.Base256Encoder>;
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class C40Encoder extends java.lang.Object implements com.google.zxing.datamatrix.encoder.Encoder {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.C40Encoder>;
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class DataMatrixSymbolInfo144 extends com.google.zxing.datamatrix.encoder.SymbolInfo {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.DataMatrixSymbolInfo144>;
						public getDataLengthForInterleavedBlock(param0: number): number;
						public getInterleavedBlockCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class DefaultPlacement extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.DefaultPlacement>;
						public getBit(param0: number, param1: number): boolean;
						public constructor(param0: string, param1: number, param2: number);
						public place(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class EdifactEncoder extends java.lang.Object implements com.google.zxing.datamatrix.encoder.Encoder {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.EdifactEncoder>;
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class Encoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.Encoder>;
						/**
						 * Constructs a new instance of the com.google.zxing.datamatrix.encoder.Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getEncodingMode(): number;
							encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
						});
						public constructor();
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class EncoderContext extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.EncoderContext>;
						public setSymbolShape(param0: com.google.zxing.datamatrix.encoder.SymbolShapeHint): void;
						public getMessage(): string;
						public writeCodewords(param0: string): void;
						public resetEncoderSignal(): void;
						public getRemainingCharacters(): number;
						public hasMoreCharacters(): boolean;
						public getCurrent(): string;
						public writeCodeword(param0: string): void;
						public signalEncoderChange(param0: number): void;
						public setSizeConstraints(param0: com.google.zxing.Dimension, param1: com.google.zxing.Dimension): void;
						public getNewEncoding(): number;
						public getCodewords(): java.lang.StringBuilder;
						public updateSymbolInfo(): void;
						public updateSymbolInfo(param0: number): void;
						public resetSymbolInfo(): void;
						public getSymbolInfo(): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public setSkipAtEnd(param0: number): void;
						public getCurrentChar(): string;
						public getCodewordCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class ErrorCorrection extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.ErrorCorrection>;
						public static encodeECC200(param0: string, param1: com.google.zxing.datamatrix.encoder.SymbolInfo): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class HighLevelEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.HighLevelEncoder>;
						public static encodeHighLevel(param0: string): string;
						public static encodeHighLevel(param0: string, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint, param2: com.google.zxing.Dimension, param3: com.google.zxing.Dimension): string;
						public static determineConsecutiveDigitCount(param0: string, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class SymbolInfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.SymbolInfo>;
						public matrixWidth: number;
						public matrixHeight: number;
						public getDataLengthForInterleavedBlock(param0: number): number;
						public static lookup(param0: number, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint, param2: com.google.zxing.Dimension, param3: com.google.zxing.Dimension, param4: boolean): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public getErrorLengthForInterleavedBlock(param0: number): number;
						public getInterleavedBlockCount(): number;
						public toString(): string;
						public static lookup(param0: number, param1: boolean, param2: boolean): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
						public getSymbolDataWidth(): number;
						public getSymbolDataHeight(): number;
						public getSymbolHeight(): number;
						public getDataCapacity(): number;
						public getErrorCodewords(): number;
						public getSymbolWidth(): number;
						public static lookup(param0: number): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public static lookup(param0: number, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint): com.google.zxing.datamatrix.encoder.SymbolInfo;
						public static overrideSymbolSet(param0: native.Array<com.google.zxing.datamatrix.encoder.SymbolInfo>): void;
						public getCodewordCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class SymbolShapeHint {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.SymbolShapeHint>;
						public static FORCE_NONE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
						public static FORCE_SQUARE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
						public static FORCE_RECTANGLE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.google.zxing.datamatrix.encoder.SymbolShapeHint>;
						public static valueOf(param0: string): com.google.zxing.datamatrix.encoder.SymbolShapeHint;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class TextEncoder extends com.google.zxing.datamatrix.encoder.C40Encoder {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.TextEncoder>;
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module datamatrix {
				export module encoder {
					export class X12Encoder extends com.google.zxing.datamatrix.encoder.C40Encoder {
						public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.X12Encoder>;
						public getEncodingMode(): number;
						public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module integration {
				export module android {
					export class IntentIntegrator extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.integration.android.IntentIntegrator>;
						public static REQUEST_CODE: number;
						public static UPC_A: string;
						public static UPC_E: string;
						public static EAN_8: string;
						public static EAN_13: string;
						public static RSS_14: string;
						public static CODE_39: string;
						public static CODE_93: string;
						public static CODE_128: string;
						public static ITF: string;
						public static RSS_EXPANDED: string;
						public static QR_CODE: string;
						public static DATA_MATRIX: string;
						public static PDF_417: string;
						public static PRODUCT_CODE_TYPES: java.util.Collection<string>;
						public static ONE_D_CODE_TYPES: java.util.Collection<string>;
						public static ALL_CODE_TYPES: java.util.Collection<string>;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public setPrompt(param0: string): com.google.zxing.integration.android.IntentIntegrator;
						public setDesiredBarcodeFormats(param0: java.util.Collection<string>): com.google.zxing.integration.android.IntentIntegrator;
						public setBarcodeImageEnabled(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
						public getMoreExtras(): java.util.Map<string,any>;
						public static parseActivityResult(param0: number, param1: globalAndroid.content.Intent): com.google.zxing.integration.android.IntentResult;
						public static forFragment(param0: globalAndroid.app.Fragment): com.google.zxing.integration.android.IntentIntegrator;
						public initiateScan(): void;
						public setTimeout(param0: number): com.google.zxing.integration.android.IntentIntegrator;
						public constructor(param0: globalAndroid.app.Activity);
						public static forSupportFragment(param0: androidx.fragment.app.Fragment): com.google.zxing.integration.android.IntentIntegrator;
						public static parseActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): com.google.zxing.integration.android.IntentResult;
						public setCameraId(param0: number): com.google.zxing.integration.android.IntentIntegrator;
						public addExtra(param0: string, param1: any): com.google.zxing.integration.android.IntentIntegrator;
						public setCaptureActivity(param0: java.lang.Class<any>): com.google.zxing.integration.android.IntentIntegrator;
						public setRequestCode(param0: number): com.google.zxing.integration.android.IntentIntegrator;
						public setOrientationLocked(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
						public setBeepEnabled(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
						public setTorchEnabled(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
						public initiateScan(param0: java.util.Collection<string>): void;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public createScanIntent(): globalAndroid.content.Intent;
						public getDefaultCaptureActivity(): java.lang.Class<any>;
						public getCaptureActivity(): java.lang.Class<any>;
						public setDesiredBarcodeFormats(param0: native.Array<string>): com.google.zxing.integration.android.IntentIntegrator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module integration {
				export module android {
					export class IntentResult extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.integration.android.IntentResult>;
						public getRawBytes(): native.Array<number>;
						public getBarcodeImagePath(): string;
						public getErrorCorrectionLevel(): string;
						public getOrientation(): java.lang.Integer;
						public getOriginalIntent(): globalAndroid.content.Intent;
						public getFormatName(): string;
						public getContents(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export class MaxiCodeReader extends java.lang.Object implements com.google.zxing.Reader {
					public static class: java.lang.Class<com.google.zxing.maxicode.MaxiCodeReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export module decoder {
					export class BitMatrixParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.maxicode.decoder.BitMatrixParser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export module decoder {
					export class DecodedBitStreamParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.maxicode.decoder.DecodedBitStreamParser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module maxicode {
				export module decoder {
					export class Decoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.maxicode.decoder.Decoder>;
						public constructor();
						public decode(param0: com.google.zxing.common.BitMatrix, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module multi {
				export class ByQuadrantReader extends java.lang.Object implements com.google.zxing.Reader {
					public static class: java.lang.Class<com.google.zxing.multi.ByQuadrantReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor(param0: com.google.zxing.Reader);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module multi {
				export class GenericMultipleBarcodeReader extends java.lang.Object implements com.google.zxing.multi.MultipleBarcodeReader {
					public static class: java.lang.Class<com.google.zxing.multi.GenericMultipleBarcodeReader>;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.Result>;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
					public constructor(param0: com.google.zxing.Reader);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module multi {
				export class MultipleBarcodeReader extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.multi.MultipleBarcodeReader>;
					/**
					 * Constructs a new instance of the com.google.zxing.multi.MultipleBarcodeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
						decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.Result>;
					});
					public constructor();
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.Result>;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module multi {
				export module qrcode {
					export class QRCodeMultiReader extends com.google.zxing.qrcode.QRCodeReader implements com.google.zxing.multi.MultipleBarcodeReader {
						public static class: java.lang.Class<com.google.zxing.multi.qrcode.QRCodeMultiReader>;
						public constructor();
						public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
						public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.Result>;
						public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
						public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
						public reset(): void;
					}
					export module QRCodeMultiReader {
						export class SAComparator extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.multi.qrcode.QRCodeMultiReader.SAComparator>;
							public compare(param0: any, param1: any): number;
							public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
							public compare(param0: com.google.zxing.Result, param1: com.google.zxing.Result): number;
							public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module multi {
				export module qrcode {
					export module detector {
						export class MultiDetector extends com.google.zxing.qrcode.detector.Detector {
							public static class: java.lang.Class<com.google.zxing.multi.qrcode.detector.MultiDetector>;
							public constructor(param0: com.google.zxing.common.BitMatrix);
							public detectMulti(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.common.DetectorResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module multi {
				export module qrcode {
					export module detector {
						export class MultiFinderPatternFinder extends com.google.zxing.qrcode.detector.FinderPatternFinder {
							public static class: java.lang.Class<com.google.zxing.multi.qrcode.detector.MultiFinderPatternFinder>;
							public findMulti(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.qrcode.detector.FinderPatternInfo>;
						}
						export module MultiFinderPatternFinder {
							export class ModuleSizeComparator extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.multi.qrcode.detector.MultiFinderPatternFinder.ModuleSizeComparator>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
								public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class CodaBarReader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.CodaBarReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class CodaBarWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public static class: java.lang.Class<com.google.zxing.oned.CodaBarWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code128Reader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.Code128Reader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code128Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public static class: java.lang.Class<com.google.zxing.oned.Code128Writer>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
				export module Code128Writer {
					export class CType {
						public static class: java.lang.Class<com.google.zxing.oned.Code128Writer.CType>;
						public static UNCODABLE: com.google.zxing.oned.Code128Writer.CType;
						public static ONE_DIGIT: com.google.zxing.oned.Code128Writer.CType;
						public static TWO_DIGITS: com.google.zxing.oned.Code128Writer.CType;
						public static FNC_1: com.google.zxing.oned.Code128Writer.CType;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.google.zxing.oned.Code128Writer.CType>;
						public static valueOf(param0: string): com.google.zxing.oned.Code128Writer.CType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code39Reader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.Code39Reader>;
					public constructor(param0: boolean, param1: boolean);
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor(param0: boolean);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code39Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public static class: java.lang.Class<com.google.zxing.oned.Code39Writer>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code93Reader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.Code93Reader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class Code93Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public static class: java.lang.Class<com.google.zxing.oned.Code93Writer>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
					public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN13Reader extends com.google.zxing.oned.UPCEANReader {
					public static class: java.lang.Class<com.google.zxing.oned.EAN13Reader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN13Writer extends com.google.zxing.oned.UPCEANWriter {
					public static class: java.lang.Class<com.google.zxing.oned.EAN13Writer>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN8Reader extends com.google.zxing.oned.UPCEANReader {
					public static class: java.lang.Class<com.google.zxing.oned.EAN8Reader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EAN8Writer extends com.google.zxing.oned.UPCEANWriter {
					public static class: java.lang.Class<com.google.zxing.oned.EAN8Writer>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class EANManufacturerOrgSupport extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.oned.EANManufacturerOrgSupport>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class ITFReader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.ITFReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class ITFWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public static class: java.lang.Class<com.google.zxing.oned.ITFWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class MultiFormatOneDReader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.MultiFormatOneDReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public reset(): void;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public constructor(param0: java.util.Map<com.google.zxing.DecodeHintType,any>);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class MultiFormatUPCEANReader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.MultiFormatUPCEANReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public reset(): void;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public constructor(param0: java.util.Map<com.google.zxing.DecodeHintType,any>);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class OneDReader extends java.lang.Object implements com.google.zxing.Reader {
					public static class: java.lang.Class<com.google.zxing.oned.OneDReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public constructor();
					public static recordPattern(param0: com.google.zxing.common.BitArray, param1: number, param2: native.Array<number>): void;
					public static patternMatchVariance(param0: native.Array<number>, param1: native.Array<number>, param2: number): number;
					public static recordPatternInReverse(param0: com.google.zxing.common.BitArray, param1: number, param2: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class OneDimensionalCodeWriter extends java.lang.Object implements com.google.zxing.Writer {
					public static class: java.lang.Class<com.google.zxing.oned.OneDimensionalCodeWriter>;
					public getDefaultMargin(): number;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
					public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCAReader extends com.google.zxing.oned.UPCEANReader {
					public static class: java.lang.Class<com.google.zxing.oned.UPCAReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: native.Array<number>, param3: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCAWriter extends java.lang.Object implements com.google.zxing.Writer {
					public static class: java.lang.Class<com.google.zxing.oned.UPCAWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEANExtension2Support extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEANExtension2Support>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEANExtension5Support extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEANExtension5Support>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEANExtensionSupport extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEANExtensionSupport>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class UPCEANReader extends com.google.zxing.oned.OneDReader {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEANReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: native.Array<number>, param3: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export abstract class UPCEANWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEANWriter>;
					public getDefaultMargin(): number;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEReader extends com.google.zxing.oned.UPCEANReader {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEReader>;
					public checkChecksum(param0: string): boolean;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
					public static convertUPCEtoUPCA(param0: string): string;
					public decodeEnd(param0: com.google.zxing.common.BitArray, param1: number): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export class UPCEWriter extends com.google.zxing.oned.UPCEANWriter {
					public static class: java.lang.Class<com.google.zxing.oned.UPCEWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
					public encode(param0: string): native.Array<boolean>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export abstract class AbstractRSSReader extends com.google.zxing.oned.OneDReader {
						public static class: java.lang.Class<com.google.zxing.oned.rss.AbstractRSSReader>;
						public constructor();
						public getDataCharacterCounters(): native.Array<number>;
						public getOddCounts(): native.Array<number>;
						public static increment(param0: native.Array<number>, param1: native.Array<number>): void;
						public getDecodeFinderCounters(): native.Array<number>;
						public getOddRoundingErrors(): native.Array<number>;
						public getEvenRoundingErrors(): native.Array<number>;
						public static parseFinderValue(param0: native.Array<number>, param1: native.Array<native.Array<number>>): number;
						public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
						/** @deprecated */
						public static count(param0: native.Array<number>): number;
						public getEvenCounts(): native.Array<number>;
						public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
						public static isFinderPattern(param0: native.Array<number>): boolean;
						public reset(): void;
						public static decrement(param0: native.Array<number>, param1: native.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class DataCharacter extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.oned.rss.DataCharacter>;
						public getChecksumPortion(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class FinderPattern extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.oned.rss.FinderPattern>;
						public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getStartEnd(): native.Array<number>;
						public constructor(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number);
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class Pair extends com.google.zxing.oned.rss.DataCharacter {
						public static class: java.lang.Class<com.google.zxing.oned.rss.Pair>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class RSS14Reader extends com.google.zxing.oned.rss.AbstractRSSReader {
						public static class: java.lang.Class<com.google.zxing.oned.rss.RSS14Reader>;
						public constructor();
						public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
						public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
						public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export class RSSUtils extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.oned.rss.RSSUtils>;
						public static getRSSvalue(param0: native.Array<number>, param1: number, param2: boolean): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class BitArrayBuilder extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.BitArrayBuilder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class ExpandedPair extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.ExpandedPair>;
							public mustBeLast(): boolean;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class ExpandedRow extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.ExpandedRow>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export class RSSExpandedReader extends com.google.zxing.oned.rss.AbstractRSSReader {
							public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.RSSExpandedReader>;
							public constructor();
							public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
							public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
							public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI013103decoder extends com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI013103decoder>;
								public checkWeight(param0: number): number;
								public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01320xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01320xDecoder>;
								public checkWeight(param0: number): number;
								public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01392xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01392xDecoder>;
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01393xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01393xDecoder>;
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI013x0x1xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI013x0x1xDecoder>;
								public parseInformation(): string;
								public checkWeight(param0: number): number;
								public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AI013x0xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder>;
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AI01AndOtherAIs extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01AndOtherAIs>;
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AI01decoder extends com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01decoder>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AI01weightDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder>;
								public checkWeight(param0: number): number;
								public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class AbstractExpandedDecoder extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder>;
								public parseInformation(): string;
								public static createDecoder(param0: com.google.zxing.common.BitArray): com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder;
								public getInformation(): com.google.zxing.common.BitArray;
								public getGeneralDecoder(): com.google.zxing.oned.rss.expanded.decoders.GeneralAppIdDecoder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class AnyAIDecoder extends com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AnyAIDecoder>;
								public parseInformation(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class BlockParsedResult extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.BlockParsedResult>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class CurrentParsingState extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState>;
							}
							export module CurrentParsingState {
								export class State {
									public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State>;
									public static NUMERIC: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static ALPHA: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static ISO_IEC_646: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static valueOf(param0: string): com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
									public static values(): native.Array<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State>;
									public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class DecodedChar extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedChar>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class DecodedInformation extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedInformation>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class DecodedNumeric extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedNumeric>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export abstract class DecodedObject extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedObject>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class FieldParser extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.FieldParser>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module oned {
				export module rss {
					export module expanded {
						export module decoders {
							export class GeneralAppIdDecoder extends java.lang.Object {
								public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.GeneralAppIdDecoder>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417Common extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.pdf417.PDF417Common>;
					public static NUMBER_OF_CODEWORDS: number;
					public static MAX_CODEWORDS_IN_BARCODE: number;
					public static MIN_ROWS_IN_BARCODE: number;
					public static MAX_ROWS_IN_BARCODE: number;
					public static MODULES_IN_CODEWORD: number;
					public static MODULES_IN_STOP_PATTERN: number;
					public static BARS_IN_MODULE: number;
					public static SYMBOL_TABLE: native.Array<number>;
					public static toIntArray(param0: java.util.Collection<java.lang.Integer>): native.Array<number>;
					/** @deprecated */
					public static getBitCountSum(param0: native.Array<number>): number;
					public static getCodeword(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417Reader extends java.lang.Object implements com.google.zxing.Reader, com.google.zxing.multi.MultipleBarcodeReader {
					public static class: java.lang.Class<com.google.zxing.pdf417.PDF417Reader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): native.Array<com.google.zxing.Result>;
					public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417ResultMetadata extends java.lang.Object {
					public static class: java.lang.Class<com.google.zxing.pdf417.PDF417ResultMetadata>;
					public getSegmentIndex(): number;
					public constructor();
					public setSegmentIndex(param0: number): void;
					public setOptionalData(param0: native.Array<number>): void;
					public getOptionalData(): native.Array<number>;
					public setLastSegment(param0: boolean): void;
					public getFileId(): string;
					public isLastSegment(): boolean;
					public setFileId(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export class PDF417Writer extends java.lang.Object implements com.google.zxing.Writer {
					public static class: java.lang.Class<com.google.zxing.pdf417.PDF417Writer>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class BarcodeMetadata extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.BarcodeMetadata>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class BarcodeValue extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.BarcodeValue>;
						public getConfidence(param0: number): java.lang.Integer;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class BoundingBox extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.BoundingBox>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class Codeword extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.Codeword>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DecodedBitStreamParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DecodedBitStreamParser>;
					}
					export module DecodedBitStreamParser {
						export class Mode {
							public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode>;
							public static ALPHA: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static LOWER: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static MIXED: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static PUNCT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static ALPHA_SHIFT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static PUNCT_SHIFT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static valueOf(param0: string): com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static values(): native.Array<com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DetectionResult extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DetectionResult>;
						public setBoundingBox(param0: com.google.zxing.pdf417.decoder.BoundingBox): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DetectionResultColumn extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DetectionResultColumn>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class DetectionResultRowIndicatorColumn extends com.google.zxing.pdf417.decoder.DetectionResultColumn {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DetectionResultRowIndicatorColumn>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class PDF417CodewordDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.PDF417CodewordDecoder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export class PDF417ScanningDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.decoder.PDF417ScanningDecoder>;
						public static decode(param0: com.google.zxing.common.BitMatrix, param1: com.google.zxing.ResultPoint, param2: com.google.zxing.ResultPoint, param3: com.google.zxing.ResultPoint, param4: com.google.zxing.ResultPoint, param5: number, param6: number): com.google.zxing.common.DecoderResult;
						public static toString(param0: native.Array<native.Array<com.google.zxing.pdf417.decoder.BarcodeValue>>): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export module ec {
						export class ErrorCorrection extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.pdf417.decoder.ec.ErrorCorrection>;
							public constructor();
							public decode(param0: native.Array<number>, param1: number, param2: native.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export module ec {
						export class ModulusGF extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.pdf417.decoder.ec.ModulusGF>;
							public static PDF417_GF: com.google.zxing.pdf417.decoder.ec.ModulusGF;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module decoder {
					export module ec {
						export class ModulusPoly extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.pdf417.decoder.ec.ModulusPoly>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module detector {
					export class Detector extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.detector.Detector>;
						public static detect(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>, param2: boolean): com.google.zxing.pdf417.detector.PDF417DetectorResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module detector {
					export class PDF417DetectorResult extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.detector.PDF417DetectorResult>;
						public getBits(): com.google.zxing.common.BitMatrix;
						public getPoints(): java.util.List<native.Array<com.google.zxing.ResultPoint>>;
						public constructor(param0: com.google.zxing.common.BitMatrix, param1: java.util.List<native.Array<com.google.zxing.ResultPoint>>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class BarcodeMatrix extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.BarcodeMatrix>;
						public getMatrix(): native.Array<native.Array<number>>;
						public getScaledMatrix(param0: number, param1: number): native.Array<native.Array<number>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class BarcodeRow extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.BarcodeRow>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class Compaction {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.Compaction>;
						public static AUTO: com.google.zxing.pdf417.encoder.Compaction;
						public static TEXT: com.google.zxing.pdf417.encoder.Compaction;
						public static BYTE: com.google.zxing.pdf417.encoder.Compaction;
						public static NUMERIC: com.google.zxing.pdf417.encoder.Compaction;
						public static valueOf(param0: string): com.google.zxing.pdf417.encoder.Compaction;
						public static values(): native.Array<com.google.zxing.pdf417.encoder.Compaction>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class Dimensions extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.Dimensions>;
						public getMinCols(): number;
						public getMaxRows(): number;
						public getMaxCols(): number;
						public getMinRows(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class PDF417 extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.PDF417>;
						public setEncoding(param0: java.nio.charset.Charset): void;
						public setCompact(param0: boolean): void;
						public constructor();
						public setDimensions(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: boolean);
						public setCompaction(param0: com.google.zxing.pdf417.encoder.Compaction): void;
						public getBarcodeMatrix(): com.google.zxing.pdf417.encoder.BarcodeMatrix;
						public generateBarcodeLogic(param0: string, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class PDF417ErrorCorrection extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.PDF417ErrorCorrection>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module pdf417 {
				export module encoder {
					export class PDF417HighLevelEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.pdf417.encoder.PDF417HighLevelEncoder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export class QRCodeReader extends java.lang.Object implements com.google.zxing.Reader {
					public static class: java.lang.Class<com.google.zxing.qrcode.QRCodeReader>;
					public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.Result;
					public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
					public reset(): void;
					public constructor();
					public getDecoder(): com.google.zxing.qrcode.decoder.Decoder;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export class QRCodeWriter extends java.lang.Object implements com.google.zxing.Writer {
					public static class: java.lang.Class<com.google.zxing.qrcode.QRCodeWriter>;
					public constructor();
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
					public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class BitMatrixParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.BitMatrixParser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class DataBlock extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.DataBlock>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export abstract class DataMask {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.DataMask>;
						public static DATA_MASK_000: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_001: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_010: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_011: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_100: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_101: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_110: com.google.zxing.qrcode.decoder.DataMask;
						public static DATA_MASK_111: com.google.zxing.qrcode.decoder.DataMask;
						public static valueOf(param0: string): com.google.zxing.qrcode.decoder.DataMask;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.google.zxing.qrcode.decoder.DataMask>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class DecodedBitStreamParser extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.DecodedBitStreamParser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class Decoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Decoder>;
						public constructor();
						public decode(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.DecoderResult;
						public decode(param0: native.Array<native.Array<boolean>>, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix, param1: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.common.DecoderResult;
						public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class ErrorCorrectionLevel {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.ErrorCorrectionLevel>;
						public static L: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static M: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static Q: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static H: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static forBits(param0: number): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public static values(): native.Array<com.google.zxing.qrcode.decoder.ErrorCorrectionLevel>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
						public getBits(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class FormatInformation extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.FormatInformation>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class Mode {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Mode>;
						public static TERMINATOR: com.google.zxing.qrcode.decoder.Mode;
						public static NUMERIC: com.google.zxing.qrcode.decoder.Mode;
						public static ALPHANUMERIC: com.google.zxing.qrcode.decoder.Mode;
						public static STRUCTURED_APPEND: com.google.zxing.qrcode.decoder.Mode;
						public static BYTE: com.google.zxing.qrcode.decoder.Mode;
						public static ECI: com.google.zxing.qrcode.decoder.Mode;
						public static KANJI: com.google.zxing.qrcode.decoder.Mode;
						public static FNC1_FIRST_POSITION: com.google.zxing.qrcode.decoder.Mode;
						public static FNC1_SECOND_POSITION: com.google.zxing.qrcode.decoder.Mode;
						public static HANZI: com.google.zxing.qrcode.decoder.Mode;
						public static forBits(param0: number): com.google.zxing.qrcode.decoder.Mode;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.google.zxing.qrcode.decoder.Mode>;
						public getBits(): number;
						public static valueOf(param0: string): com.google.zxing.qrcode.decoder.Mode;
						public getCharacterCountBits(param0: com.google.zxing.qrcode.decoder.Version): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class QRCodeDecoderMetaData extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.QRCodeDecoderMetaData>;
						public isMirrored(): boolean;
						public applyMirroredCorrection(param0: native.Array<com.google.zxing.ResultPoint>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module decoder {
					export class Version extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Version>;
						public getDimensionForVersion(): number;
						public getAlignmentPatternCenters(): native.Array<number>;
						public static getProvisionalVersionForDimension(param0: number): com.google.zxing.qrcode.decoder.Version;
						public getVersionNumber(): number;
						public getECBlocksForLevel(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): com.google.zxing.qrcode.decoder.Version.ECBlocks;
						public getTotalCodewords(): number;
						public static getVersionForNumber(param0: number): com.google.zxing.qrcode.decoder.Version;
						public toString(): string;
					}
					export module Version {
						export class ECB extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Version.ECB>;
							public getDataCodewords(): number;
							public getCount(): number;
						}
						export class ECBlocks extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Version.ECBlocks>;
							public getNumBlocks(): number;
							public getECBlocks(): native.Array<com.google.zxing.qrcode.decoder.Version.ECB>;
							public getECCodewordsPerBlock(): number;
							public getTotalECCodewords(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class AlignmentPattern extends com.google.zxing.ResultPoint {
						public static class: java.lang.Class<com.google.zxing.qrcode.detector.AlignmentPattern>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class AlignmentPatternFinder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.detector.AlignmentPatternFinder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class Detector extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.detector.Detector>;
						public processFinderPatternInfo(param0: com.google.zxing.qrcode.detector.FinderPatternInfo): com.google.zxing.common.DetectorResult;
						public getImage(): com.google.zxing.common.BitMatrix;
						public findAlignmentInRegion(param0: number, param1: number, param2: number, param3: number): com.google.zxing.qrcode.detector.AlignmentPattern;
						public detect(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): com.google.zxing.common.DetectorResult;
						public getResultPointCallback(): com.google.zxing.ResultPointCallback;
						public constructor(param0: com.google.zxing.common.BitMatrix);
						public detect(): com.google.zxing.common.DetectorResult;
						public calculateModuleSize(param0: com.google.zxing.ResultPoint, param1: com.google.zxing.ResultPoint, param2: com.google.zxing.ResultPoint): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class FinderPattern extends com.google.zxing.ResultPoint {
						public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPattern>;
						public getEstimatedModuleSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class FinderPatternFinder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternFinder>;
						public static MIN_SKIP: number;
						public static MAX_MODULES: number;
						public static foundPatternCross(param0: native.Array<number>): boolean;
						public handlePossibleCenter(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public getImage(): com.google.zxing.common.BitMatrix;
						public constructor(param0: com.google.zxing.common.BitMatrix, param1: com.google.zxing.ResultPointCallback);
						public getPossibleCenters(): java.util.List<com.google.zxing.qrcode.detector.FinderPattern>;
						public constructor(param0: com.google.zxing.common.BitMatrix);
					}
					export module FinderPatternFinder {
						export class CenterComparator extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternFinder.CenterComparator>;
							public compare(param0: any, param1: any): number;
							public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
							public equals(param0: any): boolean;
							public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
						export class FurthestFromAverageComparator extends java.lang.Object {
							public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternFinder.FurthestFromAverageComparator>;
							public compare(param0: any, param1: any): number;
							public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public static comparing(param0: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
							public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
							public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
							public equals(param0: any): boolean;
							public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module detector {
					export class FinderPatternInfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternInfo>;
						public getBottomLeft(): com.google.zxing.qrcode.detector.FinderPattern;
						public constructor(param0: native.Array<com.google.zxing.qrcode.detector.FinderPattern>);
						public getTopRight(): com.google.zxing.qrcode.detector.FinderPattern;
						public getTopLeft(): com.google.zxing.qrcode.detector.FinderPattern;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class BlockPair extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.encoder.BlockPair>;
						public getDataBytes(): native.Array<number>;
						public getErrorCorrectionBytes(): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class ByteMatrix extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.encoder.ByteMatrix>;
						public set(param0: number, param1: number, param2: number): void;
						public get(param0: number, param1: number): number;
						public getWidth(): number;
						public set(param0: number, param1: number, param2: boolean): void;
						public clear(param0: number): void;
						public getHeight(): number;
						public constructor(param0: number, param1: number);
						public getArray(): native.Array<native.Array<number>>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class Encoder extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.encoder.Encoder>;
						public static chooseMode(param0: string): com.google.zxing.qrcode.decoder.Mode;
						public static encode(param0: string, param1: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel, param2: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.qrcode.encoder.QRCode;
						public static encode(param0: string, param1: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): com.google.zxing.qrcode.encoder.QRCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class MaskUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.encoder.MaskUtil>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class MatrixUtil extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.encoder.MatrixUtil>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module zxing {
			export module qrcode {
				export module encoder {
					export class QRCode extends java.lang.Object {
						public static class: java.lang.Class<com.google.zxing.qrcode.encoder.QRCode>;
						public static NUM_MASK_PATTERNS: number;
						public constructor();
						public setMode(param0: com.google.zxing.qrcode.decoder.Mode): void;
						public setVersion(param0: com.google.zxing.qrcode.decoder.Version): void;
						public static isValidMaskPattern(param0: number): boolean;
						public setMaskPattern(param0: number): void;
						public setMatrix(param0: com.google.zxing.qrcode.encoder.ByteMatrix): void;
						public toString(): string;
						public getMatrix(): com.google.zxing.qrcode.encoder.ByteMatrix;
						public getMaskPattern(): number;
						public getVersion(): com.google.zxing.qrcode.decoder.Version;
						public setECLevel(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): void;
						public getMode(): com.google.zxing.qrcode.decoder.Mode;
						public getECLevel(): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class BarcodeCallback extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeCallback>;
				/**
				 * Constructs a new instance of the com.journeyapps.barcodescanner.BarcodeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					barcodeResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
					possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>): void;
				});
				public constructor();
				public barcodeResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
				public possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>): void;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class BarcodeEncoder extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeEncoder>;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): com.google.zxing.common.BitMatrix;
				public encodeBitmap(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): globalAndroid.graphics.Bitmap;
				public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
				public createBitmap(param0: com.google.zxing.common.BitMatrix): globalAndroid.graphics.Bitmap;
				public encodeBitmap(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType,any>): globalAndroid.graphics.Bitmap;
				public constructor();
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class BarcodeResult extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeResult>;
				public mResult: com.google.zxing.Result;
				public sourceData: com.journeyapps.barcodescanner.SourceData;
				public getResult(): com.google.zxing.Result;
				public getBarcodeFormat(): com.google.zxing.BarcodeFormat;
				public constructor(param0: com.google.zxing.Result, param1: com.journeyapps.barcodescanner.SourceData);
				public getRawBytes(): native.Array<number>;
				public toString(): string;
				public static transformResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>, param1: com.journeyapps.barcodescanner.SourceData): java.util.List<com.google.zxing.ResultPoint>;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public getBitmapWithResultPoints(param0: number): globalAndroid.graphics.Bitmap;
				public getText(): string;
				public getResultMetadata(): java.util.Map<com.google.zxing.ResultMetadataType,any>;
				public getTransformedResultPoints(): java.util.List<com.google.zxing.ResultPoint>;
				public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
				public getBitmapScaleFactor(): number;
				public getTimestamp(): number;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class BarcodeView extends com.journeyapps.barcodescanner.CameraPreview {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeView>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public previewStarted(): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public clearChildFocus(param0: globalAndroid.view.View): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public decodeSingle(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public setDecoderFactory(param0: com.journeyapps.barcodescanner.DecoderFactory): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getTextAlignment(): number;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public createDefaultDecoderFactory(): com.journeyapps.barcodescanner.DecoderFactory;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public decodeContinuous(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public stopDecoding(): void;
				public getDecoderFactory(): com.journeyapps.barcodescanner.DecoderFactory;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public pause(): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
			export module BarcodeView {
				export class DecodeMode {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeView.DecodeMode>;
					public static NONE: com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
					public static SINGLE: com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
					public static CONTINUOUS: com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
					public static values(): native.Array<com.journeyapps.barcodescanner.BarcodeView.DecodeMode>;
					public static valueOf(param0: string): com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class CameraPreview extends globalAndroid.view.ViewGroup {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.CameraPreview>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public getPreviewSize(): com.journeyapps.barcodescanner.Size;
				public clearChildFocus(param0: globalAndroid.view.View): void;
				public calculateFramingRect(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
				public pauseAndWait(): void;
				public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
				public getFramingRect(): globalAndroid.graphics.Rect;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getCameraInstance(): com.journeyapps.barcodescanner.camera.CameraInstance;
				public getTextDirection(): number;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public isUseTextureView(): boolean;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public initializeAttributes(param0: globalAndroid.util.AttributeSet): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				/** @deprecated */
				public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public setFramingRectSize(param0: com.journeyapps.barcodescanner.Size): void;
				public isLayoutDirectionResolved(): boolean;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getPreviewScalingStrategy(): com.journeyapps.barcodescanner.camera.PreviewScalingStrategy;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public addStateListener(param0: com.journeyapps.barcodescanner.CameraPreview.StateListener): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public resume(): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public setMarginFraction(param0: number): void;
				public getPreviewFramingRect(): globalAndroid.graphics.Rect;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public onAttachedToWindow(): void;
				public getParent(): globalAndroid.view.ViewParent;
				public calculateTextureTransform(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Matrix;
				public previewStarted(): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestFitSystemWindows(): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public getFramingRectSize(): com.journeyapps.barcodescanner.Size;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public setPreviewScalingStrategy(param0: com.journeyapps.barcodescanner.camera.PreviewScalingStrategy): void;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public setUseTextureView(param0: boolean): void;
				public getTextAlignment(): number;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isActive(): boolean;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public setTorch(param0: boolean): void;
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public createCameraInstance(): com.journeyapps.barcodescanner.camera.CameraInstance;
				public removeView(param0: globalAndroid.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public isPreviewActive(): boolean;
				public isCameraClosed(): boolean;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public pause(): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public getMarginFraction(): number;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
			export module CameraPreview {
				export class StateListener extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.CameraPreview.StateListener>;
					/**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.CameraPreview$StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						previewSized(): void;
						previewStarted(): void;
						previewStopped(): void;
						cameraError(param0: java.lang.Exception): void;
						cameraClosed(): void;
					});
					public constructor();
					public cameraError(param0: java.lang.Exception): void;
					public previewSized(): void;
					public previewStopped(): void;
					public previewStarted(): void;
					public cameraClosed(): void;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class CaptureActivity extends globalAndroid.app.Activity {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.CaptureActivity>;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onPause(): void;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
				public constructor();
				public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onCreate(param0: globalAndroid.os.Bundle, param1: any): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onTrimMemory(param0: number): void;
				public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
				public initializeContent(): com.journeyapps.barcodescanner.DecoratedBarcodeView;
				public onResume(): void;
				public onPointerCaptureChanged(param0: boolean): void;
				public onSearchRequested(param0: any): boolean;
				public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle, param1: any): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
				public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onContentChanged(): void;
				public onCreatePanelView(param0: number): globalAndroid.view.View;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onDetachedFromWindow(): void;
				public onSearchRequested(): boolean;
				public onDestroy(): void;
				public onWindowFocusChanged(param0: boolean): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class CaptureManager extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.CaptureManager>;
				public returnResultTimeout(): void;
				public setShowMissingCameraPermissionDialog(param0: boolean): void;
				public static getCameraPermissionReqCode(): number;
				public setShowMissingCameraPermissionDialog(param0: boolean, param1: string): void;
				public onResume(): void;
				public onPause(): void;
				public constructor(param0: globalAndroid.app.Activity, param1: com.journeyapps.barcodescanner.DecoratedBarcodeView);
				public static resultIntent(param0: com.journeyapps.barcodescanner.BarcodeResult, param1: string): globalAndroid.content.Intent;
				public returnResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public decode(): void;
				public displayFrameworkBugMessageAndExit(param0: string): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public closeAndFinish(): void;
				public initializeFromIntent(param0: globalAndroid.content.Intent, param1: globalAndroid.os.Bundle): void;
				public lockOrientation(): void;
				public onDestroy(): void;
				public static setCameraPermissionReqCode(param0: number): void;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class CompoundBarcodeView extends com.journeyapps.barcodescanner.DecoratedBarcodeView {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.CompoundBarcodeView>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public clearChildFocus(param0: globalAndroid.view.View): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getTextAlignment(): number;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class Decoder extends java.lang.Object implements com.google.zxing.ResultPointCallback {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.Decoder>;
				public toBitmap(param0: com.google.zxing.LuminanceSource): com.google.zxing.BinaryBitmap;
				public getReader(): com.google.zxing.Reader;
				public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
				public getPossibleResultPoints(): java.util.List<com.google.zxing.ResultPoint>;
				public decode(param0: com.google.zxing.LuminanceSource): com.google.zxing.Result;
				public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				public constructor(param0: com.google.zxing.Reader);
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class DecoderFactory extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoderFactory>;
				/**
				 * Constructs a new instance of the com.journeyapps.barcodescanner.DecoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createDecoder(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): com.journeyapps.barcodescanner.Decoder;
				});
				public constructor();
				public createDecoder(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): com.journeyapps.barcodescanner.Decoder;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class DecoderResultPointCallback extends java.lang.Object implements com.google.zxing.ResultPointCallback {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoderResultPointCallback>;
				public setDecoder(param0: com.journeyapps.barcodescanner.Decoder): void;
				public constructor(param0: com.journeyapps.barcodescanner.Decoder);
				public getDecoder(): com.journeyapps.barcodescanner.Decoder;
				public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class DecoderThread extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoderThread>;
				public setDecoder(param0: com.journeyapps.barcodescanner.Decoder): void;
				public constructor(param0: com.journeyapps.barcodescanner.camera.CameraInstance, param1: com.journeyapps.barcodescanner.Decoder, param2: globalAndroid.os.Handler);
				public stop(): void;
				public getCropRect(): globalAndroid.graphics.Rect;
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public start(): void;
				public createSource(param0: com.journeyapps.barcodescanner.SourceData): com.google.zxing.LuminanceSource;
				public getDecoder(): com.journeyapps.barcodescanner.Decoder;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class DecoratedBarcodeView extends globalAndroid.widget.FrameLayout {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoratedBarcodeView>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public clearChildFocus(param0: globalAndroid.view.View): void;
				public setTorchListener(param0: com.journeyapps.barcodescanner.DecoratedBarcodeView.TorchListener): void;
				public pauseAndWait(): void;
				public getBarcodeView(): com.journeyapps.barcodescanner.BarcodeView;
				public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public decodeSingle(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public setTorchOn(): void;
				public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getStatusView(): globalAndroid.widget.TextView;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public setDecoderFactory(param0: com.journeyapps.barcodescanner.DecoderFactory): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getTextAlignment(): number;
				public initializeFromIntent(param0: globalAndroid.content.Intent): void;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public setTorchOff(): void;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public setStatusText(param0: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
				public decodeContinuous(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
				public getViewFinder(): com.journeyapps.barcodescanner.ViewfinderView;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getDecoderFactory(): com.journeyapps.barcodescanner.DecoderFactory;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public resume(): void;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public pause(): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
			export module DecoratedBarcodeView {
				export class TorchListener extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoratedBarcodeView.TorchListener>;
					/**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.DecoratedBarcodeView$TorchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTorchOn(): void;
						onTorchOff(): void;
					});
					public constructor();
					public onTorchOff(): void;
					public onTorchOn(): void;
				}
				export class WrappedCallback extends java.lang.Object implements com.journeyapps.barcodescanner.BarcodeCallback {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoratedBarcodeView.WrappedCallback>;
					public possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>): void;
					public barcodeResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
					public constructor(param0: com.journeyapps.barcodescanner.DecoratedBarcodeView, param1: com.journeyapps.barcodescanner.BarcodeCallback);
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class DefaultDecoderFactory extends java.lang.Object implements com.journeyapps.barcodescanner.DecoderFactory {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.DefaultDecoderFactory>;
				public constructor(param0: java.util.Collection<com.google.zxing.BarcodeFormat>);
				public createDecoder(param0: java.util.Map<com.google.zxing.DecodeHintType,any>): com.journeyapps.barcodescanner.Decoder;
				public constructor(param0: java.util.Collection<com.google.zxing.BarcodeFormat>, param1: java.util.Map<com.google.zxing.DecodeHintType,any>, param2: string, param3: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class InvertedDecoder extends com.journeyapps.barcodescanner.Decoder {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.InvertedDecoder>;
				public toBitmap(param0: com.google.zxing.LuminanceSource): com.google.zxing.BinaryBitmap;
				public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				public constructor(param0: com.google.zxing.Reader);
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class MixedDecoder extends com.journeyapps.barcodescanner.Decoder {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.MixedDecoder>;
				public toBitmap(param0: com.google.zxing.LuminanceSource): com.google.zxing.BinaryBitmap;
				public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				public constructor(param0: com.google.zxing.Reader);
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class RawImageData extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.RawImageData>;
				public getData(): native.Array<number>;
				public getWidth(): number;
				public getHeight(): number;
				public static rotate180(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
				public constructor(param0: native.Array<number>, param1: number, param2: number);
				public rotateCameraPreview(param0: number): com.journeyapps.barcodescanner.RawImageData;
				public static rotateCW(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
				public cropAndScale(param0: globalAndroid.graphics.Rect, param1: number): com.journeyapps.barcodescanner.RawImageData;
				public static rotateCCW(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class RotationCallback extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.RotationCallback>;
				/**
				 * Constructs a new instance of the com.journeyapps.barcodescanner.RotationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRotationChanged(param0: number): void;
				});
				public constructor();
				public onRotationChanged(param0: number): void;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class RotationListener extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.RotationListener>;
				public stop(): void;
				public listen(param0: globalAndroid.content.Context, param1: com.journeyapps.barcodescanner.RotationCallback): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class Size extends java.lang.Comparable<com.journeyapps.barcodescanner.Size> {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.Size>;
				public width: number;
				public height: number;
				public constructor(param0: number, param1: number);
				public scale(param0: number, param1: number): com.journeyapps.barcodescanner.Size;
				public hashCode(): number;
				public rotate(): com.journeyapps.barcodescanner.Size;
				public equals(param0: any): boolean;
				public scaleCrop(param0: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
				public fitsIn(param0: com.journeyapps.barcodescanner.Size): boolean;
				public toString(): string;
				public scaleFit(param0: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
				public compareTo(param0: com.journeyapps.barcodescanner.Size): number;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class SourceData extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.SourceData>;
				public getDataWidth(): number;
				public isRotated(): boolean;
				public setCropRect(param0: globalAndroid.graphics.Rect): void;
				public getImageFormat(): number;
				public getScalingFactor(): number;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public setScalingFactor(param0: number): void;
				public getBitmap(param0: number): globalAndroid.graphics.Bitmap;
				public getData(): native.Array<number>;
				public getDataHeight(): number;
				public getCropRect(): globalAndroid.graphics.Rect;
				public createSource(): com.google.zxing.PlanarYUVLuminanceSource;
				public translateResultPoint(param0: com.google.zxing.ResultPoint): com.google.zxing.ResultPoint;
				public isPreviewMirrored(): boolean;
				public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number);
				public setPreviewMirrored(param0: boolean): void;
				public getBitmap(param0: globalAndroid.graphics.Rect, param1: number): globalAndroid.graphics.Bitmap;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class Util extends java.lang.Object {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.Util>;
				public static validateMainThread(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export class ViewfinderView extends globalAndroid.view.View {
				public static class: java.lang.Class<com.journeyapps.barcodescanner.ViewfinderView>;
				public static TAG: string;
				public static SCANNER_ALPHA: native.Array<number>;
				public static ANIMATION_DELAY: number;
				public static CURRENT_POINT_OPACITY: number;
				public static MAX_RESULT_POINTS: number;
				public static POINT_SIZE: number;
				public paint: globalAndroid.graphics.Paint;
				public resultBitmap: globalAndroid.graphics.Bitmap;
				public maskColor: number;
				public resultColor: number;
				public laserColor: number;
				public resultPointColor: number;
				public laserVisibility: boolean;
				public scannerAlpha: number;
				public possibleResultPoints: java.util.List<com.google.zxing.ResultPoint>;
				public lastPossibleResultPoints: java.util.List<com.google.zxing.ResultPoint>;
				public cameraPreview: com.journeyapps.barcodescanner.CameraPreview;
				public framingRect: globalAndroid.graphics.Rect;
				public previewSize: com.journeyapps.barcodescanner.Size;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public addPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
				public setMaskColor(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public drawViewfinder(): void;
				public refreshSizes(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(param0: number): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public drawResultBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setLaserVisibility(param0: boolean): void;
				public setCameraPreview(param0: com.journeyapps.barcodescanner.CameraPreview): void;
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class AutoFocusManager extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.AutoFocusManager>;
					public stop(): void;
					public start(): void;
					public constructor(param0: globalAndroid.hardware.Camera, param1: com.journeyapps.barcodescanner.camera.CameraSettings);
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CameraInstance extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraInstance>;
					public configureCamera(): void;
					public getCameraRotation(): number;
					public getDisplayConfiguration(): com.journeyapps.barcodescanner.camera.DisplayConfiguration;
					public setSurface(param0: com.journeyapps.barcodescanner.camera.CameraSurface): void;
					public constructor(param0: com.journeyapps.barcodescanner.camera.CameraManager);
					public setReadyHandler(param0: globalAndroid.os.Handler): void;
					public getCameraThread(): com.journeyapps.barcodescanner.camera.CameraThread;
					public setDisplayConfiguration(param0: com.journeyapps.barcodescanner.camera.DisplayConfiguration): void;
					public setSurfaceHolder(param0: globalAndroid.view.SurfaceHolder): void;
					public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
					public startPreview(): void;
					public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
					public constructor(param0: globalAndroid.content.Context);
					public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
					public getSurface(): com.journeyapps.barcodescanner.camera.CameraSurface;
					public isOpen(): boolean;
					public getCameraManager(): com.journeyapps.barcodescanner.camera.CameraManager;
					public close(): void;
					public isCameraClosed(): boolean;
					public open(): void;
					public setTorch(param0: boolean): void;
					public requestPreview(param0: com.journeyapps.barcodescanner.camera.PreviewCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CameraManager extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraManager>;
					public getCameraRotation(): number;
					public getDisplayConfiguration(): com.journeyapps.barcodescanner.camera.DisplayConfiguration;
					public configure(): void;
					public getPreviewSize(): com.journeyapps.barcodescanner.Size;
					public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
					public setDisplayConfiguration(param0: com.journeyapps.barcodescanner.camera.DisplayConfiguration): void;
					public startPreview(): void;
					public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
					public constructor(param0: globalAndroid.content.Context);
					public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
					public isOpen(): boolean;
					public getNaturalPreviewSize(): com.journeyapps.barcodescanner.Size;
					public close(): void;
					public isCameraRotated(): boolean;
					public requestPreviewFrame(param0: com.journeyapps.barcodescanner.camera.PreviewCallback): void;
					public getCamera(): globalAndroid.hardware.Camera;
					public open(): void;
					public setPreviewDisplay(param0: globalAndroid.view.SurfaceHolder): void;
					public setTorch(param0: boolean): void;
					public isTorchOn(): boolean;
					public setPreviewDisplay(param0: com.journeyapps.barcodescanner.camera.CameraSurface): void;
					public stopPreview(): void;
				}
				export module CameraManager {
					export class CameraPreviewCallback extends java.lang.Object implements globalAndroid.hardware.Camera.PreviewCallback {
						public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraManager.CameraPreviewCallback>;
						public constructor(param0: com.journeyapps.barcodescanner.camera.CameraManager);
						public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
						public setResolution(param0: com.journeyapps.barcodescanner.Size): void;
						public setCallback(param0: com.journeyapps.barcodescanner.camera.PreviewCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CameraParametersCallback extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraParametersCallback>;
					/**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.camera.CameraParametersCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						changeCameraParameters(param0: globalAndroid.hardware.Camera.Parameters): globalAndroid.hardware.Camera.Parameters;
					});
					public constructor();
					public changeCameraParameters(param0: globalAndroid.hardware.Camera.Parameters): globalAndroid.hardware.Camera.Parameters;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CameraSettings extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraSettings>;
					public isScanInverted(): boolean;
					public isContinuousFocusEnabled(): boolean;
					public setScanInverted(param0: boolean): void;
					public isBarcodeSceneModeEnabled(): boolean;
					public getFocusMode(): com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
					public setExposureEnabled(param0: boolean): void;
					public setContinuousFocusEnabled(param0: boolean): void;
					public setFocusMode(param0: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode): void;
					public isExposureEnabled(): boolean;
					public setAutoTorchEnabled(param0: boolean): void;
					public getRequestedCameraId(): number;
					public setMeteringEnabled(param0: boolean): void;
					public isAutoTorchEnabled(): boolean;
					public setRequestedCameraId(param0: number): void;
					public setAutoFocusEnabled(param0: boolean): void;
					public setBarcodeSceneModeEnabled(param0: boolean): void;
					public constructor();
					public isMeteringEnabled(): boolean;
					public isAutoFocusEnabled(): boolean;
				}
				export module CameraSettings {
					export class FocusMode {
						public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode>;
						public static AUTO: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
						public static CONTINUOUS: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
						public static INFINITY: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
						public static MACRO: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
						public static valueOf(param0: string): com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode>;
					}
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CameraSurface extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraSurface>;
					public constructor(param0: globalAndroid.view.SurfaceHolder);
					public constructor(param0: globalAndroid.graphics.SurfaceTexture);
					public getSurfaceHolder(): globalAndroid.view.SurfaceHolder;
					public setPreview(param0: globalAndroid.hardware.Camera): void;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CameraThread extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraThread>;
					public decrementInstances(): void;
					public static getInstance(): com.journeyapps.barcodescanner.camera.CameraThread;
					public enqueue(param0: java.lang.Runnable): void;
					public incrementAndEnqueue(param0: java.lang.Runnable): void;
					public enqueueDelayed(param0: java.lang.Runnable, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class CenterCropStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CenterCropStrategy>;
					public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
					public constructor();
					public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class DisplayConfiguration extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.DisplayConfiguration>;
					public getPreviewScalingStrategy(): com.journeyapps.barcodescanner.camera.PreviewScalingStrategy;
					public getRotation(): number;
					public scalePreview(param0: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
					public setPreviewScalingStrategy(param0: com.journeyapps.barcodescanner.camera.PreviewScalingStrategy): void;
					public getDesiredPreviewSize(param0: boolean): com.journeyapps.barcodescanner.Size;
					public getBestPreviewSize(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: boolean): com.journeyapps.barcodescanner.Size;
					public getViewfinderSize(): com.journeyapps.barcodescanner.Size;
					public constructor(param0: number, param1: com.journeyapps.barcodescanner.Size);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class FitCenterStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.FitCenterStrategy>;
					public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
					public constructor();
					public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class FitXYStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.FitXYStrategy>;
					public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
					public constructor();
					public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class LegacyPreviewScalingStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.LegacyPreviewScalingStrategy>;
					public static scale(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
					public constructor();
					public getBestPreviewSize(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
					public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export class PreviewCallback extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.PreviewCallback>;
					/**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.camera.PreviewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPreview(param0: com.journeyapps.barcodescanner.SourceData): void;
						onPreviewError(param0: java.lang.Exception): void;
					});
					public constructor();
					public onPreview(param0: com.journeyapps.barcodescanner.SourceData): void;
					public onPreviewError(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module journeyapps {
		export module barcodescanner {
			export module camera {
				export abstract class PreviewScalingStrategy extends java.lang.Object {
					public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.PreviewScalingStrategy>;
					public getBestPreviewOrder(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: com.journeyapps.barcodescanner.Size): java.util.List<com.journeyapps.barcodescanner.Size>;
					public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
					public constructor();
					public getBestPreviewSize(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
					public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
				}
			}
		}
	}
}

//Generics information:

