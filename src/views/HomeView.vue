<template>
  <div class="home">
    <!-- navbar -->
    <navbar />

    <!-- hero -->
    <div class="container">
      <HeroComponent class="mb-5" />
    </div>

    <!-- footer -->
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'
import HeroComponent from '@/components/home/HeroComponent.vue'
export default {
  name: 'HomeView',
  components: {
    navbar,
    FooterComponent,
    HeroComponent
  }
}
</script>
