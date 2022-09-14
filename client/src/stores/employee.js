import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    employees: [],
    oneEmployee: {},
  }),
  actions: {
    async getEmployees() {
      try {
        //! udah oke
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
    async getEmployeesById(id) {
      try {
        //! udah oke
        console.log(id);
        let { data } = await axios({
          url: `http://localhost:3000/employees/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.oneEmployee = data;
        console.log(data, "<<< by ID get employe");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmployeesById(id) {
      try {
        //! udah oke
        console.log(id);
        let { data } = await axios({
          url: `http://localhost:3000/employees/${id}`,
          method: "delete",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.router.push("/employees");
        this.getEmployees();
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
    async addEmployees(name, imageUrl, birthDate, status, department) {
      try {
        //! udah oke
        console.log(imageUrl, "<<image");
        let formData = new FormData();
        formData.append("imageUrl", imageUrl);
        formData.append("name", name);
        formData.append("birthDate", birthDate);
        formData.append("status", status);
        formData.append("department", department);
        console.log(formData);
        console.log(formData.imageUrl);
        let { data } = await axios({
          url: "http://localhost:3000/employees",
          method: "post",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: formData,
        });
        this.router.push("/employees");
        this.getEmployees();
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
          text: "Something Wrong",
        });
      }
    },
    async editEmployees(name, imageUrl, birthDate, status, department) {
      try {
        //! belum oke
        console.log(
          name,
          imageUrl,
          birthDate,
          status,
          department,
          "dari edit store"
        );
        console.log("masuk ke edit employee");
        console.log(this.oneEmployee, "ini oneEmploye");
        console.log(this.oneEmployee.cloudinary_id, "<<<id nyaa edit");
        console.log(imageUrl, "<<image");
        let formData = new FormData();
        formData.append("imageUrl", imageUrl);
        formData.append("name", name);
        formData.append("birthDate", birthDate);
        formData.append("status", status);
        formData.append("department", department);
        console.log(formData);
        console.log(formData.imageUrl);
        let { data } = await axios({
          url: `http://localhost:3000/employees/${this.oneEmployee.cloudinary_id}`,
          method: "put",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: formData,
        });
        this.router.push("/employees");
        this.getEmployees();
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
          text: "Harus Format PNG,JPEG,JPG!",
        });
      }
    },
  },
});
