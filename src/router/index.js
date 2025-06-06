import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CardShowcase from '../views/CardShowcase.vue'
import Armoury from '../views/Armoury.vue'
import ChivalryArmoury from '../views/ChivalryArmoury.vue'
import PageNotFound from '../views/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return {top: 0};
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: CardShowcase
    },
    {
      path: '/armoury',
      name: 'armoury',
      component: Armoury
    },
    {
      path: '/armoury/chiv2',
      name: 'chiv2armoury',
      component: ChivalryArmoury
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
     },
  ]
})

export default router
