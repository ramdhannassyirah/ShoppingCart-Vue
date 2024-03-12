<template>
  <div class="product-container">
    <div class="details">
      <img
        :src="`https://shoppingcart-vue-server.up.railway.app${item.imageUrl}`"
        alt=""
        class="product-image"
      />
      <div class="details-wrap">
        <h3>{{ item.name }}</h3>
        <p>Rp{{ item.price }}</p>
      </div>
    </div>
    <button class="remove-button" @click="$emit('remove-item', item.code)">Remove</button>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.product-container {
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 10px 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.details {
  padding: 10px;
  text-align: center;
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
