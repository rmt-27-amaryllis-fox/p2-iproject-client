import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    loggedInUsername: "",
    navbarProfilePicture: "",
    userProfile: [],
    editUserProfile: [],
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
        localStorage.access_token = data.access_token;
        localStorage.loggedInUsername = data.loggedInUsername;
        localStorage.navbarProfilePicture = data.profilePicture;

        this.navbarProfilePicture = data.profilePicture;
        this.isLogin = true;
        this.router.push("/home");
      } catch (err) {
        console.log(err);
      }
    },

    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.navbarProfilePicture = "";
      this.router.push("/");
    },

    async fetchUserData() {
      try {
        const result = await axios({
          method: "GET",
          url: `${this.baseUrl}/users/profile`,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.userProfile = result.data;
      } catch (err) {
        console.log(err);
      }
    },

    async editProfile(payload) {
      try {
        const result = await axios({
          method: "PUT",
          url: `${this.baseUrl}/users/editprofile`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            profilePicture: payload.profilePicture,
            location: payload.location,
            description: payload.description,
          },
        });
        this.navbarProfilePicture = payload.profilePicture;
        this.router.push("/profile");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
