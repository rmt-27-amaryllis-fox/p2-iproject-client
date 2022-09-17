<script>
import { mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";

export default {
  name: "JobsCard",
  props: ["job"],
  methods: {
    ...mapActions(useAllStateStore, ["postMyJobs","getJobsDetails"]),
    localPostMyJobs() {
      this.postMyJobs(this.job.id);
    },
    localgetJobsDetails(){
      this.getJobsDetails(this.job.id)
    }
  },
};
</script>

<template>
  <!-- JobsCard -->
  <div class="col-4 mb-3">
    <div class="card p-3 rounded-3">
      <div class="row align-items-center">
        <div class="col-9">
          <h5 class="mb-0">{{ job.title }}</h5>
          <p class="mb-0">
            Type : <strong>{{ job.type }}</strong>
          </p>
          <p class="mb-0">
            Location : <strong>{{ job.location }}</strong>
          </p>
          <p class="mb-0">
            Position : <strong>{{ job.position }}</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center h-16">
      <button
        @click="localPostMyJobs"
        class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest"
      >
        Apply Job
      </button>
      <!-- <button
        @click="localgetJobsDetails"
        class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest"
      >
        View Details
      </button> -->
    </div>
  </div>
</template>
