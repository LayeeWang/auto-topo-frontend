<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import header from "./components/header";

export default {
  name: 'App',
  components: {
    header,
    HelloWorld
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>
