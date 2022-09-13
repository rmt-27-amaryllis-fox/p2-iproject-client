<script>
export default {
  name: "NewsItem",
  props: ['data']
}
</script>

<template>
  <div class="card mb-3">
    <img :src="data.image_url" class="card-img-top" alt="..." style="height: 280px;object-fit: cover">
    <div class="card-body">
      <h5 class="card-title">{{data.title}}</h5>
      <p class="card-text">{{data.description}}</p>
      <p class="card-text"><small class="text-muted">Published at {{ data.published_at }}</small></p>
      <div class="d-flex justify-content-end">
        <a :href="data.url" class="btn btn-outline-primary" target="_blank">Read More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>