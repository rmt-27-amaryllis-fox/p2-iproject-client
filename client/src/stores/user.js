import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    loggedInUsername: "",
    navbarProfilePicture: "",
  }),
  getters: {},
  actions: {
    async registerHandler(payload) {
      try {
        await axios({
          method: "POST",
          url: `${this.baseUrl}/users/register`,
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            location: payload.location,
          },
        });

        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },

    async loginHandler(payload) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${this.baseUrl}/users/login`,
          data: {
            username: payload.username,
            password: payload.password,
          },
        });

        // localStorage.setItem("access_token", data.access_token);
        // localStorage.setItem("loggedInUsername", data.loggedInUsername);
        // localStorage.setItem("navbarProfilePicture", data.profilePicture);
        localStorage.access_token = data.access_token;
        localStorage.loggedInUsername = data.loggedInUsername;
        localStorage.navbarProfilePicture = data.profilePicture;

        this.navbarProfilePicture = data.profilePicture;
        this.isLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.navbarProfilePicture = "";
      this.router.push("/login");
    },

    // async fetchUserData() {
    //   try {
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
});
