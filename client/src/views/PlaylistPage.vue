<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import PlaylistCard from "../components/PlaylistCard.vue";
export default {
    components: {
        PlaylistCard
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchPlaylist", "createPlaylist"]),
        createPlaylistComponent() {
            this.createPlaylist({
                name: this.name
            })
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ['playlists'])
    },
    created() {
        this.fetchPlaylist();
    }
}
</script>
        
<template>
    <section class="col-md-8 ms-sm-auto col-lg-10 px-md-4">
        <div class="row">
            <div class="col-12">
                <h2 class="mb-3 mt-4"><b>YOUR PLAYLISTS</b></h2>


                <div class="row row-cols-1 row-cols-md-3 d-flex col-12 ms-0 me-3 mt-4">
                    <div class="col-9 mb-3">
                        <form @submit.prevent="createPlaylistComponent" class="rounded-pill">
                            <div class="card py-2 rounded-pill border-success">
                                <div class="row align-items-center">
                                    <div class="col-7 ms-4 ps-4">
                                        <input class="w-100 border border-0 border-bottom" v-model="name"
                                            placeholder="enter playlist name">
                                    </div>
                                    <div class="col-2">
                                        <button type="submit" class="btn btn-outline-light rounded-circle -=02">
                                            <h1 class="bi bi-plus-circle-dotted text-success"></h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div class="row row-cols-1 row-cols-md-3 col-12 ms-2 me-3 mt-4">
                    <PlaylistCard v-for="playlist in playlists" :playlist="playlist" />
                </div>
            </div>
        </div>
    </section>
</template>