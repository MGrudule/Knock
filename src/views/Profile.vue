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
                  <chart v-bind:data="circleData"  v-bind:colorParts="colorParts" v-bind:image="image"> </chart>

                  <div class="row">
                        <div v-for="(category, index) in categories" :key="category.id" class="checkbox ">
                        <input type="checkbox" v-bind:id="category.id" v-bind:value="category"   v-model="circleData" @click="somefunction(category.id)" >
                        <label   v-bind:for="category.id"> {{category.name}} </label>
                        </div>

                    </div>
  <file-upload @uploaded-file="showImage"> </file-upload>
            </div>

      </div>
  </div>
</template>

<script>

import axios from 'axios'
import chart from "@/components/chart.vue"
import fileUpload from "@/components/fileUpload.vue"
export default {
  name: 'Profile',
  components: { 'chart' : chart , 'file-upload' : fileUpload},
  data () {
    return {
      checkedNames: [],
      name: localStorage.getItem('name'),
      msg: 'Profile page',
      circleData: [],
      color: [],

      loading: false,
      user: [],
      image: "",
      categories: [],
                  }
                },
    computed: {
      colorParts(){
      return  this.circleData.map(item => item.color)
      }
    },
  mounted(){
    this.loading = true;
  { axios.get("https://knockonthedoor.vps.codegorilla.nl/api/current_profile",
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

       .then((response)  =>  {
         this.loading = false;

         this.user = response.data.data;
         //this.circleData = this.user.categories.map(item => item.id)
         this.circleData = this.user.categories



       }, (error)  =>  {
         this.loading = false;
         if (error.response.status === 401) {


         this.$router.push(this.$route.query.redirect || '/');
         }

       })
     }
     { axios.get("https://knockonthedoor.vps.codegorilla.nl/api/categories",
       {
       headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
       })

          .then((response)  =>  {

            this.categories = response.data.data;

          }, (error)  =>  {
            this.loading = false;
          })}},

  methods: {
    showImage(value){
      this.image = value;
    },
      somefunction: function(checked) {

        //this.categories[item].color;



      },
    }
}
</script>
