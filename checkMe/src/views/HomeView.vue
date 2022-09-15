<script>
import { mapActions, mapState } from "pinia";
import { useMedicStore } from "../stores/medic";

export default {
  computed: { ...mapState(useMedicStore, ["totData"]) },
  methods: { ...mapActions(useMedicStore, ["totalData"]) },
  created() {
    this.totalData();
  },
};
</script>
<template>
  <div class="tengahin">
    <div
      class="btn-group btn-group-lg"
      role="group"
      aria-label="Large button group"
    >
      <button type="button" class="btn btn-outline-info">
        NUMBER OF CASES RECORDED<br />
        {{ totData.MedicalRecord }}
      </button>
      <button type="button" class="btn btn-outline-info">
        NUMBER OF DISEASE REGISTERED<br />
        {{ totData.Diseases }}
      </button>
      <button type="button" class="btn btn-outline-info">
        NUMBER OF SYMPOMS COMBINATION<br />
        {{ totData.SymptomRecord }}
      </button>
    </div>
  </div>
</template>
<style scoped>
div > .tengahin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
</style>
