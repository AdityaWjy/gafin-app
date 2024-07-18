<template>
  <div id="app">
    <router-view />

    <a
      class="whatsapp-logo"
      href="https://wa.me/+6285179642079"
      target="_blank"
    >
      <img src="./assets/images/Social/whatsapp.png" alt="WhatsApp Logo" />
    </a>
  </div>
</template>

<script>
// showToast() {
//       this.$toast.warning('Warning toast', {
//         timeout: 2000,
//         toastClassName: 'toast-warning'
//       })
//     }
</script>

<style>
/* import font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  font-family: 'Poppins', sans-serif;
}

.whatsapp-logo {
  position: fixed;
  bottom: 40px;
  right: 20px;
  cursor: pointer;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
