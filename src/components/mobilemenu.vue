<template>
  <ul >

<img src="/static/img/logo.svg" height="50"/>
      <router-link v-show="$store.state.navigation.show " tag="li" class="button block-mobile" to="/people">People</router-link>
      <router-link v-show="$store.state.navigation.show " tag="li" class="button block-mobile" to="/feed">Feed</router-link>
      <!-- <router-link tag="button" class="button block-mobile" to="/circles">Circles</router-link>
      <router-link tag="button" class="button block-mobile" to="/events">Events</router-link> -->





      <router-link v-show="$store.state.navigation.show " tag="li" class="button button-white block-mobile float-right" to="/profile">Profile</router-link>


  </ul>
</template>

<script>
export default {
  name: 'mobilemenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>




</style>
