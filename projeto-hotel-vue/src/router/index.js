import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/hotel',
    name: 'hotel',
 
    component: () => import('../views/HotelView.vue')
  },
  {
    path: '/acomodacoes',
    name: 'acomodacoes',
 
    component: () => import('../views/AcomodacoesView.vue')
  }, {
    path: '/Contatos',
    name: 'Contatos',
 
    component: () => import('../views/ContatosView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
 
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/Cadastrese',
    name: 'Cadastrese',
 
    component: () => import('../views/CadastreSe.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
