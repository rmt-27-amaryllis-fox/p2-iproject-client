<script>
import NewsItem from "../components/NewsItem.vue";
import {mapActions, mapState} from "pinia";
import {useNewsStore} from "../stores/news";
import LoadingBar from "../components/LoadingBar.vue";

export default {
  name: "NewsView",
  components: {LoadingBar, NewsItem},
  data() {
    return {
      invisible: true
    }
  },
  computed: {
    ...mapState(useNewsStore, ['news'])
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNewsHandler'])
  },
  async created() {
    try{
      this.invisible = false;
      await this.fetchNewsHandler();
      this.invisible = true;
    }catch (e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <LoadingBar v-if="!invisible"/>
  <div class="container mt-4">
    <NewsItem v-for="(row, i) in news" :key="i" :data="row"/>
  </div>
</template>

<style scoped>

</style>