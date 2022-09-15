<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMedicStore } from "../stores/medic";

export default {
  components: {},
  data() {
    return { symptomAdded: [] };
  },
  computed: {
    ...mapState(useMedicStore, ["symptoms"]),
    ...mapWritableState(useMedicStore, ["dataToCompare", "addedSymptomsCheck"]),
  },
  methods: {
    ...mapActions(useMedicStore, ["suggestSymptoms", "getSymptomRank"]),
    addSymptoms(value) {
      this.symptomAdded.push(value);
      this.symptomAdded = this.symptomAdded.reduce((acc, current) => {
        const x = acc.find((item) => item.id === current.id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
    },

    removeSymptom(value) {
      this.symptomAdded = this.symptomAdded.map((el) => {
        if (value != el.id) return el;
      });

      this.symptomAdded = this.symptomAdded.filter((el) => {
        return el != null;
      });
    },

    checkSymptom() {
      const data = this.symptomAdded.map((el) => el.id).join(",");
      this.addedSymptomsCheck = data;
      console.log(data);
      console.log(this.dataToCompare);
      this.getSymptomRank();
    },
  },
};
</script>
<template>
  <div class="d-flex mt-3">
    <div class="col-6">
      <div class="form-floating col-12">
        <input
          type="text"
          class="form-control col-12"
          id="symptoms"
          placeholder="symptoms"
          @keyup="suggestSymptoms($event.target.value)"
        />
        <label for="symptoms">Symptoms</label>
      </div>
      <div class="d-flex">
        <div class="form-floating mb-3 col-4">
          <input
            type="number"
            class="form-control col-12"
            id="compare"
            placeholder="Compare"
            v-model="dataToCompare"
          />
          <label for="compare">Data to Compare</label>
        </div>
        <button
          class="btn btn-outline-info col-8 mb-3"
          v-if="symptomAdded.length > 0"
          @click="checkSymptom()"
        >
          CHECK ME!
        </button>
      </div>
    </div>
    <div class="form-floating mb-3 col-6 m-1">
      <button
        class="btn btn-warning col-3 m-1"
        v-for="data in symptomAdded"
        :key="data.id"
        @click="removeSymptom(data.id)"
      >
        {{ data.BodyName.toUpperCase() }} || {{ data.SignName.toUpperCase() }}
      </button>
    </div>
  </div>
  <button
    class="btn btn-outline-danger col-4"
    v-for="data in symptoms"
    :key="data.id"
    @click="addSymptoms(data)"
  >
    {{ data.BodyName.toUpperCase() }} || {{ data.SignName.toUpperCase() }}
  </button>
</template>
