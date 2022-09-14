<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import ChatAppVue from './components/ChatApp.vue';
import { useUserStore } from './stores/user';

export default {
  name: '',
  components: { ChatAppVue },
  data() { },
  computed: {
    ...mapState(useUserStore, {
      username: 'username',
      id:'id'
    }),
    ...mapWritableState(useUserStore, {
      isLogin: 'isLogin'
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
  }
}
</script>

<template>
  <!-- <ChatAppVue /> -->

  <RouterView />
</template>

<style>
</style>
  