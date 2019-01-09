<template>
  <div id="app" style="{ height: '100vh' }">
    <Color />
  </div>
</template>

<script>
import Color from './components/1/Color.vue'

export default {
  name: 'app',
  components: {
    Color
  }
}
</script>

<style>
body { margin:0; }
h1 { margin:0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  Color: #2c3e50;
  margin: 0px;
}
</style>
