<template>
  <div id="app">
    <div class="row">
    <div class="col-sm-8">


<router-link tag="button" class="button block-mobile" to="/people">People</router-link>
 <router-link tag="button" class="button block-mobile" to="/circles">Circles</router-link>
  <router-link tag="button" class="button block-mobile" to="/feed">Feed</router-link>
   <router-link tag="button" class="button block-mobile" to="/events">Events</router-link>

</div>
<div class="col-sm-3">
 <div class="button-group">
    <router-link tag="button" class="button button-white" to="/profile">Profile</router-link>
</div>
</div>
</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>




<style lang="sass" >
h1
  color: white !important
  font-size: 2em
  padding: 1em
.router-link

  padding: 1em
.router-link-exact-active
    background-color: #1abc9c

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
