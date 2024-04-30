import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tracked',
    name: 'tracked',
    component: () => import(/* webpackChunkName: "about" */ '../views/TeackedWeatherView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
