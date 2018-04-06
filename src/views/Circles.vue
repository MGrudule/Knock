<template>

  <div class="page">

   <h1>{{ msg }}</h1>

  </div>

</template>



<script>
import axios from 'axios'
export default {
  name: 'Circles',
  data () {
    return {
      msg: 'Circle page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>




</style>
