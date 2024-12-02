<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/ui-barcodeview</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/ui-barcodeview?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/ui-barcodeview.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/ui-barcodeview"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/ui-barcodeview.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Scan QR/barcodes with your NativeScript app.</b></br>
  <sub><sub>
</p>

<br />


| <img src="https://raw.githubusercontent.com/nativescript-community/ui-lottie/master/screens/lottieDemo.gif" height="500" /> |
| --- | ----------- |
| iOS Demo | Android Demo |


[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [Supported barcode types](#supported-barcode-types)
	* [iOS and Android](#ios-and-android)
	* [Android only](#android-only)
	* [iOS only](#ios-only)
	* [A note about `UPC_A` and `EAN_13`](#a-note-about-upc_a-and-ean_13)
* [Installation](#installation-1)
	* [Usage](#usage)
* [Plain NativeScript](#plain-nativescript)
	* [XML](#xml)
* [NativeScript + Angular](#nativescript--angular)
* [NativeScript + Vue](#nativescript--vue)
	* [Properties](#properties)
	* [Methods](#methods)
	* [Android](#android)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/ui-barcodeview`


[](#supported-barcode-types)

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


[](#installation)

## Installation

* `tns plugin add @nativescript-community/ui-barcodeview`

Be sure to run a new build after adding plugins to avoid any issues.

---


### Usage

The nativescript BarcodeView is base on [nativescript-barcodescanner](https://github.com/EddyVerbruggen/nativescript-barcodescanner) from [Eddy Verbruggen]
(https://github.com/EddyVerbruggen)

[](#plain-nativescript)

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


[](#nativescript--angular)

## NativeScript + Angular

```typescript
import { registerElement } from 'nativescript-angular/element-registry';
import { BarcodeView } from '@nativescript-community/ui-barcodeview';
registerElement('BarcodeView', () => BarcodeView);
```

```html
<BarcodeView width="100" height="100" (scanResult)="onScanResult($event)"></CanvasView>
```


[](#nativescript--vue)

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


[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).
