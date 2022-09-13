<script>
import { mapState, mapActions, mapWritableState } from 'pinia'

export default {
  name: '',
  props: ['weapon'],
  components: { },
  data() { },
  computed: { },
  methods: { },
  created() { },
}
</script>

<template>
  <!-- Card -->
  <div class="card col trans-col" >
    <img :src="weapon.img" class="card-img-top"  >
    <div class="card-body">
      <h5 class="card-title">{{ weapon.name }}</h5>
    </div>
  </div>
  
  <div v-if="!weapon" class="card col trans-col" >
    <img src="../assets/eldenring-rune-icon.png" class="card-img-top"  >
    <div class="card-body">
      <h5 class="card-title">{{ weapon.name }}</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quaerat cumque dolore quod nobis assumenda ipsum obcaecati quidem commodi libero?.</p>
      <a href="#" class="btn btn-outline-primary mt-2">TEST</a>
      <a href="#" class="btn btn-outline-warning mt-2">TEST</a>
    </div>
  </div>
</template>

<style>
</style>
  