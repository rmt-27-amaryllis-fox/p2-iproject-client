import { defineStore } from "pinia";
import axios from "axios";

export const useInventoriesStore = defineStore({
  id: "inventories",
  state: () => ({
    inventories: [],
    categories: [],
  }),
  actions: {
    async getInventories() {
      try {
        let { data } = await axios({
          url: "http://localhost:3000/inventories",
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.inventories = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories() {
      try {
        let { data } = await axios({
          url: "http://localhost:3000/categories",
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.categories = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
