<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import SearchCard from "../components/SearchCard.vue";

export default {
    computed: {
        ...mapWritableState(useCounterStore, ["searchData"]),
    },
    methods: {
        ...mapActions(useCounterStore, ["search"]),
    },
    created() {
        this.searchData;
    },
    components: { SearchCard },
    watch: {
        "$route.params.query": {
            handler(query) {
                this.search(query);
            },
            immediate: true,
        },
    },
};
</script>
<template>
    <main class="page-wrapper" v-if="searchData.total_pages > 0">
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 mb-md-4 py-5">
            <div class="row py-md-1">
                <!-- Movie grid view-->
                <div class="col-lg-12">
                    <p>
                        You search "{{
                            $route.params.query.split("+").join(" ")
                        }}"
                    </p>
                    <!-- Page Content-->
                    <div class="row">
                        <!-- Item-->
                        <SearchCard
                            v-for="(s, idx) in searchData.results"
                            :key="idx"
                            :s="s"
                        />
                        
                    </div>
                    <!-- Pagination-->
                    
                </div>
            </div>
        </div>
    </main>
    <main class="page-wrapper" v-if="searchData.total_pages < 1">
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 mb-md-4 py-5">
            <div class="row py-md-1">
                <!-- Movie grid view-->
                <div class="col-lg-12">
                    <p>
                        You search "{{
                            $route.params.query.split("+").join(" ")
                        }}"
                    </p>
                    <!-- Page Content-->
                    <div class="row">
                        <!-- Item-->
                        <h3 class="text-white">Sorry.. We couldn't find what you were looking for</h3>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
