<template>
    <Page>
        <ActionBar title="BarcodeScanner demo"></ActionBar>

        <StackLayout columns="*" rows="auto, auto, auto, auto">
            <!-- <Label row="0" class="message" text="Check the console log for scanned barcodes" textWrap="true"></Label> -->
            <!-- <Button row="2" class="btn btn-primary btn-rounded-sm" text="back camera, with flip" @tap="doScanWithBackCamera"></Button> -->
            <!-- <Button row="3" class="btn btn-primary btn-rounded-sm" text="front camera, no flip" @tap="doScanWithFrontCamera"></Button> -->
            <Button row="3" class="btn btn-primary btn-rounded-sm" text="bottomsheet" @tap="showBottomSheet"></Button>
            <Button row="3" class="btn btn-primary btn-rounded-sm" text="generateBarcode" @tap="generateBarcode"></Button>

            <Image :src="generatedBarcode" width="140" height="140" horizontalAlignment="center" verticalAlignment="center" backgroundColor="red" />
            <Label v-show="generatedBarcodeText" class="body" textAlignment="center" textWrap="true">
                <Span text="read/generated barcode: " />
                <Span fontWeight="bold" :text="generatedBarcodeText" />
            </Label>

            <!-- <Label class="h3" text="Scanner declared in XML" /> -->
            <!-- <Label class="body" text="Beeps and logs to console when a QR_CODE, EAN_13, or CODE_128 is scanned. The image was added to show how to add an arbitrary overlay." textWrap="true" /> -->
            <!-- <GridLayout>
                <BarcodeView class="scanner-round" formats="QR_CODE, EAN_13, CODE_128" beepOnScan="true" reportDuplicates="false" preferFrontCamera="false" @scanResult="onScanResult" />
                <Image src="~/images/crosshair.png" width="140" height="140" style="margin-top: 14; opacity: 0.3" horizontalAlignment="center" verticalAlignment="center" />
            </GridLayout> -->
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { isIOS } from '@nativescript/core/platform';
import { generateBarCode } from 'nativescript-barcodeview';
import BottomSheet from './BottomSheet.vue';
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            generatedBarcodeText: null,
            generatedBarcode: null
        };
    },
    methods: {
        onScanResult(evt) {
            console.log(`onScanResult: ${evt.text} (${evt.format})`);
        },
        doScanWithBackCamera() {
            this.scan(false);
        },
        doScanWithFrontCamera() {
            this.scan(true);
        },
        generateBarcode() {
            this.generatedBarcode = generateBarCode({
                text: 'ecairn://transfer/443427876#44#Le Caméléon Nicolas',
                type: 'QR_CODE',
                width: 400,
                height: 400,
                frontColor: 'green',
                backColor: 'yellow'
            });
        },
        showBottomSheet() {
            this.$showBottomSheet(BottomSheet, {
                closeCallback: (...args) => {
                    console.log('bottom sheet closed', args);
                    if (args.length === 2) {
                        this.generatedBarcodeText = args[0];
                        this.generatedBarcode = generateBarCode({
                            text: args[0],
                            type: args[1],
                            width: 400,
                            height: 400,
                            frontColor: 'green',
                            backColor: 'yellow'
                        });
                        console.log('generated barcode image', this.generatedBarcode && this.generatedBarcode.width, this.generatedBarcode && this.generatedBarcode.height);
                    }
                }
            });
        }
        // scan(front) {
        //     new BarcodeScanner()
        //         .scan({
        //             cancelLabel: 'EXIT. Also, try the volume buttons!', // iOS only, default 'Close'
        //             cancelLabelBackgroundColor: '#333333', // iOS only, default '#000000' (black)
        //             message: 'Use the volume buttons for extra light', // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
        //             preferFrontCamera: front, // Android only, default false
        //             showFlipCameraButton: true, // default false
        //             showTorchButton: true, // iOS only, default false
        //             torchOn: false, // launch with the flashlight on (default false)
        //             resultDisplayDuration: 500, // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
        //             beepOnScan: true, // Play or Suppress beep on scan (default true)
        //             openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
        //             closeCallback: () => {
        //                 console.log('Scanner closed @ ' + new Date().getTime());
        //             }
        //         })
        //         .then(
        //             function(result) {
        //                 console.log('--- scanned: ' + result.text);
        //                 // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
        //                 setTimeout(function() {
        //                     // if this alert doesn't show up please upgrade to {N} 2.4.0+
        //                     alert({
        //                         title: 'Scan result',
        //                         message: 'Format: ' + result.format + ',\nValue: ' + result.text,
        //                         okButtonText: 'OK'
        //                     });
        //                 }, 500);
        //             },
        //             function(errorMessage) {
        //                 console.log('No scan. ' + errorMessage);
        //             }
        //         );
        // }
    }
});
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}
</style>
