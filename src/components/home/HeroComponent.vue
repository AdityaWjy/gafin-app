<template>
  <div class="hero">
    <!-- Desktop Hero Display -->

    <div class="d-none d-md-block">
      <div class="row mt-4 ml-3">
        <div class="col-md-6">
          <div class="flex d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <span class="blueOcean"> gafin lab: </span>
                <br />

                sepatu bersih percaya diri!
              </h1>

              <p class="capitalize fw-normal" style="font-size: 18px">
                tingkatkan kebersihan dengan
                <span class="blueOcean fw-semibold">gafin lab:</span>
                <br />
                dapat memberikan layanan terbaik <br />
                untuk
                <span class="blueOcean fw-semibold"> kebersihan sepatu</span>
                anda!
              </p>

              <button class="btn-custom">Get Our Service</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-self-center">
          <img src="/images/home/hero.png" width="450px" />
        </div>
      </div>
    </div>

    <!-- Mobile Hero Display -->

    <div class="d-sm-block d-md-none">
      <!-- Div display mobile -->
      <div class="row mt-5">
        <div
          class="col-md-6 mb-2 d-flex justify-content-center align-self-center mobile"
        >
          <img src="/images/home/hero.png" width="250px" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center container">
              <h2>
                <span class="blueOcean"> gafin lab: </span>
                <br />

                sepatu bersih percaya diri!
              </h2>

              <p class="capitalize fw-normal" style="font-size: 14px">
                tingkatkan kebersihan dengan
                <span class="blueOcean fw-semibold">gafin lab:</span>
                <br />
                dapat memberikan layanan terbaik <br />
                untuk
                <span class="blueOcean fw-semibold"> kebersihan sepatu</span>
                anda!
              </p>

              <button class="btn-custom-mobile">Get Our Service</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 70px;
}

h2 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 25px;
}

.mobile {
  margin-top: 60px;
}
</style>
