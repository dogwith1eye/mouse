<template>
  <div id="app" style="{ height: '100vh' }">
    <Position />
  </div>
</template>

<script>
import Position from './components/2/Position.vue'

export default {
  name: 'app',
  components: {
    Position
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
  Position: #2c3e50;
  margin: 0px;
}
</style>
