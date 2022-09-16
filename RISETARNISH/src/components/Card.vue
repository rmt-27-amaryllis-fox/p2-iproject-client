<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'

export default {
  name: '',
  props: ['weapon', 'armor', 'shield'],
  components: { },
  data() { },
  computed: { },
  methods: {
    ...mapActions(useErapiStore, {
      weaponByCategory: 'weaponByCategory',
      armorByCategory: 'armorByCategory',
      shieldByCategory: 'shieldByCategory'
    }),

    async getCategoryWeap(category) {
      this.weaponByCategory(category)
    },

    async getCategoryArm(category) {
      this.armorByCategory(category)
    },

    async getCategoryShi(category) {
      this.shieldByCategory(category)
    }
  },
  created() {
  },
}
</script>

<template>
  <!-- Card -->
  <div v-if="weapon" @click="getCategoryWeap(weapon.name)" class="card col trans-col" >
    <img :src="weapon.img" class="card-img-top"  >
    <div class="card-body">
      <h5 class="card-title">{{ weapon.name }}</h5>
    </div>
  </div>
  
  <div v-else-if="armor" @click="getCategoryArm(armor.name)" class="card col trans-col" >
    <img :src="armor.img" class="card-img-top"  >
    <div class="card-body">
      <h5 class="card-title">{{ armor.name }}</h5>
    </div>
  </div>
  
  <div v-else-if="shield" @click="getCategoryShi(shield.name)" class="card col trans-col" >
    <img :src="shield.img" class="card-img-top"  >
    <div class="card-body">
      <h5 class="card-title">{{ shield.name }}</h5>
    </div>
  </div>
</template>

<style scoped>
div.card{
  cursor: pointer;
  margin-bottom: 0;
}

div.card:hover{
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
</style>
  