<template>
  <div>
    <slot name="search"> </slot>{{searchList.length}}/{{myJson.length}}


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
  </div>
</template>

<script>
export default {
  props: ['search', 'checkedNames', 'myJson', 'searchList', 'categories'],
  name: 'searchBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
