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
    ...mapActions(usePostStore, ["fetchPost"]),
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
      class="container d-flex justify-content-center align-items-center h-100"
    >
      <div
        class="row d-flex align-items-center post-detail rounded-3"
        style="border: 0.1rem white solid"
      >
        <div class="col-md-5">
          <img
            class="card-img-top mb-md-0 product-detail-image"
            :src="post.imageUrl"
            alt="product-image"
          />
        </div>
        <div class="col-md-7 mt-1">
          <div class="col location">
            <h2 class="display-5 fw-bolder">{{ post.location }}</h2>
          </div>
          <div class="row d-flex align-items-center">
            <h3>{{ post.weatherMain }}</h3>
          </div>
          <div class="fs-5 mb-3 content">
            <span>{{ post.weatherDescription }}</span>
          </div>
          <div class="product-description">
            <p class="lead">{{ post.caption }}</p>
          </div>
          <div class="d-flex mt-3">
            <button class="btn btn-dark" type="button">Click me</button>
          </div>
          <div class="d-flex flex-row-reverse">
            <!-- <img class="qr-code" src="" alt="qr-code" /> -->
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
</style>
