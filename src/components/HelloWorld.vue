<template>
  <div class="hello">
   <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  ul
    display: inline-flex
    li
      list-style: none
      a
        margin: 1em
        color: green
        &:hover
          color: pink



</style>
