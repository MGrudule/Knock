<template>

  <div class="page">

   <h1>{{ msg }}</h1>
   <div v-for="(user, index) in myJson" :key="user.id" class="checkbox  col-sm-3 col-xs-12 ">

     <chart v-bind:data="user.category.map(item => 1)"  v-bind:colorParts="user.category.map(item => item.color)" v-bind:nameParts="user.category.map(item => item.name)" v-bind:circleParts="user.circle.name"> </chart>
<h2 class="text-center"> {{user.name}} </h2>
    <hr>
   <div v-for="item in user.resources" :key="item.id" >
    <strong>  {{item.title}} </strong> :
     <span v-for="name in item.name" > {{name}} </span>

   </div>
   </div>
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


      msg: 'People page',

      myJson: json,

    }
  },
  computed: {
    fullName: function () {
      _.flatMap(data, item =>
 _(user.category)
   .filter({ name: 'fr' })
   .map(v => ({id: item.id, name: v.name}))
   .value()
);


    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>




</style>
