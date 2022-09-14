<script>
    import { mapState, mapActions } from 'pinia';
    import { useUserStore } from '../stores/user';
    import { useCoinStore } from '../stores/coin';
    export default {
      computed : {
        ...mapState(useUserStore, ['isLoggedIn']),
        ...mapState(useCoinStore, ['rupiahValue'])
      },
      props : ['coin'],
      methods : {
        ...mapActions(useCoinStore, ['getOneCoin', 'getCurrentIDRPrice'])
      },
      created(){
        this.getCurrentIDRPrice()
      }
    }
</script>

<template>
    <div class="col">
      <div class="card">
        <img :src="coin.iconUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{coin.name}}</h5>
          <p class="card-text">Price : <b>Rp. {{(coin.price * rupiahValue).toLocaleString('ID', 'id', {type : 'currency', currency : 'IDR'})}}</b></p>
          <button class="btn btn-primary" @click="getOneCoin(coin.uuid)" v-if="isLoggedIn">Buy</button>
        </div>
      </div>
    </div>
</template>