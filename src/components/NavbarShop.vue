<template>
  <div class="navbar">
    <div class="">
      <h1>Shopping Cart</h1>
    </div>
    <div class="list">
      <router-link class="card-btn" :to="{ name: 'product' }">
        <button>Product</button>
      </router-link>
      <router-link class="card-btn" :to="{ name: 'cart' }">
        <button>Cart</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Madimi One';
  padding: 20px;
  gap: 10px;
}

.list {
  display: flex;
  gap: 10px;
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
