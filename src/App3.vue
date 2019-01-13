<template>
  <div id="app">
    <PositionWithMouse />
  </div>
</template>

<script>
import WithMouse from './components/3/WithMouse.js';
import WithColor from './components/3/WithColor.js';
import Position from './components/3/Position.vue'
const PositionWithMouse = WithMouse(WithColor(Position))

export default {
  name: 'app',
  components: {
    PositionWithMouse
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
  color: #2c3e50;
  margin: 0px;
}
</style>
