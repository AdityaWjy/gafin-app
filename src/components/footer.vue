<template>
  <div class="footer-component">
    <!-- Footer -->
    <footer
      class="text-center text-lg-start text-white"
      style="background-color: #262626"
    >
      <!-- Section: Links  -->
      <section class="py-5">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
              <!-- Content -->
              <router-link to="/">
                <img :src="logoSrc" alt="Gafin Labs" class="w-75" />
              </router-link>
              <p>
                Gafin Shoes merupakan toko cuci sepatu yang memberikan pelayanan
                terbaik untuk Anda.
              </p>

              <!-- Centering icons on mobile -->
              <div
                class="d-flex justify-content-center justify-content-xl-start"
              >
                <a
                  href="https://youtu.be/dQw4w9WgXcQ?si=GQzq-ADwD2Efqz9q"
                  target="_blank"
                >
                  <img
                    src="../assets/images/Social/shopee.png"
                    alt=""
                    class="me-4"
                  />
                </a>

                <a
                  href="https://maps.app.goo.gl/sjd1hZLnccvGJ5u27"
                  target="_blank"
                >
                  <img
                    src="../assets/images/Social/maps.png"
                    alt=""
                    class="me-4"
                  />
                </a>

                <a href="https://wa.me/+6285779642079" target="_blank">
                  <img
                    src="../assets/images/Social/whatsapp.png"
                    alt="Whatsapp"
                  />
                </a>
              </div>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div
              class="col-md-3 col-lg-2 col-xl-2 mx-auto ms-0 ms-xl-5 mb-4"
              style="margin-top: 40px"
            >
              <!-- Links -->
              <h6 class="text-uppercase fw-semibold mb-4">MENU</h6>
              <p>
                <router-link
                  to="/"
                  class="nav-link fw-normal"
                  aria-current="page"
                  >Home</router-link
                >
              </p>

              <p>
                <router-link
                  to="/about"
                  class="nav-link fw-normal"
                  aria-current="page"
                  >About</router-link
                >
              </p>

              <p>
                <router-link
                  to="/"
                  class="nav-link fw-normal"
                  aria-current="page"
                  >Service</router-link
                >
              </p>

              <p>
                <router-link
                  to="/"
                  class="nav-link fw-normal"
                  aria-current="page"
                  >Contact Us</router-link
                >
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div
              class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0"
              style="margin-top: 40px"
            >
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>

              <a
                href="https://maps.app.goo.gl/sjd1hZLnccvGJ5u27"
                target="_blank"
                class="block text-decoration-none text-white d-xl-flex align-items-center justify-items-center gap-2"
              >
                <img
                  src="../assets/images/Social/location-marker.png"
                  alt="Location"
                  class="mb-2"
                  width="25"
                />
                <p
                  class="d-flex align-items-center justify-items-center text-center text-xl-start"
                >
                  Jl. Kedung Sroko No.74, Pacar Kembang, Kec. Tambaksari,
                  Surabaya
                </p>
              </a>

              <a
                href="https://www.instagram.com/gafinlab.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                class="block text-decoration-none text-white d-xl-flex align-items-center justify-align-center gap-2"
              >
                <img
                  src="../assets/images/Social/instagram.png"
                  alt="Instagram"
                  class="mb-2"
                  width="25"
                />
                <p class="text-center text-xl-start pt-1">gafinlab.id</p>
              </a>

              <a
                href="https://wa.me/+6285779642079"
                target="_blank"
                class="block text-decoration-none text-white d-xl-flex align-items-center justify-align-center gap-2"
              >
                <img
                  src="../assets/images/Social/phone.png"
                  alt="Phone"
                  class="mb-2"
                  width="25"
                />
                <p class="text-center text-xl-start pt-1">+62 857-7964-2079</p>
              </a>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2024 Copyright:
        <a class="text-reset fw-bold" href="https://wa.me/+6285779642079"
          >Gafin Shoes</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
import logo from '../assets/images/logo.png'

export default {
  data() {
    return {
      logoSrc: logo
    }
  }
}
</script>
