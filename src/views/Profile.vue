<template>

    <div class="page">
      <div v-if="loading" class='loading-spinner'>
     <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
      <h1>Hello, {{user.name}}! </h1>
          <div class="row">



               <form class="edit input-group col-md-offset-2 col-md-3" @submit.prevent="updateUser(user)">
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


                            <div v-for="resource in user.resources" :key="resource.id" >
                            <label class="label"> {{resource.title}} </label>
                            <input-tag :tags.sync="resource.names "></input-tag>


                              </div>
                              <button class="button" type="submit">Update</button>
                </form>


                <div class=" col-md-4">
                  <h1>  Interest circles {{ circleData.length }} </h1>
                  <chart v-bind:data="circleData"  v-bind:colorParts="colorParts"> </chart>

                  <div class="row">
                        <div v-for="(category, index) in categories" :key="category.id" class="checkbox ">
                        <input  v-bind:style="{color: category.color}" type="checkbox" v-bind:id="category.id" v-bind:value="category.id" v-model="circleData" @click="somefunction(category.id)" >
                        <label   v-bind:for="category.id"> {{category.name}} </label>
                        </div>

                    </div>

            </div>

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
      checkedNames: [],
      name: localStorage.getItem('name'),
      msg: 'Profile page',
      circleData: [],
      color: [],
      colorParts: [],
      loading: false,
      user: [],
      categories: [{
                    "id": 1,
                    "name": "Art",
                    "color": "#aebd38",
                    },
                    {
                    "id": 2,
                    "name": "Music",
                    "color": "#38aebd",

                    },
                    {
                    "id": 3,
                    "name": "Project managment",
                    "color": "#bd38ae",
                    },
                    {
                    "id": 4,
                    "name": "Building ",
                    "color": "#ffee4c",

                    },
                    {
                    "id": 5,
                    "name": "Gardening ",
                    "color": "#38bd8a",

                    }],
                  }
                },
  mounted(){
    this.loading = true;
   axios.get("https://knockonthedoor.vps.codegorilla.nl/api/current_profile",
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

       .then((response)  =>  {
         this.loading = false;

         this.user = response.data.data;
         this.circleData = this.user.categories.map(item => item.id)
         this.colorParts = this.user.categories.map(item => item.color)


       }, (error)  =>  {
         this.loading = false;
         if (error.response.status === 401) {


         this.$router.push(this.$route.query.redirect || '/');
         }
         
       })
     },

  methods: {
      somefunction: function(item) {

        this.user.categories[item].color;
      },
    }
}
</script>
