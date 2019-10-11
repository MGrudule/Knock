<style lang="scss">
@import '../src/assets/style.css';
@import "./assets/font-awesome.min.css";
@font-face {
  font-family: "FontAwesome";
  src: url("./assets/fonts/fontawesome-webfont.eot");
  src: url("./assets/fonts/fontawesome-webfont.eot?#iefix&v=4.6.1")
      format("embedded-opentype"),
    url("./assets/fonts/fontawesome-webfont.woff2?v=4.6.1") format("woff2"),
    url("./assets/fonts/fontawesome-webfont.woff?v=4.6.1") format("woff"),
    url("./assets/fonts/fontawesome-webfont.ttf?v=4.6.1") format("truetype"),
    url("./assets/fonts/fontawesome-webfont.svg?v=4.6.1#fontawesomeregular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}

</style>
<template>
  <div id="app" class="container">


    <nav>

      <mq-layout mq="tablet">
        <mobilemenu>
        </mobilemenu>
    </mq-layout>
    <mq-layout class="row aligner-space-around no-margin" mq="md+">

      <div class="col-sm-5 no-margin">

        <router-link v-show="$store.state.navigation.show" tag="button" class="button" to="/people">People</router-link>
        <router-link v-show="$store.state.navigation.show" tag="button" class="button" to="/requests">Requests</router-link>
        <!-- <router-link v-show="$store.state.navigation.show" tag="button" class="button" to="/circles">Circles</router-link> -->


      </div>
      <div class="col-sm-2 aligner-space-around">
        <img v-if="$store.state.navigation.show " src="/static/img/logo.svg" height="50"/>
        <img v-else src="/static/img/logo.svg" />
      </div>
      <div class="col-sm-5">

        <router-link v-show="$store.state.navigation.show " tag="button" class="button  button-icon-only  float-right" to="/profile">
          <i class="fa fa-user" aria-hidden="true"></i> Profile</router-link>

      </div>
    </mq-layout>


  </nav>

    <router-view/>
  </div>
</template>

<script>
import mobilemenu from "@/components/mobilemenu.vue";
export default {
  name: "App",
  components: { mobilemenu: mobilemenu },
  data() {
    return {
      hasMounted: false
    };
  }
};
</script>


<style lang="scss" scoped>
.float-right {
  float: right;
}
</style>
