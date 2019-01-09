<template>
  <div :style="{ height: '100vh' }">
    <h1>The mouse position is {{ x }}, {{ y }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Position',
  props: ['x', 'y'],
}
</script>