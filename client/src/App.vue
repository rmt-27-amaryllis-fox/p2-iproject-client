<script>
import axios from "axios";
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapWritableState } from "pinia";
import { appleStore } from "./stores/counter";
export default {
  components: { RouterView },
  methods: {
    ...mapActions(appleStore, [
      "changePage",
      "logOut",
      "fetchIphone",
      "fetchMyOrder",
      "handleCredentialResponse",
    ]),
    
  },
  computed: {
    ...mapWritableState(appleStore, ["isLogin", 'baseUrl']),
  },
  
  created() {
    this.fetchIphone();
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
      this.fetchMyOrder();
    }
  },
};
</script>

<template>
  <section id="navigation">
    <a @click.prevent="changePage('')"
      ><i class="fa-solid fa-apple-whole"></i
    ></a>
    <nav>
      <ul class="nav_links">
        <li class="nav-item">
          <a href="" @click.prevent="changePage('')">Home</a>
        </li>
        <li class="nav-item">
          <a
            href=""
            @click.prevent="changePage('myOrder')"
            v-if="isLogin == true"
            >My Order</a
          >
        </li>
      </ul>
    </nav>
    <div class="sign">
      <a href="" @click.prevent="changePage('login')" v-if="isLogin == false"
        >Sign in</a
      >
      <a href="" v-if="isLogin == true" @click.prevent="logOut()">Log out</a>
    </div>
  </section>
  <RouterView />
</template>
