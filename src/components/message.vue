<template>
  <div>
    <div class="">
      <span class="box" v-for="item in message.categories" v-bind:style="{ background: item.color}" ></span>
    </div>
    <div class=""> {{message.user.name}}   <span class="float-right">{{ message.date.date | moment("from") }}</span></div>
   <span class="text-medium">{{ message.subject.name }} </span>
   <div class="msg-footer">
     <span class="box" v-for="item in message.categories" v-bind:style="{ background: item.color}" ></span>
   </div>
   <div class="msg-body">
   {{message.body}}
  </div>

<div class="msgFooter  row " >

      <div class=" tags col-md-12 "   >

      <span class="tag" v-for="item in message.tags" > {{item}} </span>

    </div>
<div class="col-xs-12 content-end">
    <slot name="button" >

    </slot>

</div>

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


 .msg-body {
   min-height: 6em;
 }

 }

</style>
