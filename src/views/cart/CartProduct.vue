<template>
  <div class="product-container" v-for="product in products" :key="product.id">
    <div>
      <img class="product-image" :src="product.imageUrl" alt="" />
    </div>

    <div class="card-price"><span>$</span> {{ product.price }}</div>
    <router-link class="remove-button" to="">
      <button>Remove</button>
    </router-link>
  </div>

  <div id="total-price">
    <h1>$ 99999</h1>
  </div>
</template>

<script>
import product from '../../data-seed.js'
export default {
  data() {
    return {
      products: product
    }
  }
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #41b883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}
#total-price {
  padding: 16px;
  text-align: right;
}

.product-container {
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 10px 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.product-image {
  height: 100px;
  max-width: 100px;
}

button {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  height: 35px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0 15px;
  cursor: pointer;
  transition: all 0.5s;
}
</style>
