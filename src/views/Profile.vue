<template>

  <div class="page">

   <h1>{{ msg }}</h1>
   <form class="edit input-group col-md-offset-4 col-md-4" @submit.prevent="updateUser(user)">

              <div class="input input-with-icon full-width ">
                  <input class="input" type="text" v-model="user.name">
                  <i class="input-icon fa fa-user"></i>
              </div>
              <div class="input input-with-icon full-width ">
                    <input type="email" v-model="user.email">
                    <i class="input-icon fa fa-envelope"></i>
               </div>

                    <button class="button" type="submit">Update</button>
    </form>
    <div class="col-md-offset-2 col-md-8">
<canvas id="planet-chart"></canvas>
</div>
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
      planetChartData,
      user: { name: "Maija", email: "me@this.com"}
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
h1
  color: white



</style>
