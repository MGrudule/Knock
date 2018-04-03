<template>

  <div class="page">
    <div v-if="loading" class='loading-spinner'>
   <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

   <h1>{{ msg }}</h1>

   <button class="button button-transparent" id="show-modal" @click="showModal = true"> Post Message</button>

   <div class="row">
     <transition-group class="wrapper" name="list">
       <message
        v-for="(message, index) in myJson"
        v-bind:message="message"
        v-bind:index="index"
        v-bind:key="message.id"


        > <button  slot="button"  class="button button-transparent" @click="showMessage(message.id, index)"> Open </button> </message>


      </transition-group>
<modal v-if="showModalMsg" @close="showModalMsg = false" v-model="showMsgData"> <p slot="body"> hi {{showMsgData}} </p>
  <form slot="footer" class="edit" @submit.prevent="postComment(comment)">

  <div class="textarea">
       <textarea required v-model="comment" type="text" placeholder="Post comment"> </textarea>

     </div>
     {{comment}}
     <button class="button" type="submit">Submit</button>
   </form></modal>
     </div>


     <modal v-if="showModal" @close="showModal = false" >

       <h3 slot="header">Post request</h3>
       <form  slot="body" class="edit" @submit.prevent="postMessage(post_message)">

             <div class="radio">
              <input id="subject1" name="subject" type="radio" value="1" required v-model="post_message.subject"/>
              <label for="subject1" >Do you have?</label>
            </div>

              <div class="radio">
               <input id="subject2" name="subject" type="radio" value="2" required v-model="post_message.subject"/>
               <label for="subject2" >Can you help?</label>
             </div>

             <div class="radio">
              <input id="subject3" name="subject" type="radio" value="3" required v-model="post_message.subject"/>
              <label for="subject3" >Do you know?</label>
            </div>

           <label class="label" for="message">Request</label>


         <div class="textarea">
         <textarea  v-on:keyup="countdown" required v-model="post_message.body" type="text" placeholder="Your message"> </textarea>
          <p class='fright text-small' v-bind:class="{'error': hasError }">{{remainingCount}}</p>
         </div>


       <button class="button" type="submit">Submit</button>

      </form>

     </modal>

  </div>

</template>

<script>
import axios from 'axios'
//import json from '../feed.json'
import message from "@/components/message.vue"
import modal from "@/components/modal.vue"
export default {
  name: 'Feed',
  components: { 'message' : message, 'modal' : modal },
  data () {
    return {
      comment: '',
      showMsgData: [],
      showModalMsg: false,
      maxCount: 250,
      remainingCount: 250,
      post_message: [],
      msg: 'Feed page',
      posts: [],
      search: '',
      msg: 'Post Feed',
      loading: false,
      myJson: [],
      showModal: false,
      hasError: false
    }
  },
  mounted(){
        this.loading = true;
        axios.get("https://knockonthedoor.vps.codegorilla.nl/api/messages",
        {
        headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
        })

           .then((response)  =>  {
             console.log("response", response);
             this.loading = false;
             this.myJson = response.data.data;


           }, (error)  =>  {

            this.loading = false;
            if (error.response.status === 401) {


            this.$router.push(this.$route.query.redirect || '/');
            }



           })

         },

  methods: {
    postMessage: function (post_message) {
    this.loading = true;
      axios.post("https://knockonthedoor.vps.codegorilla.nl/api/messages",
          { data: { body: post_message.body,
            subject: { id: post_message.subject },
            user: { id: 2 } } },
          {
              headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
        })

        .then((response)  =>  {
          console.log(response.data.data)
          this.loading = false;
           this.post_message = '';
           this.showModal = false;
           this.maxCount = 250;
           this.remainingCount = 250;

          this.myJson.unshift(response.data.data)
        }, (error)  =>  {
          this.loading = false;
        })
      },
      countdown: function() {
      this.remainingCount = this.maxCount - this.post_message.body.length;
      this.hasError = this.remainingCount < 0;
    },

      showMessage: function (index) {
        


       this.loading = true;
       axios.get("https://knockonthedoor.vps.codegorilla.nl/api/messages/" + index,
       {
         headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
       })

       .then((response)  =>  {
         this.loading = false;
         this.showModalMsg = true;
         this.showMsgData = response.data.data;




       }, (error)  =>  {
         this.loading = false;
       })

    },
    postComment: function (comment) {


    axios.post("https://knockonthedoor.vps.codegorilla.nl/api/comments/" + comment.id,
  { message_id: this.$route.params.id,
   content: comment.content},{
  headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
  })

    .then((response)  =>  {

      this.loading = false;

    }, (error)  =>  {
      this.loading = false;
    })
  },
  }
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
