<template>

  <div class="page">

   <h1>{{ msg }}</h1>
   <div v-for="(user, index) in myJson" :key="user.id" class="checkbox col-md-offset-1 col-sm-4 col-xs-4 ">
     {{user.category.length}} 
     <chart v-bind:data="user.category.map(item => 1)"  v-bind:colorParts="user.category.map(item => item.color)"> </chart>
   {{user.name}} <hr>
   <div v-for="item in user.category" :key="item.id" >
     <div v-bind:style="{color: item.color}">  {{item.name}} </div>

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
      data: [1, 1, 1, 1],
      colorParts: ["green", "red", "blue", "orange"],

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
