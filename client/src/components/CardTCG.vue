<script>
export default {
  props: ["card"],
};
</script>

<template>
  <div class="card text-bg-dark mb-3" style="max-width: 18rem">
    <img :src="card.image_url" class="card-img" alt="" />
  </div>
</template>

<style scoped>
.card {
  background-color: black;
}
</style>
