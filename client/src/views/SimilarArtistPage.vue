<script>
import ArtistCard from "../components/ArtistCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
    components: {
        ArtistCard
    },
    data() {
        return {
            artist: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['searchSimilar']),
        searchSimilarComponent() {
            this.searchSimilar({
                artist: this.artist
            })
        },
        clearSearch() {
            this.track = '',
            this.artistsSearch = []
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ['artistsSearch'])
    }
}
</script>
    
<template>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row">
            <div class="col-6 mx-auto ms-4 pt-2">
                <h2 class="mb-3 mt-4"><b>CARI ARTIST SERUPA</b></h2>
                <form @submit.prevent="searchSimilarComponent">
                    <div class="mb-2">
                        <input v-model="artist" class="form-control me-2" type="search"
                            placeholder="Masukkan nama artist">
                    </div>
                    <div class="mt-3 d-flex">
                        <button class="btn btn-dark w-100 mb-2 me-2" type="submit">Cari</button>
                        <button @click="clearSearch" class="btn btn-outline-danger w-100 mb-2" type="button">Hapus
                            Pencarian</button>
                    </div>
                </form>
            </div>
            <div class="row row-cols-1 row-cols-md-5 g-2 d-flex col-12 ms-1 me-3">
                <ArtistCard v-for="artist in artistsSearch" :artist="artist" />
            </div>
        </div>
    </section>
</template>