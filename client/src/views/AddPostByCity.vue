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
  <section>
    <div id="intro" class="bg-image shadow-2-strong vh-100">
      <div
        class="mask d-flex align-items-center h-100"
        style="background-color: rgba(0, 0, 0, 0.8)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <!-- Add Post Form -->
              <form
                class="bg-dark rounded-5 shadow-5-strong p-5"
                @submit.prevent="addPost"
              >
                <h2 style="color: white; text-align: center">Add Post</h2>
                <!-- Nanti ganti jadi upload file -->
                <div class="form-floating mb-3 mt-5">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingImagePost"
                    placeholder="ImageUrl"
                    v-model="newPostData.imageUrl"
                  />
                  <label for="floatingPassword">Image URL</label>
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
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingLocation"
                    placeholder="Location"
                    v-model="newPostData.location"
                  />
                  <label for="floatingLocation">City location</label>
                </div>
                <div class="text-center mb-3">
                  <router-link to="/new-post2" class="small" href="#"
                    >Didn't know your location? Click here!</router-link
                  >
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
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
  </section>
  <!-- End of Add new post by city section -->
</template>
