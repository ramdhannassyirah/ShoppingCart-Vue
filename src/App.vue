<script>
import NavbarShop from './components/NavbarShop.vue'
export default {
  components: {
    NavbarShop
  }
}
</script>

<template>
  <NavbarShop />
  <router-link :to="{ name: 'product' }">Product</router-link>
  <RouterView />
</template>

<style scoped></style>
