<template>
  <div class="popular-service">
    <div class="container text-center">
      <div class="d-xl-flex justify-content-between align-items-center">
        <!-- text content -->

        <div class="content col-md-4">
          <div class="text-center text-md-start mt-4 col-md-8">
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-start"
            >
              <div
                class="line bg-dark mb-2 me-2 d-none d-md-block"
                style="width: 40px; padding-top: 3px"
              ></div>
              <div>
                <h6 class="fw-semibold">Best Service</h6>
              </div>
            </div>

            <h1 class="capitalize blueOcean">Most Popular Service</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button class="btn btn-dark px-5 py-2">Explore</button>
          </div>
        </div>

        <div class="row row-card mt-4">
          <div
            class="col-5 col-md-6 col-lg-3"
            v-for="product in data"
            :key="product.id"
          >
            <CardProduct :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// using data json, just for create UI

import axios from 'axios'
import data from '@/data.json'
import CardProduct from '@/components/CardProduct.vue'
import { getBestProducts } from '@/services/api.js'

export default {
  data() {
    return {
      products: [],
      data
    }
  },
  components: {
    CardProduct
  },

  methods: {
    setProducts(data) {
      this.products = data
    },

    welcomeAlert() {
      this.$toast.info('Selamat datang di Gafin Lab!', {
        timeout: 2000,
        toastClassName: 'toast-info'
      })
    },

    async getBestProduct() {
      try {
        const response = await axios.get(getBestProducts)
        // handle success
        this.setProducts(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  },

  mounted() {
    this.getBestProduct(), this.welcomeAlert()
  }
}
</script>

<style scoped>
@media (max-width: 500px) {
  .row-card {
    column-gap: 25px;
    row-gap: 15px;
  }
}
</style>
