<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import ChatAppVue from './components/ChatApp.vue';

export default {
  name: '',
  components: { ChatAppVue },
  data() { },
  computed: { },
  methods: { },
  created() { },
}
</script>

<template>
  <!-- <ChatAppVue /> -->

  <RouterView />
</template>

<style>
</style>
  