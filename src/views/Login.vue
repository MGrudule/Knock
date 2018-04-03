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
import axios from 'axios'
export default {

  name: 'Login',
  data () {
    return {
      msg: 'Login page',
      password: '',
      email: '',

    }
  },
  methods : {
    login(){


      axios.post('https://knockonthedoor.vps.codegorilla.nl/api/login',
        {email: this.email,
         password: this.password})

      .then(response => {
        console.log(response)
        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('name',response.data.data.name);
 
        this.$router.push(this.$route.query.redirect || '/profile');

      })
      .catch(error => {

console.log(error)

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>




</style>
