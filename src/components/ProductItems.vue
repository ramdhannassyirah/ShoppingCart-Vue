<template>
  <div class="product-item">
    <img :src="product.imageUrl" alt="" />
    <h3 class="product-name">{{ product.name }}</h3>

    <p class="product-description">{{ product.description }}</p>
    <div class="pembayaran">
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="{ name: 'detail', params: { id: product.id } }">
        <button>Detail</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

.deskripsi-produk {
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pembayaran {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  gap: 50px;
  padding: 12px 0;
}
img {
  height: 200px;
  width: 200px;
  border-radius: 5%;
}

a {
  width: 100%;
}

button {
  width: 100%;
  padding: 10px;
}
</style>
