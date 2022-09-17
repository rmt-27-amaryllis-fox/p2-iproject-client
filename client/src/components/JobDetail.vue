<script>
import { mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";

export default {
  name: "JobsDetail",
  props: ["jobdetail"],
  methods: {
    ...mapActions(useAllStateStore, ["getJobsDetails"]),
    localgetJobsDetails() {
      this.getJobsDetails(this.jobdetail.id);
    },
  },
};
</script>

<template>
  <!-- JobsDetailCard -->
  <h1>{{ jobdetail.title }}</h1>
  <p>Type : {{ jobdetail.type }}</p>
  <p>Location : {{ jobdetail.location }}</p>
  <p>Position : {{ jobdetail.position }}</p>
  <p style="white-space: pre-line">
    Requirement : <br />{{ jobdetail.requirement }}
  </p>
</template>
