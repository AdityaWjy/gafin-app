<template>
  <div class="card-product">
    <div
      class="card p-2 border-dark d-flex justify-content-center align-items-center"
    >
      <img
        :src="'images/services/' + product.gambar"
        class="card-img-top image-service rounded mb-"
        alt="Servies"
      />
      <div class="mt-3">
        <h5 class="card-title mb-3">{{ product.nama }}</h5>

        <router-link to="/" class="btn btn-dark px-5 px-xl-5">
          Explore
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product']
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
}

.card {
  width: fit-content;
}

@media (max-width: 500px) {
  .card {
    width: 10rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  h5 {
    font-size: 15px;
  }

  .btn {
    font-size: 13px;
  }
}
</style>
