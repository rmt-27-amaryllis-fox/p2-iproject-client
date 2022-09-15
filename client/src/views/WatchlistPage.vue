<script>
import {mapActions, mapWritableState} from 'pinia';
import {useCounterStore} from '../stores/counter';
import WatchlistCard from '../components/WatchlistCard.vue';

    export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchWatchlist"])
    },
    computed: {
        ...mapWritableState(useCounterStore, ["watchlists"])
    },
    created() {
        this.fetchWatchlist();
    },
    components: { WatchlistCard }
}
</script>
<template>
    <main class="page-wrapper pt-4">
        <!-- Page content-->
        <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
            <!-- Page content-->
            <div class="row">
                <!-- Content-->
                <div
                    class="d-flex mb-4 pb-2"
                >
                    <h1 class="h2 text-light">
                        Watchlist<span
                            class="badge bg-faded-light fs-base align-middle ms-2 mb-1"
                            >{{watchlists.length}}</span
                        >
                    </h1>
                </div>
                <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
                    <!-- Item-->
                    <WatchlistCard v-for="w in watchlists" :key="w.id" :w="w" />
                </div>
            </div>
        </div>
    </main>
</template>
