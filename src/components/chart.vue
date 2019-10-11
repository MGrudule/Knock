<template>
  <div>

      <svg  class="pie"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" >

            <defs>
                  <filter id="linear">
                  <feColorMatrix
                    type="matrix"
                    values="0 1 0 0 0
                            0 1 0 0 0
                            0 1 0 0 0
                            0 1 0 1 0 "/>
                    </filter>
            </defs>

            <image   class="rounded"
                  :href="image.sample" filter="url(#linear)"
                  x="33%" y="15%"
                  width="32%" height="70%"  preserveAspectRatio="xMinYMid slice"
                   />

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
  name: "Chart",
  props: ["data", "colorParts"],
  imageData: [],

  mounted() {
    setTimeout(() => {
      this.hasMounted = true;
    }, 0);
  },
  data() {
    return {
      circles: this.data.length,
      circleLength: 371.9451599121094,
      hasMounted: false,
      image: {
                  sample: require('@/assets/profile.png')
              },
    };
  },
  computed: {
    valueParts() {
      return this.data.map(item => (item = 100));
    },
    dataTotal() {
      return this.valueParts.reduce((previous, current) => previous + current);
    },
    dataObjects() {
      let startingPoint = 0.01;
      return this.valueParts.map(item => {
        let relativeSize = item / this.dataTotal * this.circleLength;
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
.hei {
  border-radius: 100%;
  overflow: hidden;
}
svg {
  overflow: visible;
}
.pie .circle {
  fill: none;
  stroke-width: 32;
  transition: stroke-dasharray 0.3s ease-in-out,
    stroke-dashoffset 0.3s ease-in-out;
}
</style>
