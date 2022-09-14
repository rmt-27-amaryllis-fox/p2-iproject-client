<script>
    import { mapWritableState, mapActions } from 'pinia';
    import { useCoinStore } from '../stores/coin';
    export default {
      computed : {
        ...mapWritableState(useCoinStore, ['coinToBuy', 'quantity', 'rupiahValue'])
      },
      methods : {
        ...mapActions(useCoinStore, ['buyCoin', 'getCurrentIDRPrice', 'getOneCoin'])
      },
      created(){
        this.getCurrentIDRPrice()
      },
      watch : {
        "$route.params.uuid" : {
          handler(value){
            this.getOneCoin(value)
          },
          immediate : true
        }
      }


    }
</script>

<template>
<div class="add-coin">
    <div class="add-container">
      <h1>Buy Coin</h1>
      <form action="" @submit.prevent="buyCoin(coinToBuy.coin.uuid)">
        <div class="form-buy">
          <label for="">Coin Name</label>
          <input type="text" name="name" :value="coinToBuy.coin.name" readonly>
        </div>

        <div class="form-buy">
          <label for="">Coin Price</label>
          <input type="text" name="number" :value="(coinToBuy.coin.price * rupiahValue).toLocaleString('id', 'ID', {type : 'currency', currency : 'IDR'})" readonly>
        </div>

        <div class="form-buy">
          <label for="">Coin Quantity</label>
          <input type="number" name="quantity" placeholder="Input the amount you wanna buy !" v-model="quantity">
        </div>

        <button type="submit" class="form-btn buy">Buy</button>
      </form>
    </div>
</div>

</template>