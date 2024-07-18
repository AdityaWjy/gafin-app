<template>
  <div class="check-status">
    <div class="row">
      <div class="col-md-5">
        <div class="text-center text-md-start text-xl-start mt-4">
          <h1 class="capitalize">check status barang anda!</h1>
          <p class="capitalize">
            Periksa status sepatu anda denga
            <span class="blueOcean fw-bold">gafin lab</span>: dapat memberikan
            layanan terbaik untuk
            <span class="blueOcean fw-bold">kebersihan sepatu</span> anda!
          </p>
        </div>
      </div>

      <div
        class="col-md-4 ms-auto d-flex align-items-center justify-content-center"
      >
        <form class="form-control">
          <div class="form-input text-start mb-3">
            <label for="search" class="form-label capitalize fw-medium"
              >check status barang:</label
            >
            <input
              type="search"
              class="form-control py-2"
              id="search"
              placeholder="Number phone"
            />
          </div>
          <button type="submit" class="btn-custom" style="width: 100%">
            Check Status
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 60px;
}

p {
  font-size: 18px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 14px;
  }
}
</style>
