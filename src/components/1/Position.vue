<template>
  <div :style="{ height: '100vh' }" @mousemove="handleMouseMove">
    <h1>The mouse position is {{ x }}, {{ y }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Position',
  data: function () {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    handleMouseMove: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
}
</script>