<template>

  <div class="page">

   <h1>{{ msg }} </h1>
   <p class="text-primary"> Hello,  {{user.name}}! </p>

   <form class="edit input-group col-md-offset-2 col-md-4" @submit.prevent="updateUser(user)">
     <h1> Edit your profile </h1>
              <div class="input input-with-icon full-width ">
                  <input class="input" type="text" v-model="user.name">
                  <i class="input-icon fa fa-user"></i>
              </div>
              <div class="input input-with-icon full-width ">
                    <input type="email" v-model="user.email">
                    <i class="input-icon fa fa-envelope"></i>
               </div>
               <div class="input input-with-icon full-width ">
                 <label class="label"> Tell a few lines about yourself </label>
                     <input type="summary" v-model="user.summary">
                     <i class="input-icon fa fa-pencil"></i>
                </div>
                <label class="label"> I can </label>
<input-tag :tags.sync="tagsArray"></input-tag>
                    <button class="button" type="submit">Update</button>
    </form>
    <div class=" col-md-4">

      <chart v-bind:resourceChartData="resourceChartData"> </chart>
      <button class="button" v-on:click="addResource">Add resource</button>
</div>
  </div>

</template>

<script>

import axios from 'axios'
import chart from "@/components/chart.vue"
export default {
  name: 'Profile',
  components: { 'chart' : chart },
  data () {
    return {
      name: localStorage.getItem('name'),
      msg: 'Profile page',
      tagsArray:["photography", "music"],
      resourceChartData: [],
      user: [],
    }
  },
  mounted(){

   axios.get("https://knockonthedoor.vps.codegorilla.nl/api/user",
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

       .then((response)  =>  {
         console.log(response)
         this.user = response.data;

       }, (error)  =>  {
         this.loading = false;
       })
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
