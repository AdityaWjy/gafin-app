<template>
  <div class="home">
    <!-- navbar -->
    <navbar />

    <!-- hero -->
    <div class="container">
      <HeroComponent class="mb-5" />
    </div>

    <!-- check status -->
    <div class="container">
      <CheckStatus class="mb-5"></CheckStatus>
    </div>

    <!-- footer -->
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'
import CheckStatus from '@/components/home/CheckStatusComponent.vue'
import HeroComponent from '@/components/home/HeroComponent.vue'
export default {
  name: 'HomeView',
  components: {
    navbar,
    FooterComponent,
    HeroComponent,
    CheckStatus
  }
}
</script>
