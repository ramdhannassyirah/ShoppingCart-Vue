<template>
  <div>
    <div id="page-wrap">
      <div id="img-wrap">
        <img :src="`https://shoppingcart-vue-server.up.railway.app${product.imageUrl}`" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <p>Average rating: {{ product.averageRating }}</p>
        <p>{{ product.description }}</p>
        <p class="price">${{ product.price }}</p>
        <button class="button-56" role="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
// import product from '../../data-seed.js'
import axios from 'axios'
export default {
  data() {
    return {
      product: {}
    }
  },
  async created() {
    const code = this.$route.params.id
    const result = await axios.get(
      `https://shoppingcart-vue-server.up.railway.app/api/products/${code}`
    )
    this.product = result.data
  },
  methods: {
    addToCart() {
      const requestData = {
        product: this.product.code
      }

      axios
        .post(
          'https://shoppingcart-vue-server.up.railway.app/api/orders/update/user/1',
          requestData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(() => {
          console.log('Product added to cart successfully')

          this.$router.push({ name: 'cart' })
        })
        .catch((error) => {
          console.error('Error adding product to cart:', error.message)
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

#page-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 20px;
}

#product-details {
  display: flex;
  flex-direction: column;
  font-family: 'Madimi One', sans-serif;
  gap: 20px;
}

.price {
  font-weight: bold;
  font-size: 20px;
}

.card-img {
  transition: all 0.5s;
  display: flex;
  justify-content: center;
}

.card-img:hover {
  transform: translateY(-3px);
}

img {
  height: 400px;
  width: 400px;
  border-radius: 5%;
}

.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: 'Madimi One', Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: '';
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform 0.2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (max-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
  #page-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
