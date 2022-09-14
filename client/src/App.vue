<script>
  import navbar from './components/navbar.vue';
  import { mapWritableState } from 'pinia';
  import { useUserStore } from './stores/user';
  export default {
    components : {
      navbar
    },
    computed : {
      ...mapWritableState(useUserStore, ['isLoggedIn'])
    },
    created(){
      if(localStorage.access_token){
        this.isLoggedIn = true
      }
    }
  }
</script>

<template>

<navbar v-if="isLoggedIn" />

<router-view></router-view>

</template>

<style scoped>

</style>
