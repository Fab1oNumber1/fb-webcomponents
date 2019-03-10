<template>
  <div id="app">
    <h1>Webcomponents</h1>
    <FbInput label="Hallo Welt"></FbInput>
  </div>
</template>

<script>
import FbInput from "./components/FbInput";

import FbTab from "./components/FbTab";
import FbTabs from "./components/FbTabs";
import FbHeaderSlider from "./components/FbHeaderSlider";

export default {
  name: "App",
  components: {
    FbInput,
    FbTab,
    FbTabs,
    FbHeaderSlider
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css");

body,
html {
  font-size: 20px;

  font-family: Ubuntu, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  padding: 1rem;
}
</style>
