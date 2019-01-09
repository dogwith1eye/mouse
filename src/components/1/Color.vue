<template>
  <div :style="{ height: '100vh', backgroundColor: backgroundColor }" @mousemove="handleMouseMove">
  </div>
</template>

<script>
export default {
  name: 'Color',
  data: function () {
    return {
      x: 0,
      y: 0
    }
  },
  computed: {
    backgroundColor: function() {
      return (this.x > this.y ? 'red' : (this.x < this.y ? 'blue' : "green"))
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