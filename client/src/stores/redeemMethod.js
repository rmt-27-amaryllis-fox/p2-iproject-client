import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useRedeemMethodStore = defineStore({
  id: "redeemMethod",
  state: () => ({
    baseurl: `http://localhost:3000`,
    // baseurl: `https://yunikuro-c1-har.herokuapp.com`, // deploy


  }),
  actions: {
    async redeemCards() {
      try {
        let result = await axios({
          method: "POST",
          url: `${this.baseurl}/redeem`,
          headers: {
            access_token: localStorage.access_token
          }
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Success Redeem Cards. Please check myprofile page`,
          showConfirmButton: true,
          // timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },
  },
});