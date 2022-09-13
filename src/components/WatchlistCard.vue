<script>
import WatchlistItem from "./WatchlistItem.vue";

export default {
  name: "WatchlistCard",
  components: {WatchlistItem}
}
</script>

<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <WatchlistItem/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>