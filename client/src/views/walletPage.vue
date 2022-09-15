<script>
    import walletItem from '../components/walletItem.vue';
    import { mapState, mapActions } from 'pinia';
    import { useCoinStore } from '../stores/coin';
    export default {
        components : {
            walletItem
        },
        computed : {
          ...mapState(useCoinStore, ['myWallet', 'sumPrice', 'convertToIdr'])
        },
        methods : {
          ...mapActions(useCoinStore, ['fetchMyWallet'])
        },
        created(){
          this.fetchMyWallet()
        }
    }
</script>

<template>
<div class="wallet-section">
  <div class="wallet-container">
    <div class="wallet-header">
      <h1>E-Wallet</h1>
    </div>
    <div class="assets">
        <walletItem v-for="wallet in myWallet" :key="wallet.id" :wallet="wallet" />
    </div>

    <h5>Total Assets : <span class="right">Rp. {{convertToIdr}},-</span></h5>
  </div>
</div>
</template>