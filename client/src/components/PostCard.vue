<script>
import { mapActions } from "pinia";
import { usePostStore } from "../stores/post";

export default {
  props: ["post"],
  methods: {
    ...mapActions(usePostStore, ["fetchPost"]),
    async fetchPostComponent() {
      this.$router.push(`/post/${this.post.id}`);
    },
  },
};
</script>

<template>
  <div class="col-6 mb-2" @click="fetchPostComponent">
    <img
      :src="post.imageUrl"
      alt="image-post"
      class="post-card w-100 rounded-3"
    />
  </div>
</template>

<style scoped>
.post-card {
  height: 280px;
}
</style>
