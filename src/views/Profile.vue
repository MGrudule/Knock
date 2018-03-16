<template>

  <div class="page">

   <h1>{{ msg }} </h1>


   <form class="edit input-group col-md-offset-2 col-md-4" @submit.prevent="updateUser(user)">
<h1> Hello,  {{name}}! Edit your profile </h1>
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
    <div class=" col-md-4">

      <chart v-bind:resourceChartData="resourceChartData"> </chart>
      <button class="button" v-on:click="addResource">Add resource</button>
</div>
  </div>

</template>

<script>
import chart from "@/components/chart.vue"
export default {
  name: 'Profile',
  components: { 'chart' : chart },
  data () {
    return {
      name: localStorage.getItem('name'),
      msg: 'Profile page',

      resourceChartData: {type: 'doughnut',
        cutoutPercentage: 90,
        data: {

          datasets: [
            {
            labels: [ 'Lift', 'Take Photos', 'Film', 'Big Data', 'Camera', '3d Printer', 'Rake'],
            data: [1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              'rgba(71, 183,132,1)', // Blue
              'rgba(71, 183,132,1)',
              'rgba(71, 183,132,1)',
              'rgba(171, 83,132,1)',
              'rgba(64,73,93,1)',
              'rgba(64,73,93,1)',
              'rgba(64,73,93,1)',

            ],

            borderWidth: 1
          },

          { // another line graph

            labels: ["I can", "I'm interested in", "I have"],
            data: [3, 1, 3],
            backgroundColor: [
              'rgba(71, 183,132,.5)',
              'rgba(171, 83,132,.5)',,
              'rgba(64,73,93,0.5)',// Green
            ],

            borderWidth: 3
            }
          ]
        },
        options: {
        responsive: true,
        lineTension: 1,
        legend: {
                display: false,
            },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var index = tooltipItem.index;
                    return dataset.labels[index] ;
                }
            }
          }

      }},
      user: { name: "Maija", email: "me@example.com"}
    }
  },

  methods: {

      addResource: function (event) {
        console.log(this.resourceChartData.data.datasets[0].data)
        this.resourceChartData.data.datasets[0].data.push(1);



    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1
  color: white



</style>
