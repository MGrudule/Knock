<template>
<div class="inline">
  <div class="toggle-item tags" v-show="toggled"  >
  <span class="tag" v-for="name in item.names" > {{name}} </span>
  </div>

    <button class="button button-small" @mouseover="toggleItem"  @mouseleave="mouseOut"> {{item.title}} | {{item.names.length}} </button>


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
    this.toggled = !this.toggled;

  },
  mouseOut:function(){
                this.toggled = !this.toggled;
                }
  },
    computed: {

    }
  }
</script>

<style lang="scss">
.inline{
  display:inline-block;
}
$color:  rgb(44, 62, 80);
.toggle-item {
  background: transparentize($color, 0.2);
  color: black;
  padding: 20px;
  height: calc(100% - 100px);
  width: calc(100% - 50% / 3);
  position: absolute;
  left: 40px;
 bottom: 50px;
  z-index: 10;


  border-radius: 2em;


}

</style>
