<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <ProductItems v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
<script>
import product from '../../data-seed.js'
import ProductItems from '@/components/ProductItems.vue'
export default {
  components: {
    ProductItems
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
