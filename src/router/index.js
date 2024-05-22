import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
//import ShowcaseView from '../views/Showcase.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    /*
    {
      path: '/showcase',
      name: 'showcase',
      component: ShowcaseView
    }
    */
  ]
})

export default router
