<template>
  <div class="services">
    <!-- navbar  -->
    <navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar.vue'

export default {
  name: 'ServicesView',
  components: {
    navbar
  }
}
</script>
