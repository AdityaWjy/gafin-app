<template>
  <div class="about">
    <!-- navbar start -->
    <navbar />
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
