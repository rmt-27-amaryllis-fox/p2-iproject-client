import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "https://shiranui-recruitment.herokuapp.com";

export const useAllStateStore = defineStore({
  id: "allState",
  state: () => ({
    isLogin: false,
    jobs: [],
    jobsdetails: [],
    myjobs: [],
  }),
  getters: {},
  actions: {
    async loginHandler(objUser) {
      try {
        const { data } = await axios.post(`${baseUrl}/login`, {
          email: objUser.email,
          password: objUser.password,
        });

        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.getJobs();
        this.router.push({ name: "home" });
        console.log("Login Success");
      } catch (err) {
        console.log(err);
      }
    },
    async registerHandler(objUser) {
      try {
        await axios.post(`${baseUrl}/register`, {
          email: objUser.email,
          password: objUser.password,
        });
        // this.loginHandler(objUser)
        this.router.push({ name: "login" });
        console.log("Register Success");
      } catch (err) {
        console.log(err);
      }
    },
    // async handleGoogle(response){
    //   try {
    //     const { data } = await axios.post(`${baseUrl}/google-sign-in`, {headers: response.credential});
    //     localStorage.setItem("access_token", data.access_token);
    //     this.isLogin = true;
    //     this.getJobs();
    //     this.router.push({ name: "home" });
    //     console.log("Login Success");
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    async getJobs() {
      try {
        const { data } = await axios.get(`${baseUrl}/jobs`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.jobs = data;
      } catch (err) {
        console.log(err);
      }
    },
    async getJobsDetails(id) {
      try {
        const { data } = await axios.get(`${baseUrl}/jobs/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.jobsdetails = data;
        this.router.push(`/jobdetails/${id}`);
        console.log(this.jobsdetails)
      } catch (err) {
        console.log("ke trigger error");
        console.log(err);
      }
    },
    async getMyJobs() {
      try {
        const { data } = await axios.get(`${baseUrl}/myjobs`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.myjobs = data;
      } catch (err) {
        console.log(err);
      }
    },
    async postMyJobs(id) {
      try {
        await axios.post(
          `${baseUrl}/myjobs/${id}`,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.router.push({ name: "myjobs" });
        console.log("Success post myjobs");
      } catch (err) {
        console.log(err);
      }
    },
    async patchMyJob(id) {
      try {
        await axios.patch(
          `${baseUrl}/myjobs/${id}`,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.getMyJobs();
        console.log("Success patch myjobs");
      } catch (err) {
        console.log(err);
      }
    },
    async addJob() {
      try {
        await axios.post(
          `${baseUrl}/jobs`,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.router.push({ name: "home" });
      } catch (err) {
        console.log(err);
      }
    },
    changeStatusLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      }
    },
    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push({ name: "login" });
    },
  },
});
