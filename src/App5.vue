<template>
  <div id="app">
    <Mouse>
      <ColorSlot slot-scope="{ x, y }" :x=x :y=y>
        <Position v-if="x == 1" slot-scope="{ x, y }" :x=x :y=y />
      </ColorSlot>
    </Mouse>
  </div>
</template>

<script>
import Mouse from './components/4/Mouse.vue';
import ColorSlot from './components/4/ColorSlot.vue'
import Position from './components/4/Position.vue'

export default {
  name: 'app',
  components: {
    Mouse,
    ColorSlot,
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
