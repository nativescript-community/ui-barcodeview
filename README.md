# NativeScript BarcodeView

[npm-image]:http://img.shields.io/npm/v/@nativescript-community/ui-barcodeview.svg
[npm-url]:https://npmjs.org/package/@nativescript-community/ui-barcodeview
[downloads-image]:http://img.shields.io/npm/dm/@nativescript-community/ui-barcodeview.svg

## Supported barcode types

### iOS and Android
* CODE_39
* CODE_93
* CODE_128
* DATA_MATRIX
* EAN_8
* EAN_13
* ITF (also known as ITF14)
* PDF_417 (on Android only when passed in explicity via `formats`)
* QR_CODE
* UPC_A
* UPC_E

### Android only
* CODABAR
* MAXICODE
* RSS_14

### iOS only
* AZTEC
* CODE_39_MOD_43
* INTERLEAVED_2_OF_5

### A note about `UPC_A` and `EAN_13`
When either (or both) of these are specified, both can be returned.
You can check the actual type by inspecting the `format` property of the result object.
For details, see [#176](https://github.com/EddyVerbruggen/nativescript-barcodescanner/issues/176).

## Installation

* `tns plugin add @nativescript-community/ui-barcodeview`

Be sure to run a new build after adding plugins to avoid any issues.

---


### Usage

The nativescript BarcodeView is base on [nativescript-barcodescanner](https://github.com/EddyVerbruggen/nativescript-barcodescanner) from [Eddy Verbruggen]
(https://github.com/EddyVerbruggen)
## Plain NativeScript

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:mdc="@nativescript-community/ui-barcodeview"` on the Page element_

### XML

```XML
<Page xmlns:bc="@nativescript-community/ui-barcodeview">
    <StackLayout horizontalAlignment="center">
        <bc:BarcodeView width="100" height="100" scanResult="onScanResult"/>
   </StackLayout>
</Page>
```

## NativeScript + Angular

```typescript
import { registerElement } from 'nativescript-angular/element-registry';
import { BarcodeView } from '@nativescript-community/ui-barcodeview';
registerElement('BarcodeView', () => BarcodeView);
```

```html
<BarcodeView width="100" height="100" (scanResult)="onScanResult($event)"></CanvasView>
```

## NativeScript + Vue

```javascript
import Vue from 'nativescript-vue';
(<any>Vue).registerElement('BarcodeView', () => require('@nativescript-community/ui-barcodeview').BarcodeView);

```

```html
<BarcodeView  width="100" height="100"  @scanResult="onScanResult"/>
```


Whatever the UI framework you will receive the event in :
```ts
function onScanResult(text:string, barcodeFormat:string) {

}
```

### Properties
* **formats**  
coma separated list of format to decode

* **preferFrontCamera**  
whether to prefer front camera

* **beepOnScan**  
should i beep?

* **reportDuplicates**  
should i keep on reporting?

* **pause**  
pause camera

* **torchOn**  
you guess right?

### Methods
* **pauseScanning**  
* **resumeScanning**  

### Android

ZXing: https://github.com/zxing/zxing/releases
ZXing Android Embedded: https://github.com/journeyapps/zxing-android-embedded

With latest ZXing versions android minSdkVersion is bumped to 24. You can still lower it https://github.com/journeyapps/zxing-android-embedded#option-2-desugaring-advanced
