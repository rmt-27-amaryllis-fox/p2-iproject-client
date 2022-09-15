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
  }),
  getters: {},
  actions: {
    async totalData() {
      try {
        let data = await axios.get(this.baseUrl + "/numberdata");
        this.totData = data;
      } catch (error) {
        res.send(error);
      }
    },
    async getDiseaseIcd(value) {
      console.log(value);
      try {
        value = value.split(" ").join("+");
        const { data } = await axios.post(this.baseUrl + "/disease", {
          disease: value,
        });
        this.diseasesIcd = data;
        if (!data.data.length || data.data.length == 0) this.dataFlag = true;
        else this.dataFlag = false;
      } catch (error) {
        res.send(error);
      }
    },

    async getSymptomRank() {
      try {
        console.log("masuk");
        const { data } = await axios.post(this.baseUrl + "/symptomcheck", {
          dataToCompare: this.dataToCompare,
          search: this.addedSymptomsCheck,
        });
        console.log(data);
        this.diseasesRank = data;
        this.router.push("/symptomsresult");
      } catch (error) {
        res.send(error);
      }
    },
    async suggestSymptoms(value) {
      try {
        console.log(value);
        if (value.length) {
          const { data } = await axios.post(this.baseUrl + "/symptoms", {
            search: value,
          });
          this.symptoms = data;
        } else this.symptoms = [];
      } catch (error) {
        res.send(error);
      }
    },
  },
});
