<script>
import { mapState } from "pinia";
import SymptomCard from "../components/SymptomCard.vue";
import { useMedicStore } from "../stores/medic";
export default {
  components: { SymptomCard },
  computed: { ...mapState(useMedicStore, ["diseasesRank"]) },
  created() {
    if (this.diseasesRank.length == 0) this.$router.push("/symptomscheck");
  },
};
</script>
<template>
  <div class="row row-cols-1 row-cols-md-5 g-4 m-3">
    <SymptomCard
      v-for="data in diseasesRank.rows"
      :key="data.DiseaseId"
      :data="data"
    />
  </div>
</template>
