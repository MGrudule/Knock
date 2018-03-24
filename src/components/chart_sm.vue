<template>
<div>

<svg class="pie" >
<g v-for="(item, index) in dataObjects" >
    <circle

      v-bind:style="{strokeDasharray: `${item.relativeSize} ${circleLength}`, strokeDashoffset: item.offset, stroke: colorParts[index]}"
      r="25%"
      cx="50%"
      cy="50%"
    /> <title>{{ nameParts[index] }}</title> <text x="50%" y="50%" text-anchor="middle" fill="#51c5cf" dy=".3em" >{{ circleParts }} </text></circle>

  </g>
  </svg>
</div>

</template>

<script>

export default {
    name: 'Chart',
    props:["data", "colorParts", "nameParts", "circleParts"],

    mounted() {
        this.hasMounted = true ;

    },
    data() {
      return {

        circleLength: 371.9451599121094,
        hasMounted: false,


      }
    },
    methods: {


    },
    computed: {
      valueParts() {
          return this.data.map (item => item = 1)
      },
        dataObjects() {

          let startingPoint = 0;
          return this.data.map(item => {
            let relativeSize = ((item / this.data.length) * this.circleLength);
            let dataObject =  { relativeSize: this.hasMounted? relativeSize: 0 , offset: -startingPoint };
            startingPoint += relativeSize;
            return dataObject;

          })
        }
    }
  }
</script>

<style lang="scss">
.pie {
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.pie circle {
  fill: none;
  stroke-width: 32;
  transition: stroke-dasharray 0.3s ease-in-out,stroke-dashoffset 0.3s ease-in-out;
}

</style>
