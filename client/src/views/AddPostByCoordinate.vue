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
  </section>
  <!-- End of Add new post by coordinate section -->
</template>
