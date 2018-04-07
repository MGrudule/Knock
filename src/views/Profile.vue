<template>

    <main class="container">
      <div v-if="loading" class='loading-spinner'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section class="separator">
      <span class="text-huge">Hello, {{user.name}}! </span>
       <h1> Edit your profile </h1>
    </section>

          <div class="row text-center ">

            <div class=" col-md-offset-2 col-md-6 ">


              <chart v-bind:data="circleData"  v-bind:colorParts="colorParts" v-bind:image="image"> </chart>

              <div class="row form-field">
                    <div v-for="(category, index) in categories" :key="category.id" class="checkbox ">

                    <input type="checkbox" v-bind:id="category.id" v-bind:value="category"   v-model="circleData" >
                    <label   v-bind:for="category.id"> {{category.name}} </label>

                    </div>

                </div>
                chose profile picture
          <file-upload @uploaded-file="showImage"> </file-upload>

          </div>


               <form class="edit col-md-offset-2 col-md-6" @submit.prevent="updateUser(user)">

                          <div class="input input-with-icon full-width form-field">
                               <input class="input" type="text" v-model="user.name">
                              <i class="input-icon fa fa-user"></i>
                          </div>
                          <div class="input input-with-icon full-width form-field">
                                <input type="email" v-model="user.email">
                                <i class="input-icon fa fa-envelope"></i>
                           </div>
                           <div class="input input-with-icon full-width form-field">
                             <label class="label"> Tell a few lines about yourself </label>
                                 <input type="summary" v-model="user.summary">
                                 <i class="input-icon fa fa-pencil"></i>
                            </div>


                            <div v-for="resource in user.resources" :key="resource.id" >
                            <label class="label"> {{resource.title}} </label>
                            <input-tag :tags.sync="resource.names "></input-tag>


                              </div>
                              <div class="text-center form-field">
                                {{updateMsg}}
                              </div>
                              <div class="text-center form-field">

                              <button class="button" type="submit">Update</button>

                                </div>
                </form>




      </div>
  </main>
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
      loading: false,
      user: [],
      image: "",
      updateMsg: "",
      categories: [],
                  }
                },
    computed: {
      colorParts(){
      return  this.circleData.map(item => item.color)
    },
    checkedCategories(){
      return this.circleData.map(item=> item.id)
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
         this.image = "https://knockonthedoor.vps.codegorilla.nl" + response.data.data.image;
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
    updateUser() {
    this.loading = true;
      axios.put("https://knockonthedoor.vps.codegorilla.nl/api/profiles/" +this.user.id,
          {  name: this.user.name,
             email: this.user.email,
             summary: this.user.summary,
             categories: this.checkedCategories,
             resources: this.user.resources  },
          {
              headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
        })

        .then((response)  =>  {
          this.loading = false;
          this.updateMsg = "Your profile has been updated successfuly!"

        }, (error)  =>  {
          this.loading = false;
          this.updateMsg = "Oops, something went wrong - please try again later"

        })
      }

    }
}
</script>
