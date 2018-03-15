<template>
  <div id="app">

<router-link tag="button" class="button" to="/">Login</router-link>
<router-link tag="button" class="button" to="/logout">Logout</router-link>
<router-link tag="button" class="button" to="/people">People</router-link>
 <router-link tag="button" class="button" to="/circles">Circles</router-link>
  <router-link tag="button" class="button" to="/feed">Feed</router-link>
   <router-link tag="button" class="button" to="/events">Events</router-link>
    <router-link tag="button" class="button" to="/profile">Profile</router-link>


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
