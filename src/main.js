import Vue from "vue";
import App from "./App.vue";

import FbGallery from "./components/FbGallery";

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
