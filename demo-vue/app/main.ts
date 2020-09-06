import Vue from 'nativescript-vue';
import App from './components/App.vue';
import { install as installBottomSheets } from 'nativescript-material-bottomsheet';
installBottomSheets();
import BottomSheetPlugin from 'nativescript-material-bottomsheet/vue';
Vue.use(BottomSheetPlugin);

(<any>Vue).registerElement('BarcodeView', () => require('@nativescript-community/ui-barcodeview').BarcodeView);

// import * as trace from '@nativescript/core/trace';
// trace.addCategories(trace.categories.NativeLifecycle);
// trace.enable();

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true;

new Vue({
    render: h => h('frame', [h(App)])
}).$start();
