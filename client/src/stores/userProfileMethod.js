import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2"

export const useUserProfileMethodStore = defineStore({
  id: "UserProfileMethod",
  state: () => ({
    baseurl: `http://localhost:3000`,
    // awal state nya
    // baseurl: `https://yunikuro-c1-har.herokuapp.com`, // deploy
    username: {},
    bio: {},
    totalSpellCard: {},
    totalTrapCard: {},
    totalMonsterCard: {},
    totalWin: {},
    totalLose: {},
    cardList: {}
  }),
  actions: {
    async getUserProfile() {
      try {
        let result = await axios({
          method: "GET",
          url: `${this.baseurl}/myprofile`,
          headers: {
            access_token: localStorage.access_token
          }
        });
        console.log(result.data, '<< masok data profile user nya')
        this.username = result.data.username
        this.bio = result.data.UserProfile.bio
        this.totalSpellCard = result.data.UserProfile.totalSpellCard
        this.totalTrapCard = result.data.UserProfile.totalTrapCard
        this.totalMonsterCard = result.data.UserProfile.totalMonsterCard
        this.totalWin = result.data.UserProfile.totalWin
        this.totalLose = result.data.UserProfile.totalLose
        this.cardList = result.data.CardDatabases
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: `MASOK BOI`,
        //   showConfirmButton: true,
        //   // timer: 1500,
        // });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },

  },
});