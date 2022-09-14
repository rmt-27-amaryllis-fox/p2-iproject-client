<script>
import PostCard from "../components/PostCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";
import { usePostStore } from "../stores/post";

export default {
  components: {
    PostCard,
  },
  methods: {
    ...mapActions(useUserStore, ["fetchUserData"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["userProfile"]),
    ...mapWritableState(usePostStore, ["post"]),
  },
  created() {
    this.fetchUserData();
  },
};
</script>

<template>
  <!-- Profile section -->
  <section class="h-100 gradient-custom-2 profile">
    <div class="container py-3">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col col-lg-9 col-xl-12">
          <div class="card">
            <div
              class="rounded-top text-white d-flex flex-row header"
              style="height: 200px"
            >
              <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px">
                <img
                  :src="userProfile.profilePicture"
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
                <h3>{{ userProfile.username }}</h3>
                <h5>{{ userProfile.location }}</h5>
              </div>
            </div>
            <div class="p-4 text-black" style="background-color: #f1f1f1">
              <div class="d-flex justify-content-end text-center py-1">
                <div>
                  <p class="mb-1 h3">{{ userProfile.Posts.length }}</p>
                  <p class="large text-muted mb-0">Posts</p>
                </div>
              </div>
            </div>
            <div class="card-body p-4 text-black">
              <div class="mb-5">
                <p class="lead fw-bold mb-1">About me</p>
                <div class="p-4" style="background-color: #f1f1f1">
                  <p class="font-italic mb-1" style="text-align: justify">
                    {{ userProfile.description }}
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <p class="lead fw-bold mb-0">Posts</p>
              </div>

              <div class="row g-2">
                <PostCard
                  v-for="post in userProfile.Posts"
                  :key="post.id"
                  :post="post"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of profile section -->
</template>

<style>
.profile {
  background-color: #0f3d3e;
  margin-top: 4.7rem;
}

.header {
  background-color: #100f0f;
}
</style>
