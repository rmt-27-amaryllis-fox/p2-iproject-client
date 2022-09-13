import { defineStore } from "pinia";
import axios from "axios";

export const useInventoriesStore = defineStore({
  id: "inventories",
  state: () => ({
    inventories: [],
    categories: [],
    oneProduct: {},
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
    async deleteProduct(id) {
      try {
        let { data } = await axios({
          url: `http://localhost:3000/inventories/${id}`,
          method: "delete",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.router.push("/");
        this.getInventories();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProductbyId(id) {
      try {
        console.log(id, "<< id get inventories");
        let { data } = await axios({
          url: `http://localhost:3000/inventories/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.oneProduct = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async addProduct(name, image, stock, CategoryId) {
      try {
        let { data } = await axios({
          url: "http://localhost:3000/inventories",
          method: "post",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: name,
            image: image,
            stock: stock,
            CategoryId: CategoryId,
          },
        });
        // this.categories = data;
        this.router.push("/");
        this.getInventories();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async editProduct(name, image, stock, CategoryId) {
      try {
        let { data } = await axios({
          url: `http://localhost:3000/inventories/${this.oneProduct.id}`,
          method: "put",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: name,
            image: image,
            stock: stock,
            CategoryId: CategoryId,
          },
        });
        // this.categories = data;
        this.router.push("/");
        this.getInventories();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
