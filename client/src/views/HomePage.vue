<script>
import { mapActions, mapState } from "pinia";
import JobsCard from "../components/JobsCard.vue";
import NavBar from "../components/NavBar.vue";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "HomePage",
  components: { JobsCard, NavBar },
  computed: {
    ...mapState(useAllStateStore, ["jobs"]),
  },
  methods: {
    ...mapActions(useAllStateStore, ["getJobs"]),
  },
  created() {
    this.getJobs();
  },
};
</script>

<template>
  <NavBar />
  <!-- Home -->
  <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-4xl tracking-widest text-white text-center uppercase">
      <span class="block">Jobs Available</span>
    </h2>
    <div
      class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <!-- JobsCard -->
      <JobsCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>
