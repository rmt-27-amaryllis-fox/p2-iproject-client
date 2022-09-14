<script>
    import { mapState } from 'pinia';
    import { useUserStore } from '../stores/user';
    export default {
      computed : {
        ...mapState(useUserStore, ['isLoggedIn'])
      },
      props : ['coin']
    }
</script>

<template>
    <div class="col">
      <div class="card">
        <img :src="coin.iconUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{coin.name}}</h5>
          <p class="card-text">Price : <b>{{coin.price}}</b></p>
          <div class="buy-btn" v-if="isLoggedIn">
            <button type="button" class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
</template>