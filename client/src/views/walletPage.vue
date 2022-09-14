<script>
    import walletItem from '../components/walletItem.vue';
    export default {
        components : {
            walletItem
        }
    }
</script>

<template>
<div class="wallet-section">
  <div class="wallet-container">
    <div class="wallet-header">
      <h1>E-Wallet</h1>
      <h4>Total Assets : Rp. 145.876.907,-</h4>
    </div>
    <div class="assets">
        <walletItem />
    </div>
  </div>
</div>
</template>