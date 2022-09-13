<script>
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
};
</script>

<template>
  <!-- Profile section -->
  <section class="h-100 gradient-custom-2">
    <div class="container py-3">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col col-lg-9 col-xl-12">
          <div class="card">
            <div
              class="rounded-top text-white d-flex flex-row"
              style="background-color: #000; height: 200px"
            >
              <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  class="img-fluid img-thumbnail mt-4 mb-2"
                  style="width: 150px; z-index: 1"
                />
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-mdb-ripple-color="dark"
                  style="z-index: 1"
                >
                  Edit profile
                </button>
              </div>
              <div class="ms-3 mb-2" style="margin-top: 110px">
                <h3>John Doe</h3>
                <h5>Jakarta</h5>
              </div>
            </div>
            <div class="p-4 text-black" style="background-color: #f8f9fa">
              <div class="d-flex justify-content-end text-center py-1">
                <div>
                  <p class="mb-1 h3">12</p>
                  <p class="small text-muted mb-0">Posts</p>
                </div>
              </div>
            </div>
            <div class="card-body p-4 text-black">
              <div class="mb-5">
                <p class="lead fw-normal mb-1">About</p>
                <div class="p-4" style="background-color: #f8f9fa">
                  <p class="font-italic mb-1" style="text-align: justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis nostrum voluptate reiciendis commodi sed, itaque
                    odit, velit cumque quia quas iure quod doloribus ipsam,
                    repellat molestiae mollitia perferendis eaque! Illum vel sit
                    aspernatur unde saepe consequuntur distinctio! Non eveniet
                    blanditiis sapiente eos nobis perspiciatis veniam libero
                    fuga aspernatur. Aut, repellendus!
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <p class="lead fw-normal mb-0">Recent posts</p>
                <p class="mb-0">
                  <a href="#!" class="text-muted">Show all</a>
                </p>
              </div>

              <div class="row g-2">
                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of profile section -->
</template>
