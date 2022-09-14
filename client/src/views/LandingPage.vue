<template>
  <!-- Landing page section -->
  <section
    class="vh-100"
    style="background-color: #0f3d3e"
    id="landing-page-section"
  >
    <div class="container py-4 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/landing-page.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <div
                    class="d-flex align-items-center mb-4 pb-1 itea-logo-card"
                  >
                    <img
                      src="../assets/weathernow-logo.png"
                      alt="logo"
                      class="d-inline-block me-2 rounded logo"
                    />
                  </div>

                  <h4 class="fw-bold mb-3 pb-3" style="letter-spacing: 1px">
                    Take only pictures, <br />
                    leave only footprints.
                  </h4>

                  <p style="text-align: justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt quam aperiam perferendis commodi autem cumque
                    veritatis tenetur nobis dolorum! Repellat temporibus laborum
                    tenetur debitis molestias.
                  </p>

                  <br /><br />
                  <div class="pt-1 mb-2">
                    <router-link
                      to="/register"
                      class="btn btn-dark btn-md btn-block"
                      type="button"
                    >
                      Register
                    </router-link>

                    <router-link
                      to="/login"
                      class="btn btn-dark btn-md btn-block mx-2"
                      type="button"
                    >
                      Login
                    </router-link>
                  </div>
                  <div id="google-sign-in"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  width: 230px;
}

#landing-page-section {
  margin-top: 4.7rem;
}
</style>
