<template>
  <div>
    <div id="page-wrap">
      <ItemCart
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        v-on:remove-item="removeFromCart($event)"
      />
      <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
      <button class="button-56">Checkout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { cartItems } from '../../data-seed'
import ItemCart from '../../components/ItemCart.vue'

export default {
  components: {
    ItemCart
  },
  data() {
    return {
      cartItems: []
    }
  },
  methods: {
    async removeFromCart(product) {
      await axios.delete(
        `https://shoppingcart-vue-server.up.railway.app/api/orders/delete/user/1/product/${product}`
      )
      let cart = this.cartItems
        .map(function (item) {
          return item.code
        })
        .indexOf(product)
      this.cartItems.splice(cart, 1)
    },
    async fetchProducts() {
      this.loading = true
      try {
        const response = await axios.get(
          'https://shoppingcart-vue-server.up.railway.app/api/orders/user/1'
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
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0)
    }
  },
  async created() {
    const result = await axios.get(
      'https://shoppingcart-vue-server.up.railway.app/api/orders/user/1'
    )
    let data = Object.assign(
      {},
      ...result.data.map((result) => ({
        user_id: result.user_id,
        cart_items: result.products
      }))
    )
    this.cartItems = data.cart_items
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

#page-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

#total-price {
  padding: 16px;
  text-align: right;
}
#checkout-button {
  width: 100%;
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
</style>
