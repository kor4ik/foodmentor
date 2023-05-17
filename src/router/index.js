import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import TargetPage from '@/views/TargetPage.vue'
import MealCard from '@/components/MealCard.vue'
import MenuCompose from '@/views/MenuCompose.vue'

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/target',
    name: 'TargetPage',
    component: TargetPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'MealCard',
    component: MealCard
  },
  {
    path: '/compose',
    name: 'MenuCompose',
    component: MenuCompose
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
