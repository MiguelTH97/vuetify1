<template>
 <NavBar>
    <template v-slot:footer>
          <FooT />
      </template>
      <template v-slot:main>
          <Helpv />
      </template>
      <template v-slot:menuayuda>
          <ConTac />
      </template>
  </NavBar>
</template>

<script>
import { defineComponent } from 'vue';

// Components

import ConTac from '@/components/ConTacto.vue';
import NavBar from '../components/NavBar.vue';
import FooT from '@/components/FooTer.vue';



export default defineComponent({
  name: 'ConTa',

  components: {
    ConTac,
    NavBar,
    FooT,
  },
});
</script>