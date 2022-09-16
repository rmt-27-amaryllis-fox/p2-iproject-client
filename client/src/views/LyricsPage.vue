<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
    data() {
        return {
            artist: '',
            song: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['searchLyrics']),
        searchLyricsComponent() {
            this.searchLyrics({
                artist: this.artist,
                song: this.song
            })
        },
        clearSearch() {
            this.artist = '',
            this.song = '',
            this.lyrics = ''
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ['lyrics'])
    }
}
</script>
    
<template>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row">
            <div class="col-4 mx-auto ms-4 pt-2">
                <h2 class="mb-3 mt-4"><b>SEARCH LYRICS</b></h2>
                <form @submit.prevent="searchLyricsComponent">
                    <div class="mb-2">
                        <input v-model="artist" class="form-control me-2" type="search" placeholder="Enter artist">
                    </div>
                    <div class="mb-2">
                        <input v-model="song" class="form-control me-2" type="search" placeholder="Enter song title">
                    </div>
                    <div class="mt-3 d-flex">
                        <button class="btn btn-dark w-100 mb-2 me-2" type="submit">Search</button>
                        <button @click="clearSearch" class="btn btn-outline-danger w-100 mb-2" type="button">Clear
                            Search</button>
                    </div>
                </form>
            </div>

        </div>
    </section>
</template>