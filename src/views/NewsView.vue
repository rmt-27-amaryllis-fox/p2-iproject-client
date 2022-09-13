<script>
import NewsItem from "../components/NewsItem.vue";
import {mapActions, mapState} from "pinia";
import {useNewsStore} from "../stores/news";

export default {
  name: "NewsView",
  components: {NewsItem},
  computed: {
    ...mapState(useNewsStore, ['news'])
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNewsHandler'])
  },
  created() {
    this.fetchNewsHandler();
  }
}
</script>

<template>
  <div class="container mt-4">
    <NewsItem v-for="(row, i) in news" :key="i" :data="row"/>
  </div>
</template>

<style scoped>

</style>