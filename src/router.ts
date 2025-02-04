import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/how-it-works',
      name: 'howItWorks',
      component: () => import('./views/HowItWorks.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('./views/FAQ.vue')
    }
  ]
})

export default router
