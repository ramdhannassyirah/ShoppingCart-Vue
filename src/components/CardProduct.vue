<template>
  <div class="card">
    <div class="card-img">
      <div class="img">
        <img :src="product.imageUrl" alt="" />
      </div>
    </div>
    <div class="card-title">{{ product.name }}</div>

    <hr class="card-divider" />
    <div class="card-footer">
      <div class="card-price"><span>$</span> {{ product.price }}</div>
      <div class="card-foot">
        <button class="button-56" role="button" @click="addToCart">Buy</button>
        <router-link class="card-btn" :to="{ name: 'detail', params: { id: product.id } }">
          <button>Detail</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],

  methods: {
    addToCart() {
      this.$router.push({ name: 'cart' })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');
.card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 230px;
  height: 300px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
  font-family:
    'Madimi One',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.card:last-child {
  justify-content: flex-end;
}

.card-foot {
  display: flex;
  gap: 5px;
  text-decoration: none;
  color: #323232;
}

.card-img {
  transition: all 0.5s;
  display: flex;
  justify-content: center;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 5%;
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--font-color);
}

.card-divider {
  width: 100%;
  border: 1px solid var(--main-color);
  border-radius: 50px;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-price {
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color);
}

.card-price span {
  font-size: 20px;
  font-weight: 500;
  color: var(--font-color-sub);
}

button {
  height: 35px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0 15px;
  cursor: pointer;
  transition: all 0.5s;
}

button:hover {
  background: var(--main-focus);
  color: var(--bg-color);
  border: 2px solid var(--main-focus);
}

.card-img:hover {
  transform: translateY(-3px);
}
</style>
