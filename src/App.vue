<template>
  <div id="app">
    <div style="display: flex;">
      <Sidebar />
      <router-view style="width: 100%;" />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {Sidebar}
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}

.cursor-pointer {
  cursor: pointer;
}
</style>
