<template>
  <div class="card">
    <div @click="movieById" class="card-img">
      <img :src="imageUrl + movie.poster_path"
        alt="this is image">
    </div>
    <div class="card-body">
      <h3>{{movie.title}}</h3>
      <!-- <p class="genre">Genre: {{movie.Genre.name}}</p>
      <p class="author">Author: {{movie.User.username}}</p>
      <p class="rating">Rating: {{movie.rating}}</p> -->
    </div>
    <div class="card-footer">
      <p v-if="isLogin && page !== 'bookmarks'" @click="addBookmarks">Bookmark</p>
      <span><RouterLink style="text-decoration: none; color: #827397;" :to="{name: 'detail', params: {id : movie.id}}">See Detail</RouterLink></span>
    </div>
  </div>
  
  <!-- <div class="col-12 col-md-2">
    <div class="card m-3">
      <img :src="imageUrl + movie.poster_path" style="width: 162px;" />
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        
        <router-link :to="{name: 'detail', params: {id: movie.id}}" class="btn btn-dark mt-2" @click="detail">See
          Detail</router-link>
      </div>
    </div>
  </div> -->
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
      this.$router.push(`/detail/${this.movie.id}`)
    }
  }
}
</script>