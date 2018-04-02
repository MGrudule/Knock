<template>

  <div class="page">
    <div v-if="loading" class='loading-spinner'>
   <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

   <h1>{{ msg }}</h1>

   <div class="input input-with-icon ">
         <input type="search" v-model="search" placeholder="Search for resource.." >
         <i class="input-icon fa fa-search"></i>
    </div>


    <div class="row">

      <div class="radio">
        <input type="radio" id="0" value="" v-model="checkedNames" > <label v-bind:for="0"> all </label>
      </div>
      <div  v-for="(category, index) in categories" :key="category.id" >
        <div class="radio" :style="'color:'+category.color" >
          <input type="radio" :id="category.id" :value="category.name" v-model="checkedNames" > <label :style="'border: 2px solid'+category.color" v-bind:for="category.id" style="font-weight:900; text-transform:uppercase;padding:0.2em"> {{category.name}} </label>
        </div>
      </div>

    </div>

  <hr>


    <transition-group class="wrapper" name="list">
         <div v-for="(user, index) in searchList" :key="user.id" class=" list-item  col-md-4 col-sm-6  card">

           <chart v-bind:id="user.id"  v-bind:data="user.categories.map(item => 1)"  v-bind:colorParts="user.categories.map(item => item.color)" v-bind:nameParts="user.categories.map(item => item.name)" v-bind:circleParts="user.circle.name"> </chart>
               <div class="text-center">
               <span class="user-name" > {{user.name}} </span>
               <span > {{user.summary}} </span>
             </div>
             <hr>
             <div v-for="item in user.resources" :key="item.id"  class="inline" v-if="item.names.length !== 0">

               <resources :item="item"></resources>

             </div>
           </div>

     </transition-group>
 </div>


</template>

<script>
import axios from 'axios'
import json from '../mockup.json'
import chart from "@/components/chart_sm.vue"
import resources from "@/components/resources.vue"
export default {
  name: 'People',
  components: { 'chart' : chart , 'resources' : resources },
  data () {
    return {

      checkedNames: '',
      search: '',
      msg: 'People',
      loading: false,
      myJson: [],
      categories: [],


    }
  },

  computed: {

    searchList() {
      return this.filteredList.filter(user => {
        return user.resources.some((item) => {
          return item.names.some((name) => {
            return name.toLowerCase().includes(this.search.toLowerCase())
          })
        })
      })
    },
    filteredList() {
      return this.myJson.filter(user => {
        return user.categories.some((item) => {

          return item.name.toLowerCase().includes(this.checkedNames.toLowerCase())
          })
        })
    },
  },
  mounted(){

  { this.loading = true;
    axios.get("https://knockonthedoor.vps.codegorilla.nl/api/profiles",
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

       .then((response)  =>  {
         this.loading = false;
         this.myJson = response.data.data;

       }, (error)  =>  {
         this.loading = false;
       })}

       { axios.get("https://knockonthedoor.vps.codegorilla.nl/api/categories",
         {
         headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
         })

            .then((response)  =>  {
              console.log(response)
              this.categories = response.data.data;

            }, (error)  =>  {
              this.loading = false;
            })}
     },


}
</script>


<style lang="scss" scoped>

.list-leave-active {
position: absolute;
opacity: 0;

}

.list-move {
  transition: all 0.5s;
}

  .wrapper {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding-top: 12px;
}
  .card {


    display: inline-block;
  box-sizing: border-box;
   box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
   padding: 1em;
   transition: .25s background-color ease-in-out;
   transition: .25s transform ease-in-out;
transform: scale(1);

   &:hover  {
     transform: scale(1.02);
     background-color: rgba(255, 255, 255,0.1);


   }


 }


</style>
