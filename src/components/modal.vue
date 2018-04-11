<template>
  <transition name="modal">
     <div class="modal-mask">
       <div class="modal-wrapper">

         <div class="modal-container">
           <button class="text-big fright button button-transparent" @click="$emit('close')" style="margin-top:-1em;margin-right:-1em;">
             X
           </button>
           <div class="modal-header ">
             <slot name="header">

             </slot>
           </div>

           <div class="modal-body">
             <slot name="body">

             </slot>
           </div>

           <div class="modal-footer">
             <slot name="footer">


             </slot>
           </div>
         </div>
       </div>
     </div>
   </transition>
</template>

<script>
export default {
  name: "modal",

};
</script>
