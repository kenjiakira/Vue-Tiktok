import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/how-it-works',
      name: 'HowItWorks',
      component: () => import('../views/HowItWorks.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
