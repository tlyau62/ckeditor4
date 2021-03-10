import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import CKEditor from "ckeditor4-vue";

Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
