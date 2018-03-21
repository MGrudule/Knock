<template>

    <div class="page">
          <div class="row">
            <h1>Hello, {{user.name}}! </h1>


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

                            <label class="label"> I can </label>
                            <input-tag :tags.sync="tagsArray"></input-tag>
                                <button class="button" type="submit">Update</button>
                </form>


              <div class=" col-md-4">
                <h1>  Interest circles {{ data.length }} </h1>
                <chart v-bind:data="data"  v-bind:colorParts="colorParts"> </chart>
                <div class="row">
                      <div v-for="(category, index) in categories" :key="category.id" class="checkbox col-md-offset-1 col-sm-4 col-xs-4 ">
                      <input  v-bind:style="{color: category.color}" type="checkbox" v-bind:id="category.id" v-bind:value="category.id" v-model="data" @click="somefunction(category.color)" >
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
      tagsArray:["photography", "music"],
      data: [],
      color: [],
      colorParts: [],
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
      somefunction: function(item) {
        //this.data.push(100); console.log(item);
        this.colorParts.push(item);
      },
      addResource: function (event) {

        //this.data.push(100);



    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1
  color: white



</style>
