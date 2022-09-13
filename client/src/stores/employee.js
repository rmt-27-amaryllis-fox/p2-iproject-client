import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    employees: [],
  }),
  actions: {
    async getEmployees() {
      try {
        let { data } = await axios({
          url: "http://localhost:3000/employees",
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.employees = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
