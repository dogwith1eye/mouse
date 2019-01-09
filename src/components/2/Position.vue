<template>
  <div :style="{ height: '100vh' }" @mousemove="handleMouseMove">
    <h1>The mouse position is {{ x }}, {{ y }}</h1>
  </div>
</template>

<script>
import MouseMixin from './mixins/MouseMixin.js';

export default {
  name: 'Position',
  mixins: [MouseMixin]
}
</script>