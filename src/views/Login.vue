<template>

  <div class="row aligner-space-around">

   <form class="login input-group  col-md-4 text-center" @submit.prevent="login">

              <div class="input input-with-icon full-width ">

              <input  v-bind:class="[{ 'error ': errorLogin }, 'input' ]"  c required v-model="email" type="text" placeholder="email" />
             <i class="input-icon fa fa-user"></i> </div>

             <div class="input input-with-icon full-width form-field">
              <input   v-bind:class="[{ 'error ': errorLogin }, 'input' ]" required v-model="password" type="password" placeholder="Password"/>
              <i class="input-icon fa fa-key"></i>

            </div>
            <label  v-if="errorLogin" class="error"> E-mail or Password is incorrect <br> please try again </label>
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
      errorLogin: false,
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

        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('name',response.data.data.name);

        this.$router.push(this.$route.query.redirect || '/feed');

      })
      .catch(error => {

        if (error.response.status === 422) {


        this.errorLogin = true;
        }

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>




</style>
