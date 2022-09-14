<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  computed: {
    ...mapState(usePostStore, ["post"]),
    formattedDate() {
      return this.post.createdAt.substring(0, 19).replace("T", " ");
    },
  },
  methods: {
    ...mapActions(usePostStore, ["fetchPost", "about"]),
    async aboutComponent() {
      this.about(this.post.id);
      this.$router.push(`/about/${this.post.id}`);
    },
  },
  data() {
    return {
      flagUrl: `https://countryflagsapi.com/png`,
      weatherIconUrl: `http://openweathermap.org/img/w`,
    };
  },
  created() {
    this.fetchPost(this.$route.params.id);
  },
};
</script>

<template>
  <!-- Post detail section-->
  <section class="vh-100 page" style="background-color: #0f3d3e">
    <div
      class="container-fluid d-flex justify-content-center align-items-center h-100"
    >
      <div
        class="row d-flex align-items-center post-detail rounded-3"
        style="border: 0.1rem white solid"
      >
        <div class="col-md-6">
          <img
            class="card-img-top mb-md-0 post-image"
            :src="post.imageUrl"
            alt="post-image"
            style="width: 300px; height: 300px"
          />
        </div>
        <div class="col-md-6 mt-1">
          <div class="col location">
            <h2 class="display-6 fw-bolder card-weather-desc">
              {{ post.location }}
            </h2>
          </div>
          <div class="row d-flex align-items-center card-weather-desc">
            <h4>{{ post.weatherMain }}</h4>
          </div>
          <div class="fs-5 mb-3 content card-weather-desc">
            <span>{{ post.weatherDescription }}</span>
          </div>
          <div class="post-detail-caption">
            <p class="lead">{{ post.caption }}</p>
          </div>
          <div class="d-flex mt-3">
            <button class="btn btn-dark" type="button" @click="aboutComponent">
              About this city
            </button>
            <button
              class="btn btn-dark ms-2"
              type="button"
              @click="$router.go(-1)"
            >
              Back
            </button>
          </div>
          <div class="d-flex flex-row-reverse mt-4 card-created-at">
            <p>Posted by : {{ post.User.username }} ({{ formattedDate }})</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of post detail section-->
</template>

<style>
.post-detail {
  padding: 2.5rem;
  background-color: white;
}

.page {
  margin-top: 4.7rem;
}

.close-button {
  color: red;
  z-index: 1;
}
</style>
