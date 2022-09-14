<template>
  <div class="col-12 col-md-2">
    <div class="card m-3">
      <img :src="imageUrl + movie.poster_path" style="width: 162px;" />
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        
        <router-link :to="{name: 'detail', params: {id: movie.id}}" class="btn btn-dark mt-2" @click="detail">See
          Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useProjectStore } from '../stores/store';

export default {
  props: ['movie'],
  computed: {
    ...mapState(useProjectStore, ['imageUrl'])
  },
  methods: {
    ...mapActions(useProjectStore, ['movieById']),
    detail(){
      this.movieById(this.movie.id)
    }
  }
}
</script>