<template>

  <div class="page">

   <h1>{{ msg }}</h1>
   <form class="login input-group col-md-offset-4 col-md-4" @submit.prevent="login">

              <div class="input input-with-icon full-width ">

              <input   class="input" required v-model="email" type="text" placeholder="email" />
             <i class="input-icon fa fa-user"></i> </div>

             <div class="input input-with-icon full-width ">
              <input class="input " required v-model="password" type="password" placeholder="Password"/>
              <i class="input-icon fa fa-key"></i>
            </div>
              <button class="button" type="submit">Login</button>
            </form>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>




</style>
