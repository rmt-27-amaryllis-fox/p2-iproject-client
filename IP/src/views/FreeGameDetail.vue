<script>
import FreeGameCard from "../components/FreeGameCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useFreeToGamesStore } from "../stores/freegame";

export default {
  components: {
    FreeGameCard,
  },
  computed: {
    ...mapWritableState(useFreeToGamesStore, ["game"])
  },
  methods: {
    ...mapActions(useFreeToGamesStore, ["fetchById"]),
  },
  async created() {
    this.fetchById(this.$route.params.id)
  },
};
</script>

<template>
  <section class="main-detail my-3">

<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">

                    <div class="container">
                        <h4 class="mx-auto font-weight-bolder mb-4">{{game.title}} - {{game.genre}}</h4>
                        <div class="row">

                            <div class="col-10 md">
                                <img :src="game.thumbnail" class="img-fluid" alt="Responsive image">

                                <div class="col mx-auto my-auto">
                                    <h3 class="font-weight-bolder"> {{  }} </h3>
                                    
                                </div>

                                <div class="col mx-auto my-auto">
                                    
                                </div>

                                <hr class="my-2">

                                <div class="col mx-auto my-auto">
                                    <p>
                                        <h5 class="font-weight-bolder">Release Date: &nbsp</h5>
                                        <span>{{game.release_date}}</span>
                                    </p>
                                </div>

                                <hr class="my-2">

                                <div class="col mx-auto my-auto">
                                    <h5 class="font-weight-bolder">Description: &nbsp</h5>
                                    <p>{{ game.description }}</p>
                                </div>

                                <hr class="my-2">

                                <div class="col mx-auto my-auto">
                                    <h5 class="font-weight-bolder">Publisher: &nbsp</h5>
                                    <span>{{ game.publisher }}</span>
                                </div>

                                <hr class="my-2"/>

                                <div class="col mx-auto my-auto">
                                    <h5 class="font-weight-bolder">Developer: &nbsp</h5>
                                    <span>{{ game.developer }}</span>
                                </div>

                                <hr class="my-2">

                                <div class="col mx-auto my-auto">
                                    <h5 class="font-weight-bolder">Minimum System Requirements: &nbsp</h5>
                                    <div>
                                        <p v-for="(v, k) in game.minimum_system_requirements">
                                            {{k.toUpperCase()}} : {{v}}
                                        </p>
                                    </div>
                                </div>

                                <hr class="my-2">

                                <div class="col mx-auto my-auto asd">
                                    <h5 class="font-weight-bolder">Game Screenshots: &nbsp</h5>
                                    <div class="row text-center text-lg-left">
                                     <div class="col-lg-4" v-for="img in game.screenshots"> 
                                        <a href="" data-lity="" class="d-block mb-3 h-100" alt=""> 
                                            <img width="250" class="thumb-gallery shadow-sm rounded" :src="img.image" alt=""> 
                                        </a> 
                                    </div>
                                 </div>
                                </div>

                                <div class="col">
                                        <div class="form-group row mt-3">
                                            <div class="col mt-2 text-center">
                                                <router-link to="/">
                                                    <a  class="btn btn-sm btn-outline-primary mx-3" name = "button">Back</a>
                                                </router-link> 
                                                
                                                <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                :href="game.game_url"
                                                type="button"
                                                class="btn btn-sm btn-outline-secondary"
                                                >
                                                Download
                                                </a> 
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

</section>
</template>
