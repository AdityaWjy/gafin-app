<template>
  <div class="banner-content">
    <div class="banner rounded mt-5 text-center">
      <h1 class="banner-content capitalize text-white fw-bold">
        Are you ready to Get <br />Clean With Care?
      </h1>

      <button class="btn btn-explore mt-3 mt-xl-5">Explore</button>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-color: #4444bb;
  padding-top: 100px;
  padding-bottom: 100px;
}

.banner .banner-content {
  font-size: 50px;
}

.btn-explore {
  background-color: #ffffff;
  border: 2px solid #4444bb;
  border-radius: 8px;
  font-weight: 700;
  font-size: large;
  color: #4444bb;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 25px;
  padding-right: 25px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

@media (max-width: 500px) {
  .banner {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .banner .banner-content {
    font-size: 20px; /* Ukuran font untuk mobile */
  }

  .btn-explore {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: smaller; /* Ukuran font untuk mobile */
  }
}
</style>
