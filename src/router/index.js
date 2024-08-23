import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ProductList
    },
    {
      path: '/categories/:category_name',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/cart',
      component: CartView
    }
  ]
})

export default router
