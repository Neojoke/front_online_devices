/*
 * @Date: 2023-03-08 16:27:55
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-14 20:11:45
 * @FilePath: /tailwindcss_life/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/map',
      name: 'map',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/info/:deviceId',
      name: 'info',
      component: () => import('../views/InfoDetailView.vue'),
      props: true
    }
  ]
})

export default router
