<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <CardProduct v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
<script>
import product from '../../data-seed.js'

import CardProduct from '@/components/CardProduct.vue'
export default {
  components: {
    CardProduct
  },
  data() {
    return {
      products: product
    }
  }
}
</script>
<style scoped>
#page-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
}
</style>
