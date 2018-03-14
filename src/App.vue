<template>
  <div id="app">

<router-link to="/">Login</router-link>
<router-link to="/logout">Logout</router-link>
<router-link to="/people">People</router-link>
 <router-link to="/circles">Circles</router-link>
  <router-link to="/feed">Feed</router-link>
   <router-link to="/events">Events</router-link>
    <router-link to="/profile">Profile</router-link>


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

  <style lang="sass" scoped>
  .router-link-exact-active
    background-color: green
    color: white



  </style>
