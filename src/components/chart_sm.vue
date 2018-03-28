<template>
<div>
    <svg class="pie"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" >

            <defs>
                <svg:pattern  :id="'profile' + id" patternUnits="userSpaceOnUse" width="100%" height="100%">
                    <image  :href="images.sample"
                            x="100" y="20"
                            width="100" height="100" />
                </svg:pattern>
            </defs>


            <circle cx="50%" cy="50%" r="25%" :fill="'url(#profile' + id +')'"></circle>

            <g v-for="(item, index) in dataObjects" >
              <circle
                class="dash-circle"
                v-bind:style="{strokeDasharray: `${item.relativeSize} ${circleLength}`, strokeDashoffset: item.offset, stroke: colorParts[index]}"
                r="25%"
                cx="50%"
                cy="50%"

              />
                  <title>{{ nameParts[index] }}</title>

                  <text class="company" x="50%" y="85%"
                        text-anchor="middle" fill="#ffff" dy=".3em" >
                        {{ circleParts }}
                   </text>

             </circle>

            </g>
      </svg>
</div>

</template>

<script>

export default {
    name: 'Chart',
    props:["data", "colorParts", "nameParts", "circleParts", "id"],

    mounted() {
        this.hasMounted = true ;

    },
    data() {
      return {

        circleLength: 371.9451599121094,
        hasMounted: false,
        images: {
                  sample: require('@/assets/profile.png')
              },

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

<style lang="scss" scoped>

.pie {
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  text {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.8em;
  }
}
.pie .dash-circle {
  background-color: orange;
  fill: none;
  stroke-width: 32;
  transition: stroke-dasharray 0.3s ease-in-out,stroke-dashoffset 0.3s ease-in-out;


}

</style>
