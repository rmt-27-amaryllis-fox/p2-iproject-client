<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import ChatAppVue from './components/ChatApp.vue';
import { useUserStore } from './stores/user';

export default {
  name: '',
  components: { ChatAppVue },
  data() { },
  computed: {
    ...mapWritableState(useUserStore, {
      isLogin: 'isLogin',
      username: 'username',
      id:'id'

    })
  },
  methods: {
    ...mapActions(useUserStore, {
      getUser: 'getUser'
    })
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
      this.getUser()
    }
  },
  updated() {
    if (localStorage.getItem('access_token')) {
      this.getUser()
    }
  }
}
</script>

<template>
  <ChatAppVue />

  <RouterView />
</template>

<style>
/* body {
  background-image: url('./assets/Elden-ring-background-page.png');
} */
</style>
  