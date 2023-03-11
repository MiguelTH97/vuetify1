

<template>
  <NavBar>
    <template v-slot:footer>
          <FooT />
      </template>
      <template v-slot:main>
          <Helpv />
      </template>
      <template v-slot:menuayuda>
          <MenuAyu />
      </template>
  </NavBar>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import FooT from '@/components/FooTer.vue';
import Helpv from '@/components/HelpV.vue';
import MenuAyu from '@/components/MenuAyuda.vue';


export default defineComponent({
  name: 'AyuDa',

  components: {
    NavBar,
    FooT,
    Helpv,
    MenuAyu,
  },
});
</script>
