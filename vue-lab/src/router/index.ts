import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    {
      path: '/',
      name: 'splash',
      component: () => import('../views/SplashPage.vue')
    },


    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    },


    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    }


  ],
})

export default router
