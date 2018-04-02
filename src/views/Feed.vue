<template>

  <div class="page">
    <div v-if="loading" class='loading-spinner'>
   <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

   <h1>{{ msg }}</h1>
   <div class="row">
     <transition-group class="wrapper" name="list">
       <message
        v-for="(message, index) in myJson"
        v-bind:message="message"
        v-bind:index="index"
        v-bind:key="message.id"
        ></message>


      </transition-group>

     </div>

  </div>

</template>

<script>
import axios from 'axios'
//import json from '../feed.json'
import message from "@/components/message.vue"
export default {
  name: 'Feed',
  components: { 'message' : message },
  data () {
    return {
      msg: 'Feed page',
      posts: [],
      search: '',
      msg: 'Post Feed',
      loading: false,
      myJson: [],
    }
  },
  mounted(){
        this.loading = true;
       axios.get("https://knockonthedoor.vps.codegorilla.nl/api/messages",
        {
        headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
        })

           .then((response)  =>  {
             this.loading = false;

             this.myJson = response.data.data;



           }, (error)  =>  {
             this.loading = false;
           })
         },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list-leave-active {
position: absolute;
opacity: 0;

}

.list-move {
  transition: all 0.5s;
}

  .wrapper {
  display: flex;
  flex-direction:row;
  max-width: 100%;
  flex-wrap: wrap;
  padding-top: 12px;
}




</style>
