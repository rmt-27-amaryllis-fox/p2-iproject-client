<template>
  <h1>hai</h1>
  <button @click="paymentHandler">pencet buat bayar</button>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useProjectStore } from '../stores/store'

export default {
  data: () => ({

  }),
  methods: {
    ...mapActions(useProjectStore, ['payment']),
    async paymentHandler() {
      await this.payment()
      window.snap.pay(this.trans_token, {
        onSuccess: () => {
          this.$router.push('/')
        }
      })
    }
  },
  computed: {
    ...mapState(useProjectStore, ['trans_token'])
  }
}
</script>