<script>
import SongCard from "../components/SongCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
    components: {
        SongCard
    },
    data() {
        return {
            track: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['search']),
        searchComponent() {
            this.search({
                track: this.track
            })
        },
        clearSearch() {
            this.track = '',
            this.songsSearch = []
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ['songsSearch'])
    }
}
</script>

<template>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row">
            <div class="col-6 mx-auto ms-4 pt-2">
                <h2 class="mb-3 mt-4"><b>CARI ALBUM</b></h2>
                <form @submit.prevent="searchComponent">
                    <div class="mb-2">
                        <input v-model="track" class="form-control me-2" type="search"
                            placeholder="Masukkan judul album">
                    </div>
                    <div class="mt-3 d-flex">
                        <button class="btn btn-dark w-100 mb-2 me-2" type="submit">Cari</button>
                        <button @click="clearSearch" class="btn btn-outline-danger w-100 mb-2" type="button">Hapus
                            Pencarian</button>
                    </div>
                </form>
            </div>
            <div class="row row-cols-1 row-cols-md-5 g-2 d-flex col-12 ms-1 me-3">
                <SongCard v-for="song in songsSearch" :key="songsSearch.id" :song="song" />
            </div>
        </div>
    </section>
</template>