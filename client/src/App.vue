<script>
import NavBarPage from "./views/NavBarPage.vue";
import LoginPage from "./views/LoginPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
// import RegisterPage from "./views/RegisterPage.vue";
export default {
  components: { NavBarPage, LoginPage, RegisterPage },
};
</script>

<template>
  <NavBarPage />
  <!-- <LoginPage /> -->

  <!-- <HomePage />
  <ProductDetailPage />
  <RegisterPage />
  <LoginPage />
  <NoFoundPage />
  <WishListPage /> -->
  <!-- <RouterView /> -->

  <router-view></router-view>
</template>

<style>
body {
  background-color: aquamarine;
}
</style>
