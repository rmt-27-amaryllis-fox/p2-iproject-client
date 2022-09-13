<script>
import NavBarPage from "./views/NavBarPage.vue";
import LoginPage from "./views/LoginPage.vue";
// import RegisterPage from "./views/RegisterPage.vue";
export default {
  components: { NavBarPage, LoginPage },
};
</script>

<template>
  <NavBarPage />
  <!-- <LoginPage /> -->

  <!-- <RegisterPage /> -->
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
