<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'

export default {
  name: '',
  props: ['bookmark'],
  components: { },
  data() { },
  computed: { },
  methods: { },
  created() { },
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h2>{{ bookmark.title }}</h2>
      <div class="grid-4-by-4">
        <div class="card item">
          <img :src="bookmark.helmet">
        </div>
        <div class="card item">
          <img :src="bookmark.chestArmor">
        </div>
        <div class="card item">
          <img :src="bookmark.gauntlet">
        </div>
        <div class="card item">
          <img :src="bookmark.legArmor">
        </div>
      </div>
      <div class="grid-4-by-4">
        <div class="card item">
          <img :src="bookmark.rightHand">
        </div>
        <div class="card item">
          <img :src="bookmark.leftHand">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
section#home {
  margin-top: 2em;
}

div.grid-4-by-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: auto;
}

div.customize {
  margin-right: 1.5em;
  margin-left: 1.5em;
}

div.card {
  margin-bottom: 1.5em;
}
</style>
  