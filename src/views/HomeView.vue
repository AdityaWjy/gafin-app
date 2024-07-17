<template>
  <div class="home">
    <!-- navbar -->
    <navbar />

    <!-- hero -->
    <div class="container">
      <HeroComponent class="" style="margin-bottom: 500px" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'
import HeroComponent from '@/components/home/HeroComponent.vue'
export default {
  name: 'HomeView',
  components: {
    navbar,
    HeroComponent
  }
}
</script>
