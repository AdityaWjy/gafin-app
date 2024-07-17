<template>
  <div class="about container">
    <!-- navbar start -->
    <navbar />
    <!-- navbar end -->

    <iframe
      class="full-screen-iframe"
      src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
      autoplay
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'

export default {
  name: 'HomeView',
  components: {
    navbar
  }
}
</script>

<style>
.full-screen-iframe {
  width: 100%;
  height: 100vh; /* 100 viewport height */
}
</style>
