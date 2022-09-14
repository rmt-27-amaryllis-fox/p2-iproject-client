import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const useInventoriesStore = defineStore({
  id: "inventories",
  state: () => ({
    inventories: [],
    categories: [],
    oneProduct: {},
    // totalPakaian: 0,
    // totalWarehouse: 0,
    // total: 0,
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
        this.total = data.length;
        this.console.log(data);
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success Added",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Success Edited",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
});
