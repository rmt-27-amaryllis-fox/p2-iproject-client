<script>
import { mapState, mapActions, mapWritableState } from 'pinia'

export default {
  name: 'Sidebar',
  components: { },
  data() { },
  computed: { },
  methods: { },
  created() { },
}
</script>

<template>
  <!-- Sidebar -->
  <div class="row filter-card">
    <div class="filter-area">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Hello. </li>
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
        <li class="list-group-item">
          <a>Logout</a>
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
</style>
  