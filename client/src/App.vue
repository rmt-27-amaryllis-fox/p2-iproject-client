<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from './stores/customer';
export default {
  components:{

  },
  created(){
    if(localStorage.getItem('access_token')){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
  },
  computed:{
      ...mapWritableState(useCustomerStore, ['isLogin'])
  },
  methods:{

  },
}
</script>

<template>
  <RouterView />
</template>

