<template>
  <div id="app" class="container">
    <div class="row">
          <div class="col-sm-8">
            <router-link tag="button" class="button block-mobile" to="/people">People</router-link>
            <router-link tag="button" class="button block-mobile" to="/circles">Circles</router-link>
            <router-link tag="button" class="button block-mobile" to="/feed">Feed</router-link>
            <router-link tag="button" class="button block-mobile" to="/events">Events</router-link>

          </div>
          <div class="col-sm-3">

            <router-link tag="button" class="button button-white block-mobile" to="/profile">Profile</router-link>

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

<style>
  @import './assets/font-awesome.min.css';
  @font-face{
    font-family:'FontAwesome';src:url('./assets/fonts/fontawesome-webfont.eot');
  src:url('./assets/fonts/fontawesome-webfont.eot?#iefix&v=4.6.1') format('embedded-opentype'),
  url('./assets/fonts/fontawesome-webfont.woff2?v=4.6.1') format('woff2'),
  url('./assets/fonts/fontawesome-webfont.woff?v=4.6.1') format('woff'),
  url('./assets/fonts/fontawesome-webfont.ttf?v=4.6.1') format('truetype'),
  url('./assets/fonts/fontawesome-webfont.svg?v=4.6.1#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}
</style>


<style lang="sass" >


</style>
