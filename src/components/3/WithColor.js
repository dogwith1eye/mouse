import Vue from "vue";

const WithColor = (component) => {
  return Vue.component('WithColor', {
    render() {
      return (
        <div style={{ backgroundColor: this.backgroundColor}}>
          <component x={this.x} y={this.y} />
        </div>
      )
    },
    props: ['x', 'y'],
    computed: {
      backgroundColor: function() {
        return (this.x > this.y ? 'red' : (this.x < this.y ? 'blue' : "green"))
      }
    }
  })
}

export default WithColor