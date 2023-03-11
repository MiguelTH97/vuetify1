<template>
   <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">

            <v-btn  v-for="(item,index) in rutas" :key="index"
            class="boton text-white"
            block=""
            
            @click="url(item.ruta)"
            >
                <span>{{item.nombre}}</span>
            </v-btn >            
    
    
            
         
          
      </v-navigation-drawer>
  
      <v-app-bar class="bg-green">
        <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
  
        <v-toolbar-title>Aplicación</v-toolbar-title>
        <!-- <router-link to="./login"> -->
        <router-link to="./login" style="text-decoration: none;">
            <v-btn variant="outlined"  class="botonn" color="white"  >
  Login
</v-btn>
</router-link>
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-2">
          <slot name="main"></slot>
          <slot name="menuayuda"></slot>
          <slot name="login"></slot>
      </v-main>
    </v-app>

    <slot name="footer"></slot>
</div>
  </template>

  <style>
    .boton{
        color:rgb(245, 245, 245);
        background-color: green;
        margin-top: 4px;
        
    } 

    .botonn{
        border-color: white;
        margin-right: 5px;
    }
  
  </style>
  
  <script>
 
  export default {
    name: 'VBtn',
    data: ()=> ({drawer: false,
        rutas: [
            {nombre:'inicio', ruta:'/'},
            {nombre:'contactos', ruta:'/contactos'},
            {nombre:'ayuda', ruta:'/ayuda'},
            {nombre:'quienes somos?', ruta:'/quienes'},
        ]

    }),

    
    methods: {
        url(ruta){
            this.$router.push(ruta)
        }
    }
}


  </script>

 