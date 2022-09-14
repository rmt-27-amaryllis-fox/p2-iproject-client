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
    ]),
  },
  methods: {
    ...mapActions(usePostStore, ["about"]),
  },
};
</script>

<template>
  <!-- About this city section-->
  <section class="page" style="background-color: #0f3d3e">
    <div
      class="container-fluid d-flex justify-content-center align-items-center h-100"
    >
      <div class="row d-flex post-detail" style="border: 0.1rem white solid">
        <div class="col-md-12">
          <h2 class="display-6 fw-bolder">{{ post.location }}</h2>
          <img
            class="card-img-top mb-md-0 image mx-auto"
            :src="cityThumbnail"
            alt="product-image"
          />
        </div>
        <div class="col location"></div>
        <p class="mt-3 paragraph">{{ cityParagraph }}</p>

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
