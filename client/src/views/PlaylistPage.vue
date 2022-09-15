<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import PlaylistCard from "../components/PlaylistCard.vue";
export default {
    components: {
        PlaylistCard
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchPlaylist"]),
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
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row">

            <!-- New Releases -->
            <div class="col-12">
                <h2 class="mb-3 mt-4"><b>PLAYLIST</b></h2>
                <div class="row row-cols-1 row-cols-md-5 g-2 d-flex col-12 ms-1 me-3">
                    <PlaylistCard v-for="playlist in playlists" :playlist="playlist" />
                </div>
            </div>
            <!-- End New Releases -->
        </div>
    </section>
</template>