import { createRouter, createWebHistory } from 'vue-router'
import InicioNav from '../views/Inicio.vue'
import AyudaView from '../views/AyudaA.vue'
import QuienView from '../views/QuienView.vue'
import LoginView from '../views/LoginView.vue'
import ContactosView from '../views/ContactosView.vue'


const routes = [

  {
    path: '/',
    name: 'inicio',
    component: InicioNav
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: ContactosView
  },
  {
    path: '/ayuda',
    name: 'ayuda',
    component: AyudaView
  },
  {
    path: '/quienes',
    name: 'quienes',
    component: QuienView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
