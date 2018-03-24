<template>

  <div class="page">

   <h1>{{ msg }}</h1>
   <div class="row">
         <div v-for="(post, index) in posts" :key="post.id" class="col-md-4 ">
        <h5> {{post.title}} </h5>
        <hr>

        <div> {{post.body}} </div>
        <br>
         </div>

     </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Feed',
  data () {
    return {
      msg: 'Feed page',
      posts: [],
    }
  },
  mounted(){

   axios.get("https://jsonplaceholder.typicode.com/posts",
    )

       .then((response)  =>  {
         console.log(response)
         this.posts = response.data;

       }, (error)  =>  {
         this.loading = false;
       })
     },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>




</style>
