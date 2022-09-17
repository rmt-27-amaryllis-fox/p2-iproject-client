<script>
import { mapActions, mapState } from "pinia";
import MyJobsCard from "../components/MyJobsCard.vue";
import NavBar from "../components/NavBar.vue";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "MyJobsPage",
  components: { MyJobsCard, NavBar },
  computed: {
    ...mapState(useAllStateStore, ["myjobs"]),
  },
  methods: {
    ...mapActions(useAllStateStore, ["getMyJobs"]),
  },
  created() {
    this.getMyJobs();
  },
};
</script>

<template>
  <!-- My Heroes -->
  <NavBar />
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-4xl tracking-widest text-white text-center uppercase">
      <span class="block">My Applied Jobs</span>
    </h2>
    <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <!-- MyJobsCard -->
      <MyJobsCard v-for="myjob in myjobs" :key="myjob.id" :myjob="myjob" />
    </div>
  </div>
</template>
