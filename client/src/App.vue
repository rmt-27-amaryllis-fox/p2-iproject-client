<script>
import NavBarPage from "./views/NavBarPage.vue";
import LoginPage from "./views/LoginPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
import UserProfilePage from "./views/UserProfilePage.vue";
import HomePage from "./views/HomePage.vue";
import GamePage from "./views/GamePage.vue";
// import RegisterPage from "./views/RegisterPage.vue";
export default {
  components: {
    NavBarPage,
    LoginPage,
    RegisterPage,
    UserProfilePage,
    HomePage,
    GamePage,
  },
};
</script>

<template>
  <NavBarPage />
  <!-- <LoginPage /> -->
  <!-- <HomePage/> -->
  <!-- <HomePage />
  <ProductDetailPage />
  <RegisterPage />
  <LoginPage />
  <NoFoundPage />
  <WishListPage /> -->
  <!-- <RouterView /> -->
  <!-- <GamePage /> -->
  <router-view></router-view>
</template>

<style>
body {
  background-color: aquamarine;
}
</style>
