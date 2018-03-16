<template>
<div>
<h1>  Skills {{lenghtResources}} </h1>
<canvas id="resource-chart"></canvas>
</div>

</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'Chart',
  props: ['resourceChartData'],
  data () {
    return {

      resources:  this.resourceChartData.data.datasets[0].data,

      msg: 'Profile page',

    }
  },
  computed: {
    // a computed getter
    lenghtResources: function () {
      // `this` points to the vm instance
      return this.resources.length
    }
  },
  mounted() {
  this.createChart('resource-chart', this.resourceChartData);

},


  methods: {
      createChart(chartId, chartData) {
        
      const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });

      }
    }
}
</script>
