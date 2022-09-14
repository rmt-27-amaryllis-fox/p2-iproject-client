<script>
import HomeCard from "../components/HomeCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  components: {
    HomeCard,
  },
  methods: {
    ...mapActions(usePostStore, ["fetchAllPost"]),
  },
  computed: {
    ...mapWritableState(usePostStore, ["posts"]),
  },
  created() {
    this.fetchAllPost();
  },
};
</script>

<template>
  <!-- Home section -->
  <section class="container-fluid home-bg pb-5 home">
    <h1 style="text-align: center; color: #fff" class="mb-4 mt-5 pt-3 pb-3">
      Home
    </h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <HomeCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
  <!-- End of Home section -->
</template>

<style scoped>
.home {
  margin-top: 4.7rem;
}
.home-bg {
  background-color: #0f3d3e;
}
</style>
