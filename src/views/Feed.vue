<template>

  <div class="page">
    <div v-if="loading" class='loading-spinner'>
   <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

   <h1>{{ msg }}</h1>
   <div class="input input-with-icon ">
         <input type="search" v-model="search" placeholder="Search for resource.." >
         <i class="input-icon fa fa-search"></i>
    </div> results matching your selection {{searchList.length}}


    <div class="row">

      <div class="radio">
        <input type="radio" id="0" value="" v-model="checkedNames" > <label v-bind:for="0"> all </label>
      </div>
      <div  v-for="(category, index) in categories" :key="category.id" >
        <div class="radio" :style="'color:'+category.color" >
          <input type="radio" :id="category.id" :value="category.name" v-model="checkedNames" > <label :style="'border: 2px solid'+category.color" v-bind:for="category.id" style="font-weight:900; text-transform:uppercase;padding:0.2em"> {{category.name}} </label>
        </div>
      </div>
    </div>

   <button class="button button-transparent" id="show-modal" @click="showModal = true"> Post Message</button>

   <div class="row">
     <transition-group class="wrapper" name="list">
       <message  class=" list-item  col-md-4 col-sm-6  card"
        v-for="(message, index) in searchList"
        v-bind:message="message"
        v-bind:index="index"
        v-bind:key="message.id"


        > <button  slot="button"  class="button button-transparent" @click="showMessage(message, index)"> Open </button> </message>


      </transition-group>
<modal v-if="showModalMsg" @close="showModalMsg = false" > <div slot="body"> <message

 v-bind:message="messageModal"></message>
 <br>
<h5> comments </h5>
                     <!-- <div class="comment list-item"  >

                       <div class="header" >
                         <strong>  {{showMsgData.user.name}} </strong>


                       </div>

                        <div v-html="showMsgData.comment"></div>

                      </div> -->
                      <transition-group name="list" tag="div" class="row">
                    <div class=" comment list-item" v-for="posted_comment in showMsgComments" :key="posted_comment.id" >

                      <div class="header" >
                        <strong>  {{posted_comment.user.name}} </strong>
                        {{ posted_comment.date.date | moment("from", "now") }}

                      </div>

                       <div v-html="posted_comment.comment"></div>

                     </div>
             </transition-group>



  </div>
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
      showMsgCOmments: [],
      showModalMsg: false,
      maxCount: 250,
      remainingCount: 250,
      post_message: [],
      msg: 'Feed page',
      posts: [],
      msg: 'Post Feed',
      loading: false,
      myJson: [],
      showModal: false,
      hasError: false,
      categories: [],
      checkedNames: '',
      search: '',
      messageModal:[],

    }
  },
  computed: {

    searchList() {
      return this.filteredList.filter(object => {
        return object.body.toLowerCase().includes(this.search.toLowerCase()) ||  object.tags.some((item) => {

            return item.toLowerCase().includes(this.search.toLowerCase())

        })

      })
    },
    filteredList() {
      return this.myJson.filter(object => {
        return object.categories.some((item) => {

          return item.name.toLowerCase().includes(this.checkedNames.toLowerCase())
          })
        })
    },
  },
  mounted(){
        this.loading = true;
        {axios.get("https://knockonthedoor.vps.codegorilla.nl/api/messages",
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



          })}
          { axios.get("https://knockonthedoor.vps.codegorilla.nl/api/categories",
            {
            headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
            })

               .then((response)  =>  {

                 this.categories = response.data.data;

               }, (error)  =>  {
                 this.loading = false;
               })}

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

      showMessage: function (message, index) {

        this.messageModal = message;

       this.loading = true;
       axios.get("https://knockonthedoor.vps.codegorilla.nl/api/messages/" + message.id + "/comments",
       {
         headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
       })

       .then((response)  =>  {

         this.loading = false;
         this.showModalMsg = true;
         this.showMsgComments = response.data.data;




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
