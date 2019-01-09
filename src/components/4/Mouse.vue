<template>
  <div @mousemove="handleMouseMove">
    <slot :x="x" :y="y" />
  </div>
</template>

<script>
export default {
  name: 'Mouse',
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