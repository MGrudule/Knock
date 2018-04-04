<template>
  <div>
    <div class="msg-footer">
      <span class="box" v-for="item in message.categories" v-bind:style="{ background: item.color}" ></span>
    </div>
    <div class="text-small"> {{message.user.name}} comments{{message.comment_count}} id{{message.id}}   <span class="float-right">{{ message.date.date | moment("from") }}</span></div>
   <span class="text-big">{{ message.subject.name }} </span>
   <div class="msg-footer">
     <span class="box" v-for="item in message.categories" v-bind:style="{ background: item.color}" ></span>
   </div>
   {{message.body}}

      <div class=" tags"   >

      <span class="tag" v-for="item in message.tags" > {{item}} </span>
      <slot name="button">
        default body
      </slot>
    </div>



  </div>
</template>

<script>


export default {
   props: ['message','index'],
  name: 'message',
  data () {
    return {
      msg: 'Welcome to Your Vue.js '
    }
  }
}
</script>

<style lang="scss" scoped>
.float-right{
  float:right;
}
.msg-footer {
  clear:both;
  display: flex;
  height: 0.5em;
  width: 100%;
  align-content: stretch;
  .box {
    flex: 1 100%;

  }
}

  .card {


    display: inline-block;
  box-sizing: border-box;
   box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
   padding: 1em;
   transition: .25s background-color ease-in-out;
   transition: .25s transform ease-in-out;
transform: scale(1);

   &:hover  {
     transform: scale(1.02);
     background-color: rgba(255, 255, 255,0.1);


   }


 }

</style>
