<template>
<div class="" @mouseover="toggleItem" @mouseleave="toggleFalse">

  <button :title="item.title" class="button button-icon" >
    <i class="fa " v-bind:class="{'fa-wrench': item.id == 1,'fa-suitcase': item.id == 2, 'fa-lightbulb-o': item.id == 3, }"></i>
     {{item.name.length}}
  </button>

  <transition name="fade">

    <ul class="toggle-item tags" v-show="toggled"  >
      <span class="skills-title">  {{item.title}} </span>

    <li class="tag" v-for="name in item.name" > {{name}} </li>

    </ul>
</transition>


</div>

</template>

<script>
export default {
  name: "Chart",
  props: ["item"],

  data: function() {
    return {
      toggled: false
    };
  },
  methods: {
    toggleItem: function() {
      this.toggled = true;
    },
    toggleFalse: function() {
      this.toggled = false;
    }
  }
};
</script>

<style lang="scss" >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.toggle-item {
  position: absolute;
  height: calc(100% - 100px);
  width: calc(100% - 40px);
  display: block;
  top: 20px;
  left:20px;
  padding:20px;
  text-align: center;
  .tag {
    margin:5px 5px;
    padding: 2px 10px;
    font-size: 11px;
    text-decoration: none;
    border-radius: 2px;
    line-height: 25px;
    height:auto;
    &:before, &:after {
      display: none;
    }
  }


}
</style>
