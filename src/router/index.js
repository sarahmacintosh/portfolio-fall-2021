import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/water-rangers',
    component: () => import('../views/WaterRangers.vue')
  },
  {
    path: '/innovation-canada',
    component: () => import('../views/ISED.vue')
  },
  {
    path: '/esdc',
    component: () => import('../views/ESDC.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function(to) {
    if (to.hash)
      return {el: to.hash}
    else
      return { x: 0, y: 0 }
},
})

export default router
