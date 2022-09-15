import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMedicStore = defineStore("medic", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    symptoms: "",
    addedSymptomsCheck: "",
    dataToCompare: 1000,
    diseasesRank: [],
    diseasesIcd: [],
    descriptionGoogle: "",
    dataFlag: false,
    totData: [],
    loadingFlag: false,
  }),
  getters: {},
  actions: {
    async totalData() {
      try {
        this.loadingFlag = true;
        let { data } = await axios.get(this.baseUrl + "/numberdata");
        this.totData = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingFlag = false;
      }
    },
    async getDiseaseIcd(value) {
      console.log(value);
      try {
        value = value.split(" ").join("+");
        this.loadingFlag = true;

        const { data } = await axios.post(this.baseUrl + "/disease", {
          disease: value,
        });

        this.diseasesIcd = data;
        if (!data.data.length || data.data.length == 0) this.dataFlag = true;
        else this.dataFlag = false;
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingFlag = false;
      }
    },

    async getSymptomRank() {
      try {
        this.loadingFlag = true;
        const { data } = await axios.post(this.baseUrl + "/symptomcheck", {
          dataToCompare: this.dataToCompare,
          search: this.addedSymptomsCheck,
        });

        console.log(data);
        this.diseasesRank = data;
        this.router.push("/symptomsresult");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingFlag = false;
      }
    },
    async suggestSymptoms(value) {
      try {
        if (value.length) {
          this.loadingFlag = true;

          const { data } = await axios.post(this.baseUrl + "/symptoms", {
            search: value,
          });

          this.symptoms = data;
        } else this.symptoms = [];
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingFlag = false;
      }
    },
  },
});
