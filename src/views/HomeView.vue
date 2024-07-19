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

    <!-- popular service -->
    <div class="container">
      <PopularService class="mb-5" />
    </div>

    <div class="container">
      <BannerContent class="mb-5" />
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
import PopularService from '@/components/home/PopularServiceComponent.vue'
import BannerContent from '@/components/BannerContent.vue'
export default {
  name: 'HomeView',
  components: {
    navbar,
    FooterComponent,
    HeroComponent,
    CheckStatus,
    PopularService,
    BannerContent
  }
}
</script>
