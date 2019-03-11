<template>
  <div id="app">
    <Mouse>
      <Color slot-scope="{ x, y }" :x="x" :y="y">
        <Position slot-scope="{ x, y }" :x="x" :y="y" />
      </Color>
    </Mouse>
  </div>
</template>

<script>
import Mouse from './components/4/Mouse.vue';
import Color from './components/4/Color.vue'
import Position from './components/4/Position.vue'

export default {
  name: 'app',
  components: {
    Mouse,
    Color,
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
  color: #2c3e50;
  margin: 0px;
}
</style>
