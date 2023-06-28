<template>
  <div id="layout">
    <Header class="outHeaderStyle"></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/header.vue'

export default {
  name: 'layout',
  components: {Header},
}
</script>
<style>
#layout {
  /*height: 95vh;*/
}

.outHeaderStyle {
  position: fixed;
  top: 0px;
  width: 100vw;
  /*z-index: 999;*/
  height: 70px;
}

</style>
