<script>
import { mapWritableState, mapActions } from "pinia";
import { usePostStore } from "../stores/post";
import { isProxy, toRaw } from "vue";

export default {
  data() {
    return {
      newPostData: {
        imageUrl: "",
        caption: "",
        lat: "",
        lon: "",
      },
    };
  },
  methods: {
    ...mapActions(usePostStore, ["addPostByCoordinate"]),
    getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        this.newPostData.lat = lat.toFixed(7);
        this.newPostData.lon = lon.toFixed(7);
      });
    },
    addPost() {
      this.addPostByCoordinate(this.newPostData);
    },
  },
  created() {
    this.getLocation();
  },
};
</script>

<template>
  <!-- Add new post by coordinate section -->
  <!-- <section>
    <div id="intro" class="bg-image shadow-2-strong vh-100">
      <div
        class="mask d-flex align-items-center h-100"
        style="background-color: rgba(0, 0, 0, 0.8)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <form
                class="bg-dark rounded-5 shadow-5-strong p-5"
                @submit.prevent="addPost"
              >
                <h2 style="color: white; text-align: center">Add Post</h2>
                <div class="form-floating mb-3 mt-5">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingImagePost"
                    placeholder="ImageUrl"
                    v-model="newPostData.imageUrl"
                  />
                  <label for="floatingImagePost">Image URL</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea
                    class="form-control"
                    placeholder="Enter post caption here"
                    id="floatingTextarea"
                    style="height: 120px"
                    v-model="newPostData.caption"
                  ></textarea>
                  <label for="floatingTextarea">Caption</label>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
                    id="get-location"
                  >
                    Add post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <section
    class="vh-100 page"
    style="background-color: #0f3d3e"
    id="login-section"
  >
    <div class="container py-4 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/add-post.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 text-black">
                  <h3
                    class="fw-bold mb-4 card-title"
                    style="letter-spacing: 1px"
                  >
                    Add new post
                  </h3>

                  <form @submit.prevent="addPost" novalidate>
                    <div class="form-outline mb-3">
                      <label class="form-label">Image URL</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        placeholder="imageUrl"
                        v-model="newPostData.imageUrl"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label">Caption</label>
                      <input
                        type="textarea"
                        class="form-control form-control-md"
                        placeholder="Enter your caption here"
                        style="height: 120px"
                        v-model="newPostData.caption"
                      />
                    </div>

                    <div class="pt-1">
                      <router-link
                        to="/home"
                        class="btn btn-dark btn-md btn-block button"
                        >Cancel</router-link
                      >
                      <button
                        class="btn btn-dark btn-md btn-block mx-2 button"
                        type="submit"
                      >
                        Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- End of Add new post by coordinate section -->
</template>
