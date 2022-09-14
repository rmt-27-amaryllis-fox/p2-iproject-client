<script>
import WatchlistItem from "./WatchlistItem.vue";

export default {
  name: "WatchlistCard",
  components: {WatchlistItem},
  props: ['data']
}
</script>

<template>
  <div class="col-md-9">
    <div class="card rounded-0">
      <div class="card-body rounded-0">
        <div class="row">
          <WatchlistItem v-for="watchlist in data"
                         :key="watchlist.id"
                         :ticker="watchlist.ticker"
                         :company="watchlist.company"
                         :targetPrice="watchlist.targetPrice"
                         :date="watchlist.updatedAt"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>