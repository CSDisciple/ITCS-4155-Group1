import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MediumEditor from "vuejs-medium-editor";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
require('@/assets/css/bootstrap.css')
// // Install BootstrapVue
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)


Vue.component("medium-editor", MediumEditor);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
