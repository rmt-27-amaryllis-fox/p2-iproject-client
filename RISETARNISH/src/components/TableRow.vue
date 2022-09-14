<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'

export default {
  name: 'Table Row',
  props: ['weapon', 'armor', 'shield', 'talisman'],
  components: { },
  data() { },
  computed: { },
  methods: {
    phy() {
      if(this.weapon.name != 'Serpentbone Blade') {
        return this.weapon.attack.filter(el => el.name == 'Phy')[0].amount
      }
    },
    mag() {
      if (this.weapon.name != 'Crescent Moon Axe') {
        return this.weapon.attack.filter(el => el.name == 'Mag')[0].amount
      }
    },
    fire() {
      return this.weapon.attack.filter(el => el.name == 'Fire')[0].amount
    },
    ligt() {
      if (this.weapon.name != 'Grave Scythe') {
        return this.weapon.attack.filter(el => el.name == 'Ligt')[0].amount
      }
    },
    holy() {
      return this.weapon.attack.filter(el => el.name == 'Holy')[0].amount
    },
    crit() {
      return this.weapon.attack.filter(el => el.name == 'Crit')[0].amount
    },
    scalesWith() {
      let scaling = ''
      this.weapon.scalesWith.map(el => {
        if (el.name == '-') {
          scaling = '-'
        } else {
          scaling += `${el.name}: ${el.scaling}\n`
        }
      });
      return scaling
    }
  },
  created() {
  },
}
</script>

<template>
  <tr v-if="weapon">
    <th scope="row"><img :src="weapon.image" class="img-fluid"></th>
    <td>{{ weapon.name }}</td>
    <td>{{ phy() }}</td>
    <td v-if="weapon.category !== 'Straight Sword'">{{ mag() }}</td>
    <td>{{ fire() }}</td>
    <td>{{ ligt() }}</td>
    <td>{{ holy() }}</td>
    <td>{{ crit() }}</td>
    <td>{{ scalesWith() }}</td>
    <td>{{ weapon.weight }}</td>
  </tr>

  <tr v-else-if="armor">
    <th scope="row"><img :src="armor.image" class="img-fluid"></th>
    <td>{{ armor.name }}</td>
    <td>{{ armor.description }}</td>
    <td>{{ armor.weight }}</td>
  </tr>
  
  <tr v-else-if="shield">
    <th scope="row"><img :src="shield.image" class="img-fluid"></th>
    <td>{{ shield.name }}</td>
    <td>{{ shield.description }}</td>
    <td>{{ shield.weight }}</td>
  </tr>
  
  <tr v-else-if="talisman">
    <th scope="row"><img :src="talisman.image" class="img-fluid"></th>
    <td>{{ talisman.name }}</td>
    <td>{{ talisman.description }}</td>
    <td>{{ talisman.effect }}</td>
  </tr>
</template>

<style scoped>
</style>
  