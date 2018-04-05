<template>
  <div id="app" class="container">


    <div  class="" >

      <mq-layout mq="tablet">
        <mobilemenu>
        </mobilemenu>
    </mq-layout>
    <mq-layout class="row" mq="md+">

      <div class="col-sm-4">

        <router-link v-show="$store.state.navigation.show " tag="button" class="button block-mobile" to="/people">People</router-link>
        <router-link v-show="$store.state.navigation.show " tag="button" class="button block-mobile" to="/feed">Feed</router-link>
        <!-- <router-link tag="button" class="button block-mobile" to="/circles">Circles</router-link>
        <router-link tag="button" class="button block-mobile" to="/events">Events</router-link> -->

      </div>
      <div class="col-sm-4">
        <img v-if="$store.state.navigation.show " src="/static/img/logo.svg" height="50"/>
        <img v-else src="/static/img/logo.svg" />
      </div>
      <div class="col-sm-3">

        <router-link v-show="$store.state.navigation.show " tag="button" class="button button-white block-mobile float-right" to="/profile">Profile</router-link>

      </div>
    </mq-layout>


      </div>

    <router-view/>
  </div>
</template>

<script>
import mobilemenu from "@/components/mobilemenu.vue"
export default {


  name: 'App',
  components: {'mobilemenu': mobilemenu},
  data() {
    return {

      circleLength: 371.9451599121094,
      hasMounted: false,


    }
  },


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


<style lang="scss" scoped>
.float-right{
  float:right;
}

</style>
