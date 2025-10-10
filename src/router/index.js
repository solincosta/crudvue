import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import MyCountry from '../views/MyCountry.vue'
import MyProduct from '../components/MyProduct.vue'

const routes = [
  {
    path: '/',
    name: 'shopping',
    component: ShoppingView
  },

  {
    path: '/myproduct/:id',
    name: 'myproduct',
    component: MyProduct
  },
  {
    path: '/home-old',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mycountry/:id',
    name: 'my-country',
    component: MyCountry
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
