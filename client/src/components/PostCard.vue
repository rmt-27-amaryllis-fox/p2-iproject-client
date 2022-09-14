<script>
export default {
  props: ["post"],
};
</script>

<template>
  <div class="col-6 mb-2">
    <img :src="post.imageUrl" alt="image-post" class="w-100 rounded-3" />
  </div>
  <div v-show="!post">
    <p>belom ada post</p>
  </div>
</template>
