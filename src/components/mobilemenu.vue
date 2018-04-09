<template>
  <div class="text-center">
    <img src="/static/img/logo.svg" height="50"/>
  <ul >


      <router-link v-show="$store.state.navigation.show " tag="li" class="button block-mobile" to="/people">People</router-link>
      <router-link v-show="$store.state.navigation.show " tag="li" class="button block-mobile" to="/feed">Feed</router-link>

      <!-- <router-link tag="button" class="button block-mobile" to="/events">Events</router-link> -->
      <router-link v-show="$store.state.navigation.show " tag="button" class="button button-outlined button-icon-only block-mobile  float-right" to="/profile">
        <i class="fa fa-user" aria-hidden="true"></i> Profile</router-link>


  </ul>
</div>
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
