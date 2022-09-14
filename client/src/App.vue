<script>
  import navbar from './components/navbar.vue';
  import { mapWritableState } from 'pinia';
  import { useUserStore } from './stores/user';
  export default {
    components : {
      navbar
    },
    computed : {
      ...mapWritableState(useUserStore, ['inLoginPage', 'isLoggedIn'])
    },
    created(){
      if(localStorage.access_token){
        this.isLoggedIn = true
      }
    }
  }
</script>

<template>

<navbar v-if="!inLoginPage || isLoggedIn"/>

<router-view></router-view>

</template>

<style scoped>

</style>
