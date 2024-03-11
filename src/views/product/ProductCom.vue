<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <CardProduct v-for="product in products" :key="product.id" :product="product" />
      <div v-if="loading" class="loading-indicator">Loading...</div>
      <div v-if="error" class="error-message">
        Failed to fetch products. Please try again later.
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardProduct from '@/components/CardProduct.vue'

export default {
  components: {
    CardProduct
  },
  data() {
    return {
      products: [],
      loading: false,
      error: false
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      this.loading = true
      try {
        const response = await axios.get(
          'https://shoppingcart-vue-server.up.railway.app/api/products/'
        )
        this.products = response.data
        console.log(this.products)
      } catch (error) {
        console.error(error)
        this.error = true
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
#page-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-items: center;
  min-height: 100vh;
}

.loading-indicator,
.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
