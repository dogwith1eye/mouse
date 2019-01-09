<template>
  <div :style="{ height: '100vh', backgroundColor: backgroundColor }" @mousemove="handleMouseMove">
  </div>
</template>

<script>
import MouseMixin from './mixins/MouseMixin.js';

export default {
  name: 'Color',
  mixins: [MouseMixin],
  computed: {
    backgroundColor: function() {
      return (this.x > this.y ? 'red' : (this.x < this.y ? 'blue' : "green"))
    }
  }
}
</script>