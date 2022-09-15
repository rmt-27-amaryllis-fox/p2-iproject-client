import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useRegisterMethodStore = defineStore({
  id: "registerMethod",
  state: () => ({
    // baseurl: `http://localhost:3000`,
    baseurl: `https://simptcg-har-iproject-server.herokuapp.com`, // deploy


  }),
  actions: {
    async register(username, email, password) {
      try {
        let result = await axios({
          method: "POST",
          url: `${this.baseurl}/users/register`,
          data: {
            username: username,
            email: email,
            password: password,
          },
        });
        this.router.push("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: `User with email ${email} has been created`,
          showConfirmButton: true,
          // timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message.join(",\n")}`,
        });
      }
    },
  },
});