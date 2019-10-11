<template>

  <div class="page">
    <div v-if="loading" class='loading-spinner'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="row category-selector form-field">

      <div class="col-md-2">
      <div class="radio block-mobile">
        <input type="radio" id="0" value="" v-model="selectedCategories" > <label v-bind:for="0"> all </label>
      </div>
    </div>
      <div  v-for="(category, index) in categories" :key="category.id" class="col-md-2" >
        <div class="radio"  >
          <input type="radio" :id="category.id" :value="category.name" v-model="selectedCategories" >
          <label :style="'background:'+category.color" v-bind:for="category.id" > {{category.name}}  </label>
        </div>
      </div>

    </div>
    <hr>
    <div class="row">
      <div class="col-sm-6">
        <div class="input input-with-icon ">
          <input type="search" v-model="search" placeholder="Search for resource.." >
          <i class="input-icon fa fa-search"></i>
        </div>

        <span class="text-gray"> {{searchList.length}}  <i class=" fa fa-users"></i> </span>
      </div>
      <div class="col-sm-6 content-end">
      <button class="button button-white button-icon" id="show-modal" @click="showModal = true"> <i class="fa fa-pencil" aria-hidden="true"></i> Post Message</button>
      </div>
    </div>



    <div class="row">
      <transition-group class="wrapper" name="list">
        <message  class=" list-item  col-md-4 col-sm-6  card"
        v-for="(message, index) in searchList"
        v-bind:message="message"
        v-bind:index="index"
        v-bind:key="message.id"


        >
             <button  slot="button"   class="button button-big button-icon"
             @click="showMessage(message, index)">
             <i class="fa fa-comments" ></i>
             {{message.comment_count}}
           </button>
      </message>


      </transition-group>

      <modal v-if="showModalMsg" @close="showModalMsg = false" >
        <div slot="body">

          <message v-bind:message="messageModal"></message>
          <br>
          <h5 class="uppercase"> comments </h5>
          <hr>
        <transition-group name="list" tag="div" class="row">

          <div class=" comment list-item col-md-12 form-field" v-for="posted_comment in showMsgComments" :key="posted_comment.id" >

            <div class="" >
              <strong>  {{posted_comment.user.name}} </strong>
              {{ posted_comment.date.date | moment("from", "now") }}

            </div>

            <div v-html="posted_comment.comment"></div>

          </div>
        </transition-group>

      </div>

          <form slot="footer" class="edit text-center" @submit.prevent="postComment(messageModal.id, comment)" >

            <div class="textarea form-field">
              <textarea required v-model="comment" type="text" placeholder="Post comment"> </textarea>

            </div>

            <button class="button" type="submit">Post Comment</button>
            </form>

      </modal>
    </div>


    <modal v-if="showModal" @close="showModal = false" >

      <form  slot="body" class="edit" @submit.prevent="postMessage(post_message)">
            <h5 class="uppercase form-field" slot="header">category</h5>

            <div class="row form-field">
              <div v-for="(category_box, index) in categories_checkbox" :key="category_box.id" class="checkbox ">
                <input   type="checkbox" v-bind:id="category_box.id + 'box'" v-bind:value="category_box.id" v-model="categoriesSelected"  >
                <label   v-bind:for="category_box.id + 'box'"> {{category_box.name}} </label>
              </div>
            </div>

            <h5 class="uppercase form-field" slot="header">Subject</h5>

            <div class="form-field">
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
          </div>

          <div class="form-field">
            <label class="label" for="message">Message</label>
            <div class="textarea">
              <textarea  v-on:keyup="countdown" required v-model="post_message.body" type="text" placeholder="Your message"> </textarea>
              <p class='fright text-small' v-bind:class="{'error': hasError }">{{remainingCount}}</p>
            </div>

          </div>

            <label class="label"> Tags</label>
            <input-tag :tags.sync="tags"></input-tag>

            <button class="button" type="submit">Submit</button>

      </form>

    </modal>

  </div>

</template>

<script>
import axios from "axios";
import json from '../feed.json'
import message from "@/components/message.vue";
import modal from "@/components/modal.vue";
export default {
  name: "Requests",
  components: { message: message, modal: modal },
  data() {
    return {
      comment: "",
      showMsgComments: [],
      showModalMsg: false,
      maxCount: 250,
      remainingCount: 250,
      post_message: [],
      msg: "Feed page",
      posts: [],
      msg: "Post Feed",
      loading: false,
      myJson: json,
      showModal: false,
      hasError: false,
      categories: [  {
            id:1,
            name:"Art",
            color:"#aebd38"
         },
         {
            id:2,
            name:"Music",
            color:"#38aebd"
         },
         {
            id:3,
            name:"Business",
            color:"#bd38ae"
         },
         {
            id:4,
            name:"ICT",
            color:"#ffee4c"
         }],

      selectedCategories: "",
      categories_checkbox: "",
      categoriesSelected: [],
      search: "",
      messageModal: [],
      tags: []
    };
  },
  computed: {
    searchList() {
      return this.filteredList.filter(object => {
        return (
          object.body.toLowerCase().includes(this.search.toLowerCase()) ||
          object.tags.some(item => {
            return item.toLowerCase().includes(this.search.toLowerCase());
          })
        );
      });
    },
    filteredList() {
      return this.myJson.filter(object => {
        return object.category.some(item => {
          return item.name
            .toLowerCase()
            .includes(this.selectedCategories.toLowerCase());
        });
      });
    }
  },
  mounted() {

  },

  methods: {
    postMessage: function(post_message) {
      this.loading = true;
      axios
        .post(
          "url",
          {
            body: post_message.body,
            subject_id: post_message.subject,
            categories: this.categoriesSelected,
            tags: this.tags
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("api_token")
            }
          }
        )

        .then(
          response => {
            this.loading = false;
            this.post_message = "";
            this.showModal = false;
            this.maxCount = 250;
            this.remainingCount = 250;

            this.myJson.unshift(response.data.data);
          },
          error => {
            this.loading = false;
          }
        );
    },
    countdown: function() {
      this.remainingCount = this.maxCount - this.post_message.body.length;
      this.hasError = this.remainingCount < 0;
    },

    showMessage: function(message, index) {
      this.messageModal = message;

      this.loading = true;
      axios
        .get(
          "url" +
            message.id +
            "/comments",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("api_token")
            }
          }
        )

        .then(
          response => {
            this.loading = false;
            this.showModalMsg = true;
            this.showMsgComments = response.data.data;
            this.comment = "";
          },
          error => {
            this.loading = false;
          }
        );
    },
    postComment: function(message, comment) {
      axios
        .post(
          "url",
          {
            message_id: message,
            comment: this.comment
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("api_token")
            }
          }
        )

        .then(
          response => {
            this.loading = false;
            this.showMsgComments.push(response.data.data);
          },
          error => {
            this.loading = false;
          }
        );
    }
  }
};
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
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  padding-top: 12px;
}
</style>
