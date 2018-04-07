<template>
<div class="" @mouseover="toggleItem" @mouseleave="toggleFalse">

  <button :title="item.title" class="button button-icon" ><i class="fa " v-bind:class="{'fa-wrench': item.id == 1,'fa-suitcase': item.id == 2, 'fa-lightbulb-o': item.id == 3, }"></i>   {{item.names.length}}  </button>
 <transition name="fade">

  <ul class="toggle-item tags" v-show="toggled"  >
    {{item.title}}
    <hr>
  <li class="tag" v-for="name in item.names" > {{name}} </li>

</ul>
</transition>


</div>

</template>

<script>

export default {
    name: 'Chart',
    props:["item"],


    data:function() {
    return {
      toggled: false,
    }
  },
  methods: {
  toggleItem: function() {

    this.toggled = true;

  },
  toggleFalse: function() {

    this.toggled = false;

  }

  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
