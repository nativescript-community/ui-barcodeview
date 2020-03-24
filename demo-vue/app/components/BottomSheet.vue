<template>
    <GridLayout height="300" @shownInBottomSheet="onShownInBottomSheet">
        <BarcodeView ref="cameraView" class="scanner-round" pause beepOnScan="true" reportDuplicates="false" @scanResult="onScanResult" />
        <Image src="~/images/crosshair.png" width="140" height="140" style="margin-top: 14; opacity: 0.3" horizontalAlignment="center" verticalAlignment="center" />
        <Button verticalAlignment="bottom" horizontalAlignment="left" text="torch" @tap="toggleTorch"/>
    </GridLayout>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {},
    methods: {
        onShownInBottomSheet() {
            console.log('onShownInBottomSheet');
            this.$refs.cameraView.nativeView.resumeScanning();
        },
        onScanResult(evt) {
            console.log(`onScanResult: ${evt.text} (${evt.format})`);
            this.$closeBottomSheet(evt.text, evt.format);
        },
        toggleTorch() {
            this.$refs.cameraView.nativeView.torchOn = !this.$refs.cameraView.nativeView.torchOn;
        }
    }
});
</script>
