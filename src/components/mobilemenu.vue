<template>
    <div class="text-center">

      <img :href="logo" height="50"/>

      <ul >
          <router-link v-show="$store.state.navigation.show " tag="li" class="button block-mobile" to="/people">People</router-link>
          <router-link v-show="$store.state.navigation.show " tag="li" class="button block-mobile" to="/requests">Requests</router-link>
          <router-link v-show="$store.state.navigation.show " tag="button" class="button button-outlined button-icon-only block-mobile  float-right" to="/profile">
            <i class="fa fa-user" aria-hidden="true"></i> Profile</router-link>
      </ul>

    </div>
</template>

<script>
export default {
components:{
  mobilemenu: 'mobilemenu'
},

data() {
  return {
  logo: require('@/assets/logo.svg')

}
}
}
</script>
