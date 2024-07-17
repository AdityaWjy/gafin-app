<template>
  <div class="about container">
    <!-- navbar start -->
    <navbar />
    <!-- navbar end -->

    <iframe
      class="full-screen-iframe"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=eVG8xS6G9RyMemjG&amp;controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      autoplay
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
