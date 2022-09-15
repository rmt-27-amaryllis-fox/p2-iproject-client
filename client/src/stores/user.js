import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useUserStore = defineStore("user", {
  state: () => ({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://p2-weathernow.herokuapp.com/",
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
        Swal.fire({
          icon: "success",
          title: `Welcome, ${payload.username}!`,
          text: `Enjoy your journey`,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
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

        Swal.fire({
          icon: "success",
          title: `Hello, ${payload.username}!`,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },

    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.navbarProfilePicture = "";
      this.router.push("/");

      Swal.fire({
        icon: "success",
        title: `Logged out`,
      });
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
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
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

        Swal.fire({
          icon: "success",
          title: `Profile updated`,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      }
    },
  },
});
