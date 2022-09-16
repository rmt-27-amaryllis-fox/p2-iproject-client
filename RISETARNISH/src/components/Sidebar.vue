<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useUserStore } from '../stores/user';
import ChatApp from './ChatApp.vue';

export default {
  name: 'Sidebar',
  components: { },
  data() { },
  computed: {
    ...mapWritableState(useUserStore, {
      isLogin: 'isLogin',
      username: 'username'
    })
  },
  methods: {
    logout () {
      this.isLogin = false
      this.username = ''
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created() { },
}
</script>

<template>
  <!-- Sidebar -->
  <div class="row filter-card">
    <div class="filter-area">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <router-link to="/customize">Customize</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/weapon">Weapons</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/armor">Armors</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/shield">Shields</router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/talisman">Talismans</router-link>
        </li>
        <li v-if="isLogin" class="list-group-item">
          <a @click.prevent="logout">Logout</a>
        </li>
        <li class="list-group-item"></li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
li.list-group-item a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

div.filter-area{
  /* background: white; */
  border-radius: 5px;
  font-size: 1.2em;
}
</style>
  