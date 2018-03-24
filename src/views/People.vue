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
        <div class="radio">
          <input type="radio" id="1" value="art" v-model="checkedNames" > <label v-bind:for="1"> Art </label>
        </div>
        <div class="radio">
          <input type="radio" id="2" value="gardening" v-model="checkedNames"> <label v-bind:for="2"> Gardening </label>
        </div>
        <div class="radio">
          <input type="radio" id="3" value="business" v-model="checkedNames"> <label v-bind:for="3"> Business </label>
        </div>
        <div class="radio">
          <input type="radio" id="4" value="music" v-model="checkedNames"> <label v-bind:for="4"> Music </label>
        </div>
        <div class="radio">
          <input type="radio" id="5" value="building" v-model="checkedNames"> <label v-bind:for="5"> Building </label>
        </div>

    </div>

  <hr>


    <transition-group class="wrapper" name="list">
         <div v-for="(user, index) in searchList" :key="user.id" class=" list-item  col-md-3 card">

           <chart  v-bind:data="user.category.map(item => 1)"  v-bind:colorParts="user.category.map(item => item.color)" v-bind:nameParts="user.category.map(item => item.name)" v-bind:circleParts="user.circle.name"> </chart>
               <div class="text-center">
               <span class="user-name" > {{user.name}} </span>
               <span > {{user.summary}} </span>
             </div>
          <hr>
             <div v-for="item in user.resources" :key="item.id"  class="tags" >
               <div class="tagname">
                 <strong>  {{item.title}} </strong> </div>
               <span class="tag" v-for="name in item.name" > {{name}} </span>
             </div>
           </div>

     </transition-group>
 </div>


</template>

<script>
import json from '../mockup.json'
import chart from "@/components/chart_sm.vue"
export default {
  name: 'People',
  components: { 'chart' : chart },
  data () {
    return {
      checkedNames: [],
      search: '',
      msg: 'People page',
      loading: false,
      myJson: json,

    }
  },
  computed: {

    searchList() {
      return this.filteredList.filter(user => {
        return user.resources.some((item) => {
          return item.name.some((name) => {
            return name.toLowerCase().includes(this.search.toLowerCase())
          })
        })
      })
    },
    filteredList() {
      return this.myJson.filter(user => {
        return user.category.some((item) => {

          return item.name.toLowerCase().includes(this.checkedNames)
          })
        })
    },
  }
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


   &:hover  {
     transform: scale(1.02);
     background-color: rgba(255, 255, 255,0.1);


   }


 }


</style>
