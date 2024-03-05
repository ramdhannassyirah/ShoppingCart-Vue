<template>
  <div class="navbar">
    <div class="">
      <h1>Logo</h1>
    </div>
    <div class="">
      <router-link class="card-btn" to="">
        <button>Cart</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
