import { createRouter, createWebHistory } from 'vue-router'
import productCom from '@/views/product/ProductCom.vue'
import DetailProduct from '@/views/product/DetailProduct.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: productCom
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailProduct
    }
  ]
})

export default router
