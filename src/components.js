import "@babel/polyfill";
import Vue from "vue";
import VueCustomElement from "vue-custom-element";

Vue.use(VueCustomElement);

//autoload all components
const files = window.require.context("./components/", true, /\.vue$/i);

files.keys().map(key =>
  Vue.customElement(
    key
      .split("/")
      .pop()
      .split(".")[0],
    files(key)
  )
);
