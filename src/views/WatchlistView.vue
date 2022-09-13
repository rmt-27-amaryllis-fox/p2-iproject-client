<script>
import WatchlistCard from "../components/WatchlistCard.vue";
import WatchlistInfo from "../components/WatchlistInfo.vue";

export default {
  name: "WatchlistView",
  components: {WatchlistInfo, WatchlistCard}
}
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <WatchlistCard/>
      <WatchlistInfo/>
    </div>
  </div>
</template>

<style scoped>

</style>