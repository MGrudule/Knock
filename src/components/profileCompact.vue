
<template>
  <div  v-bind:class="{ 'row': !compactLayout }">
<div v-bind:class="{ 'col-md-4 col-sm-4 ': !compactLayout }">
    <chart v-bind:id="user.id"  v-bind:data="user.category.map(item => 1)" v-bind:image='"assets/profile.png"'  v-bind:colorParts="user.category.map(item => item.color)" v-bind:nameParts="user.category.map(item => item.name)" v-bind:circleParts="user.circle.name"> </chart>
        <div  v-if="compactLayout" class="text-center"  style="min-height:6em">

        <span class="user-name" > {{user.name}} </span>
        <span > {{user.summary}} </span> <br>
        <span class="text-gray text-small"> {{user.circle.name}} </span>

      </div>
    </div>

      <div v-bind:class="{ 'col-md-7, col-sm-8': !compactLayout }">
        <div v-if="!compactLayout">
          <span class="user-name" > {{user.name}} </span>
          <span > {{user.summary}} </span>  <br>
          <span class="text-gray text-small"> {{user.circle.name}} </span>

        </div>

        <div class="row" v-bind:class="{ ' aligner-space-around ': compactLayout }">
      <div v-for="item in user.resources" :key="item.id"  v-bind:class="{ 'col-md-3': compactLayout }" v-if="item.name.length !== 0" >



        <resources v-if="compactLayout" :item="item"></resources>
        <div  v-if="!compactLayout" class="skill-row">
        <span class="skills-title">  {{item.title}} </span>

          <span class="tag" v-for="name in item.name" > {{name}} </span>

        </div>

      </div>

      </div>

      </div>
    </div>
</template>

<script>
import resources from "./resources.vue";
import chart from "./chart_sm.vue";
export default {
  props: ["user", "id", "index", "compactLayout"],
  components: { chart: chart, resources: resources },
  name: "profileCompact",
  data() {
    return {
      msg: "Welcome to Your Vue.js "
    };
  }
};
</script>

<style lang="scss" scoped>
.aligner-space-around {
  .col-md-3 {
    padding:0;
    position: unset;

  }

}
.skill-row{
  margin-bottom:1rem;
}
</style>
