<template>
  <div id="app">
    <!-- <appNav /> -->
    <router-view />
    <footerSec/>
  </div>
</template>

<script>
import appNav from "@/components/navComponent";
import footerSec from "@/components/footer.vue"
export default {
  name: "app",
  components: {
    appNav,footerSec
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
