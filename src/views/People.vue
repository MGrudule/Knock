<template>

  <div class="page">

   <h1>{{ msg }}</h1>
   <div class="input input-with-icon ">

         <input type="search" v-model="search" placeholder="Search for resource.." >
         <i class="input-icon fa fa-search"></i>
    </div>

  <hr>


  <transition-group class="wrapper" name="list">
   <div v-for="(user, index) in filteredList" :key="user.id" class="checkbox list-item  col-md-3 card">

     <chart  v-bind:data="user.category.map(item => 1)"  v-bind:colorParts="user.category.map(item => item.color)" v-bind:nameParts="user.category.map(item => item.name)" v-bind:circleParts="user.circle.name"> </chart>
<h2 class="text-center"> {{user.name}} </h2>
    <hr>
   <div v-for="item in user.resources" :key="item.id" >
    <strong>  {{item.title}} </strong> :
     <span v-for="name in item.name" > {{name}} </span>

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

search: '',
      msg: 'People page',

      myJson: json,

    }
  },
  computed: {
    filteredList() {
   return this.myJson.filter(user => {
     return user.resources.some((item) => {
       return item.name.some((name) => {
     return name.toLowerCase().includes(this.search.toLowerCase())})})
   })
 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active {
  transition: all 1s;
}
.list-leave-active {
  transition: all 0.1s;
}

.list-enter .list-leave/* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  //transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}

  .wrapper {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  padding-top: 12px;
}
  .card {
   box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
   padding: 1em;
   transition: .25s all ease-in-out;


   &:hover  {
     transform: scale(1.02);
     background-color: rgba(255, 255, 255,0.1);


   }


 }


</style>
