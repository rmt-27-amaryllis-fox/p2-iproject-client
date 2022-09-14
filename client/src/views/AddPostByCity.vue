<script>
import { mapActions } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  data() {
    return {
      newPostData: {
        imageUrl: "",
        caption: "",
        location: "",
      },
    };
  },
  methods: {
    ...mapActions(usePostStore, ["addPostByCity"]),
    async addPost() {
      await this.addPostByCity(this.newPostData);
    },
  },
};
</script>

<template>
  <!-- Add new post by city section -->
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
                    class="fw-bold mb-3 card-title"
                    style="letter-spacing: 1px"
                  >
                    Add new post
                  </h3>

                  <form @submit.prevent="addPost" novalidate>
                    <div class="form-outline mb-2">
                      <label class="form-label">Image URL</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        placeholder="Enter your image URL"
                        v-model="newPostData.imageUrl"
                      />
                    </div>
                    <div class="form-outline mb-1">
                      <label class="form-label">Caption</label>
                      <input
                        type="textarea"
                        class="form-control form-control-md"
                        placeholder="Enter your caption here"
                        style="height: 120px"
                        v-model="newPostData.caption"
                      />
                    </div>
                    <div class="form-outline mb-2">
                      <label class="form-label" for="register-location"
                        >City location</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-md"
                        placeholder="Enter your current city location"
                        v-model="newPostData.location"
                      />
                    </div>

                    <p class="mb-1 pb-lg-2 content" style="color: #000000">
                      Didn't know your current location?
                      <router-link to="/new-post2" style="color: #393f81"
                        >Click here!</router-link
                      >
                    </p>

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
  <!-- End of Add new post by city section -->
</template>

<style scoped></style>
