<template>
<div>

<svg  class="pie"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" >

      <defs>
          <svg:pattern   id="profile" width="100%" height="100%">
              <image   :href="image"

                      width="120" height="130" preserveAspectRatio="xMinYMid slice" />
          </svg:pattern>
          <filter id="linear">
    <feColorMatrix
      type="matrix"
      values="0 1 0 0 0
              0 1 0 0 0
              0 1 0 0 0
              0 1 0 1 0 "/>
  </filter>
      </defs>


      <circle cx="50%" cy="50%" r="28%" fill="url(#profile)" filter="url(#linear)"></circle>
    <circle class="circle"

      v-for="(item, index) in dataObjects"
      v-bind:style="{strokeDasharray: `${item.relativeSize} ${circleLength}`, strokeDashoffset: item.offset, stroke: colorParts[index]}"
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
    props:["data", "colorParts", 'image'],

    mounted() {
       setTimeout(() => { this.hasMounted = true }, 0);

    },
    data() {
      return {
        circles: this.data.length,
        circleLength: 371.9451599121094,
        hasMounted: false,


      }
    },
    methods: {


    },
    computed: {
      valueParts() {
          return this.data.map (item => item = 100)
      },
        dataTotal() {
          return this.valueParts.reduce((previous, current) => previous + current);
        },
        dataObjects() {

          let startingPoint = 0;
          return this.valueParts.map(item => {
            let relativeSize = ((item / this.dataTotal) * this.circleLength);
            let dataObject =  { relativeSize: this.hasMounted? relativeSize: 0 , offset: -startingPoint };
            startingPoint += relativeSize;
            return dataObject;

          })
        }
    }
  }
</script>

<style lang="scss" scoped>
svg {
  overflow: visible;
}
.pie .circle {
  fill: none;
  stroke-width: 32;
  transition: stroke-dasharray 0.3s ease-in-out,stroke-dashoffset 0.3s ease-in-out;
}
// $colors: red, yellow, cyan, blue, green, black, white, gray, purple;
// @for $i from 1 through length($colors) {
//   .pie circle:nth-child(#{$i}) {
//     stroke: nth($colors, $i);
//   }
// }
</style>
