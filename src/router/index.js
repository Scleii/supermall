import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/home/Home'


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ 'views/home/Home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import( 'views/category/Category')
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: () => import('views/shoppingcart/ShoppingCart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
