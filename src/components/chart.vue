<template>
<div>
<h1>  Interest circles </h1>
<svg class="pie">
    <circle
      v-for="item in dataObjects"
      v-bind:style="{strokeDasharray: `${item.relativeSize} ${circleLength}`, strokeDashoffset: item.offset}"
      r="25%"
      cx="50%"
      cy="50%"
    />
  </svg>
</div>

</template>

<script>

export default {
    name: 'Chart',
    props:["data"],
    mounted() {
       setTimeout(() => { this.hasMounted = true }, 0);

    },
    data() {
      return {
        circles: this.data.length,
        circleLength: 371.9451599121094,
        hasMounted: false
      }
    },
    methods: {

    },
    computed: {
        dataTotal() {
          return this.data.reduce((previous, current) => previous + current);
        },
        dataObjects() {
          let startingPoint = 0;
          return this.data.map(item => {
            let relativeSize = ((item / this.dataTotal) * this.circleLength);
            let dataObject =  { relativeSize: this.hasMounted? relativeSize: 0 , offset: -startingPoint };
            startingPoint += relativeSize;
            return dataObject;
          })
        }
    }
  }
</script>

<style lang="scss">
.pie circle {
  fill: none;
  stroke-width: 32;
  transition: stroke-dasharray 0.3s ease-in-out,stroke-dashoffset 0.3s ease-in-out;
}
$colors: red, yellow, cyan, blue, green, black, white, gray, purple;
@for $i from 1 through length($colors) {
  .pie circle:nth-child(#{$i}) {
    stroke: nth($colors, $i);
  }
}
</style>
