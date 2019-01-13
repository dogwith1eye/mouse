<template>
  <div :style="{ height: '100vh', backgroundColor: backgroundColor }">
    <slot :x="x" :y="y" />
  </div>
</template>

<script>
export default {
  name: 'Color',
  props: ['x', 'y'],
  computed: {
    backgroundColor: function() {
      return (this.x > this.y ? 'red' : (this.x < this.y ? 'blue' : "green"))
    }
  }
}
</script>