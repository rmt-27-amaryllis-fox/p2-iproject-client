import { defineStore } from "pinia";
import axios from "axios";

export const useMedicineStore = defineStore("medicine", {
  state: () => ({
    isLog: false,
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://individual-project-budi.herokuapp.com",
    medicines: [],
    medicine: "",
  }),
  actions: {
    async getMedicine() {
      try {
        console.log("masuk");
        const { data } = await axios({
          url: this.baseUrl + "/medicines",
          method: "get",
        });
        this.medicines = data;
      } catch (err) {
        console.log(err);
      }
    },
    async getMedicineById(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/medicines/${id}`,
          method: "get",
        });
        this.medicine = data;
      } catch (err) {
        console.log(err);
      }
    },
    async addToCart(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/cart/${id}`,
          method: "post",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        this.router.push("/mycart");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
