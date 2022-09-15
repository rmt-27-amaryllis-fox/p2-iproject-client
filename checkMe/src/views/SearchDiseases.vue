<script>
import { mapActions, mapState } from "pinia";
import { useMedicStore } from "../stores/medic";
import SymptomCard from "../components/SymptomCard.vue";

export default {
  components: { SymptomCard },
  methods: { ...mapActions(useMedicStore, ["getDiseaseIcd"]) },
  computed: { ...mapState(useMedicStore, ["diseasesIcd", "dataFlag"]) },
};
</script>
<template>
  <form
    class="form-floating col-12"
    action="post"
    @submit.prevent="
      getDiseaseIcd($event.target.diseases.value);
      flag = true;
    "
  >
    <input
      type="text"
      class="form-control col-12"
      id="diseases"
      placeholder="diseases"
    />
    <label for="diseases">INSERT DISEASE NAME</label>
  </form>
  <h1 v-if="dataFlag">DATA NOT FOUND</h1>

  <div class="row row-cols-1 row-cols-md-5 g-4 m-3">
    <SymptomCard
      v-for="data in diseasesIcd.data"
      :key="data.code"
      :data="data"
    />
  </div>
</template>
