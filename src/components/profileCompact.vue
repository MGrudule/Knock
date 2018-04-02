
<template>
  <div  v-bind:class="{ 'row': !compactLayout }">
<div v-bind:class="{ 'col-md-5 col-sm-4 ': !compactLayout }">
    <chart v-bind:id="user.id"  v-bind:data="user.categories.map(item => 1)"  v-bind:colorParts="user.categories.map(item => item.color)" v-bind:nameParts="user.categories.map(item => item.name)" v-bind:circleParts="user.circle.name"> </chart>
        <div  v-if="compactLayout" class="text-center">
        <span class="user-name" > {{user.name}} </span>
        <span > {{user.summary}} </span>
      </div>
    </div>

      <div v-bind:class="{ 'col-md-7, col-sm-6': !compactLayout }">
        <div v-if="!compactLayout">
          <span class="user-name" > {{user.name}} </span>
          <span > {{user.summary}} </span>
        </div>
      <div v-for="item in user.resources" :key="item.id"  class="inline " v-if="item.names.length !== 0">

        <resources v-if="compactLayout" :item="item"></resources>
        <div v-else>
        <strong>  {{item.title}} </strong>
          <span class="tag" v-for="name in item.names" > {{name}} </span>

        </div>
</div>
      </div>
    </div>
</template>

<script>
import resources from "./resources.vue"
import chart from "./chart_sm.vue"
export default {
  props: ['user', 'id', 'index', 'compactLayout'],
  components: { 'chart' : chart , 'resources' : resources },
  name: 'profileCompact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
