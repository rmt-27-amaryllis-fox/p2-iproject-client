<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  computed: {
    ...mapState(usePostStore, [
      "post",
      "aboutThisCity",
      "cityParagraph",
      "cityThumbnail",
      "cityUrl",
    ]),
  },
  methods: {
    ...mapActions(usePostStore, ["about"]),
  },
};
</script>

<template>
  <!-- About this city section-->
  <section class="page">
    <div
      class="container-fluid d-flex justify-content-center align-items-center h-100"
    >
      <div class="row d-flex post-detail">
        <div class="col-md-12">
          <h2 class="display-6 fw-bolder title-big">{{ post.location }}</h2>
          <img
            class="card-img-top mb-md-0 image mx-auto"
            :src="cityThumbnail"
            alt="city-image"
          />
        </div>
        <div class="col location"></div>
        <p class="mt-3 paragraph caption">{{ cityParagraph }}</p>
        <h5>Read more:</h5>
        <a :href="cityUrl" class="caption">{{ cityUrl }}</a>

        <div class="d-flex mt-3">
          <button class="btn btn-dark" type="button" @click="$router.go(-1)">
            Back
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- End of about this city section-->
</template>

<style scoped>
.paragraph {
  text-align: justify;
  text-indent: 40px;
}

.image {
  width: 100%;
  max-width: 400px;
}
</style>
