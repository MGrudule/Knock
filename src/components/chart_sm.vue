<template>
  <div>
        <svg class="pie"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" >

              <defs>
                    <filter :id="'linear' + id">
                      <feColorMatrix
                        type="matrix"
                        values="0 1 0 0 0
                                0 1 0 0 0
                                0 1 0 0 0
                                0 1 0 1 0 "/>
                    </filter>
              </defs>

                <image  ref="myImage" :id="'myImage' + id" class="hei"
                      :href="image" :filter="'url(#linear'+id +')'"
                        x="33%" y="15%"
                        width="32%" height="70%" preserveAspectRatio="xMinYMid slice" />



                <g v-for="(item, index) in dataObjects" >
                      <circle
                        class="dash-circle"
                        v-bind:style="{strokeDasharray: `${item.relativeSize} ${circleLength}`, strokeDashoffset: item.offset, stroke: colorParts[index]}"
                        r="25%"
                        cx="50%"
                        cy="50%"

                      />
                          <title>{{ nameParts[index] }}</title>

                     </circle>

                </g>
        </svg>
    </div>

</template>

<script>
export default {
  name: "Chart",
  props: ["data", "colorParts", "nameParts", "circleParts", "id", "image"],

  mounted() {
    this.hasMounted = true;
  },
  data() {
    return {
      circleLength: 371.9451599121094,
      hasMounted: false
    };
  },
  computed: {
    valueParts() {
      return this.data.map(item => (item = 1));
    },
    dataObjects() {
      let startingPoint = 0;
      return this.data.map(item => {
        let relativeSize = item / this.data.length * this.circleLength;
        let dataObject = {
          relativeSize: this.hasMounted ? relativeSize : 0,
          offset: -startingPoint
        };
        startingPoint += relativeSize;
        return dataObject;
      });
    }
  }
};
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
  transition: stroke-dasharray 0.3s ease-in-out,
    stroke-dashoffset 0.3s ease-in-out;
}
.company {
  white-space: pre-line;
  max-width: 2em;
}
</style>
