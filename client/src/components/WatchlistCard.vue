<script>
import {mapActions} from 'pinia';
import {useCounterStore} from '../stores/counter';

    export default {
        props: {
            w: Object
        },
        methods: {
            ...mapActions(useCounterStore, ['deleteWatchlist'])
        }
    }
</script>
<template>
    <div class="col">
        <div class="card card-light card-hover h-100">
            <div class="card-img-top card-img-hover">
                <a class="img-overlay" ></a>

                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                    <button
                        class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Remove from Watchlist"
                        data-bs-original-title="Remove from Watchlist"
                        aria-label="Remove from Watchlist"
                        @click="deleteWatchlist(w.id)"
                    >
                        <i class="bi bi-bookmark-x-fill"></i>
                    </button>
                </div>
                <img
                    :src="w.img_url"
                    alt="Image"
                />
            </div>
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between pb-1"
                >
                    <span class="fs-sm text-light me-3">{{new Date(w.release_year).getFullYear()}}</span>
                </div>
                <h3 class="h6 mb-1">
                    <a v-if="w.kind == 'movie'" @click="$router.push('/movie/' + w.movie_id)" class="nav-link-light" href="" >{{w.title}}</a>
                    <a v-else-if="w.kind == 'series'" @click="$router.push('/series/' + w.movie_id)" class="nav-link-light" href="" >{{w.title}}</a>
                </h3>
            </div>
        </div>
    </div>
</template>
