<template>
  <div :style="{ height: '100vh', backgroundColor: backgroundColor }">
    <slot :x="backgroundColorX" :y="backgroundColorY" />
  </div>
</template>

<script>
export default {
  name: 'ColorSlot',
  props: ['x', 'y'],
  computed: {
    backgroundColor: function() {
      return (this.x > this.y ? 'red' : (this.x < this.y ? 'blue' : "green"))
    },
    backgroundColorX: function() {
      return (this.backgroundColor == 'red') ? 1 : 0
    },
    backgroundColorY: function() {
      return (this.backgroundColor == 'blue') ? 1 : 0
    }
  }
}
</script>