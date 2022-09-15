<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<template>
  <div class="col-md-4">
    <div class="card border mb-4">
      <img class="card-img-top" :src="game.thumbnail" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ game.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ game.genre }}</h6>
        <p class="card-text short_desc">
          {{ game.short_description }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <RouterLink :to="{ name: 'detail', params: { id: game.id } }">
              <button type="button" class="btn btn-sm btn-outline-primary">
                More Detail
              </button>
            </RouterLink>
          </div>

          <div class="btn-group">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="game.game_url"
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .short_desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} */
</style>
