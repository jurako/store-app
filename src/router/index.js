import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import OrdersView from '../views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductList
    },
    {
      path: '/categories/:category_name',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView,
      beforeEnter: (to, from) => {
        
      }
    }
  ]
})

router.beforeEach((to, from) => {
  const storeUser = useUserStore();

  console.log(storeUser.isAuthenticated);
})

export default router
