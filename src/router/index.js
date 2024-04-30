import { createRouter, createWebHashHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'search-view',
    component: SearchView
  },
  {
    path: '/tracked',
    name: 'tracked',
    component: () => import(/* webpackChunkName: "about" */ '../views/WeatherTrackingView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
