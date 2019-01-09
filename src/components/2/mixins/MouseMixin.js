const MouseMixin = {
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

export default MouseMixin