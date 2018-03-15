<template>

  <div class="page">

   <h1>{{ msg }}</h1>
<canvas id="planet-chart"></canvas>
  </div>

</template>

<script>
import Chart from 'chart.js';
import planetChartData from '@/chart-data.js';
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'Profile page',
      planetChartData
    }
  },
  mounted() {
  this.createChart('planet-chart', this.planetChartData);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>




</style>
