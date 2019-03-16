import Vue from "vue";
import App from "./App.vue";
import requireContext from "require-context";

Vue.config.productionTip = false;
Vue.config.devtools = false;

const files = require("./components/FbInput.vue");
console.log(require);

new Vue({
  render: h => h(App)
}).$mount("#app");
