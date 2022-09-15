<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    methods: {
        ...mapActions(useCounterStore, ['loginAction']),
    }
}
</script>

<template>
    <div class="vh-100 align-items-center"
        style="background-image: url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8fA%3D%3D&w=1000&q=80');">
        <div class="d-flex vh-100 align-items-center justify-content-center">
            <div class="row">
                <div class="text-center" style="width: 18rem;">
                    <div class="card-body">
                        <h1 class="card-title mb-0" style="font-size: 50px"><b>MUSICALI</b></h1>
                        <p class="card-text mb-3">Music Playlists & Events</p>
                        <a @click.prevent="loginAction" href="#" class="btn btn-outline-dark p-2">Masuk dengan Spotify</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>