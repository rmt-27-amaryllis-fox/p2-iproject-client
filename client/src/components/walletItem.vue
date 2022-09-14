<script>
    export default {
        props : ['wallet']
    }
</script>

<template>
    <div class="asset-card">
        <img :src="wallet.iconUrl" alt="" class="wallet-img">
        <p class="wallet-name"> {{wallet.quantity}} {{wallet.name}}</p>
        <p class="wallet-price">Rp. {{(wallet.price * wallet.quantity * 14500).toLocaleString('ID', 'id', {type : 'currency', currency : 'IDR'})}}</p>
    </div>
</template>