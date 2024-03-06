<template>
  <div id="total-price">
    <h1 class="a">Total Price :</h1>
    <h1 class="b">$ 99999</h1>
  </div>
  <div class="product-container" v-for="product in products" :key="product.id">
    <div>
      <img class="product-image" :src="product.imageUrl" alt="" />
    </div>

    <div class="card-price"><span>$</span> {{ product.price }}</div>
    <router-link class="remove-button" to="">
      <button @click="removeProduct(product.id)">Remove</button>
    </router-link>
  </div>
</template>

<script>
import product from '../../data-seed.js'
export default {
  data() {
    return {
      products: product
    }
  },
  methods: {
    removeProduct(id) {
      this.products = this.products.filter((product) => product.id !== id)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

h1 {
  font-family: 'Madimi One', sans-serif;
}

h1.a {
  font-size: 20px;
  margin: 0;
  margin-top: 16px;
  padding: 10px;
}

h1.b {
  font-size: 24px;
  margin: 0;
  margin-top: 16px;
  padding: 10px;
}
#total-price {
  padding: 16px;
  text-align: right;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #41b883;
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
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  height: 100px;
  max-width: 100px;
  border-radius: 10px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
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
