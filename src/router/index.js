import { createRouter, createWebHistory } from 'vue-router'
import productCom from '@/views/product/ProductCom.vue'
import DetailProduct from '@/views/product/DetailProduct.vue'
import CartProduct from '@/views/cart/CartProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: productCom
    },
    {
      path: '/api/products/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailProduct
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartProduct
    }
  ]
})

export default router
