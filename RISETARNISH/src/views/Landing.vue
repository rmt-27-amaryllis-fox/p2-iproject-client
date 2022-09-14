<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import Login from './Login.vue'

export default {
  name: '',
  components: { Login },
  data() { },
  computed: { },
  methods: { },
  created() { },
}
</script>

<template>
  <!-- Landing Page -->
  <section id="landing-page">
    <div class="container-landing">
      <div id="landing">
        <img src="../assets/logo.png">
        <p>
          <br>
          The Golden Order has been broken.<br><br>Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.<br><br>In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.<br><br>Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.<br><br>And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.<br><br>And become the Elden Lord.
          
        </p>
        
        <div class="btn-add">
          <router-link to="/weapon">RISE TARNISHED</router-link>
        </div>

      </div>
      <div id="container-trailer">
        <video loop muted autoplay >
          <source src="../assets/elden-ring-autoplay-launch-trailer.mp4">
        </video>
      </div>
    </div>
  </section>
</template>

<style>
</style>
  