import Vue from "vue";

const WithMouse = (component) => {
  return Vue.component('WithMouse', {
    render() {
      return (
        <div onMousemove={this.handleMouseMove}>
          <component x={this.x} y={this.y} />
        </div>
      )
    },
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
  })
}

export default WithMouse