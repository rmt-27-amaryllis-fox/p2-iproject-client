<script>
export default {
  name: "NewsItem",
  props: ['data'],
  computed: {
    formatAuthor() {
      console.log()
      return this.data.authorFormatted.split(' ').map(el => {
        let name = ''
        for (let i = 0; i < el.length; i++) {
          if (i === 0) name += el[i].toUpperCase()
          else name += el[i]
        }
        return name
      }).join(' ')
    },
  }
}
</script>

<template>
  <div class="card mb-3 rounded-0">
    <img :src="data.promoImage.url" class="card-img-top rounded-0" alt="..." style="height: 280px;object-fit: cover">
    <div class="card-body rounded-0">
      <div class="mb-2">
        <h5 class="card-title">{{ data.headline }}</h5>
        <p class="card-text">{{ data.description }}</p>
        <p class="card-text mb-0"><small class="text-muted">{{ formatAuthor }}</small></p>
        <p class="card-text mb-0"><small class="text-muted">{{ data.dateLastPublished }}</small></p>
      </div>
      <div class="d-flex justify-content-end">
        <a :href="data.url" class="btn btn-outline-primary rounded-0" target="_blank">Read More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>