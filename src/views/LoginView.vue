<template>
  <NavBar>
     <template v-slot:footer>
           <FooT />
       </template>
       <template v-slot:login>
           <LoGin />
       </template>
   </NavBar>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 
 // Components
 
 import LoGin  from '@/components/LoGin.vue';
 import NavBar from '../components/NavBar.vue';
 import FooT from '@/components/FooTer.vue';
 
 
 
 export default defineComponent({
   name: 'LoGinn',
 
   components: {
    LoGin,
     NavBar,
     FooT,
   },
 });
  
</script>
