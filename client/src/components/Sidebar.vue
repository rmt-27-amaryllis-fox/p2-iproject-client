<script>
import { mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
    methods: {
        logoutAction() {
            localStorage.clear();
            this.$router.push('/login');
            this.alreadyLogin = false;
        }  
    },
    computed: {
        ...mapWritableState(useCounterStore, ['alreadyLogin'])
    }
}    
</script>

<template>
    <nav class="col-2 sidebar vh-100" style="background-color: #fad02f;">
        <div class="position-sticky pt-3 vh-100">
            <ul class="nav">
                <li class="nav-item mb-2 mt-3">
                    <RouterLink to="/" class="nav-link text-dark"><i class="bi bi-house-door me-3"></i><b>HOME</b></RouterLink>
                </li>
                <li class="nav-item mb-2">
                    <RouterLink to="/search" class="nav-link text-dark"><i class="bi bi-search me-3"></i><b>SEARCH</b></RouterLink>
                </li>
                <li class="nav-item mb-2">
                    <RouterLink to="/playlists" class="nav-link text-dark"><i class="bi bi-music-note-list me-3"></i><b>PLAYLISTS</b></RouterLink>
                </li>
                <li class="nav-item mb-2">
                    <RouterLink to="/similar" class="nav-link text-dark"><i class="bi bi-person-lines-fill me-3"></i><b>SIMILAR ARTIST</b></RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/genrenator" class="nav-link text-dark"><i class="bi bi-dice-2 me-3"></i><b>GENRENATOR</b></RouterLink>
                </li>
            </ul>
            <ul class="nav flex-column mt-4 border-top border-dark pt-4">
                <li class="nav-item">
                    <a @click.prevent="logoutAction" class="nav-link text-dark" href=""><i class="bi bi-box-arrow-right me-3"></i><b>LOG OUT</b></a>
                </li>
            </ul>
        </div>
    </nav>
</template>