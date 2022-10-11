// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";

import ElementUI from "element-ui";

import  "element-ui/lib/theme-chalk/index.css";

// import "../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js";
// import "../node_modules/@ckeditor/ckeditor5-vue2/dist/ckeditor.js"

import CKEditor from '@ckeditor/ckeditor5-vue2';

import Vue from 'vue'   
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use( CKEditor );

Vue.use(ElementUI)
Vue.use( CKEditor );

Vue.use(VueAxios, axios)
// import "./scss/main.scss";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
