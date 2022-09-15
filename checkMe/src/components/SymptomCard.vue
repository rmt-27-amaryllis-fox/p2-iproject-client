<script>
import { mapActions, mapState } from "pinia";
import { useMedicStore } from "../stores/medic";
import axios from "axios";

export default {
  props: ["data"],
  components: {},
  data() {
    return {
      googleDesc: "",
    };
  },
  computed: { ...mapState(useMedicStore, ["baseUrl"]) },
  methods: {
    async descriptionFromGoogle(search) {
      try {
        console.log(search);
        const { data } = await axios.post(this.baseUrl + "/gsearch", {
          search: search,
        });
        this.googleDesc = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    console.log(this.data.DiseaseName || this.data.name);
    this.descriptionFromGoogle(this.data.DiseaseName || this.data.name);
  },
};
</script>
<template>
  <div class="col">
    <div class="card border-success mb-3" style="max-width: 18rem">
      <div
        class="card-header bg-transparent border-success"
        :style="
          data.percentage < 50
            ? 'font-weight: 500;font-style:oblique;color : red'
            : 'font-weight: 500;font-style:oblique;color : green'
        "
      >
        <p v-if="data.percentage">Similarity : {{ data.percentage }}%</p>
        {{ data.code }}
      </div>
      <div class="card-body text-success">
        <h5 class="card-title">{{ data.DiseaseName || data.name }}</h5>
        <p class="card-text">
          {{ data.DiseaseDesc || data.description }}<br />
          <b> Info from Google: </b>
          {{ googleDesc }}
        </p>

        <label v-if="data.SearchSymptoms"> Your symptoms: </label><br />

        <button
          type="button"
          class="btn btn-outline-danger"
          v-for="data in data.SearchSymptoms"
        >
          {{ data }}
        </button>

        <br />
        <label v-if="data.RecordSymptoms"> Disease symptoms: </label><br />

        <button
          type="button"
          class="btn btn-outline-info"
          v-for="data in data.RecordSymptoms"
        >
          {{ data }}
        </button>
      </div>
      <div class="card-footer bg-transparent border-success" v-if="data.count">
        Number of Cases: {{ data.count }}
      </div>
    </div>
  </div>
</template>
