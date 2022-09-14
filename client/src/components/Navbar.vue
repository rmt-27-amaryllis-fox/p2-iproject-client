<script>
import {mapWritableState} from 'pinia';
import {useCounterStore} from '../stores/counter';

    export default {
        computed: {
            ...mapWritableState(useCounterStore, ['isLogin'])
        }
    }
</script>
<template>
    <header
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        data-scroll-header=""
    >
        <div class="container">
            <a
                @click.prevent="$router.push('/')"
                class="navbar-brand me-3 me-xl-4"
                href=""
                ><img
                    class="d-block"
                    src="./img/logo.svg"
                    width="60"
                    alt="Vox8"
            /></a>
            <button
                class="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <a
                @click.prevent="$router.push('/watchlist')"
                class="btn btn-link border border-primary btn-light btn-sm btn-primary d-none d-lg-block order-lg-3 mx-2"
                href=""
                v-if="isLogin"
                ><i class="bi bi-eye me-2"></i>Watchlist</a
            >

            <a
                class="btn btn-link border border-primary btn-light btn-primary btn-sm d-none d-lg-block order-lg-3 mx-2"
                href=""
                v-if="isLogin"
                ><i class="bi bi-box-arrow-right me-2"></i>Sign Out</a
            >

            <a
                @click.prevent="$router.push('/login')"
                class="btn btn-link border border-primary btn-light btn-primary btn-sm d-none d-lg-block order-lg-3 mx-2"
                href=""
                v-if="!isLogin"
                ><i class="bi bi-person-circle me-2"></i>Sign in</a
            >

            <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
                <ul
                    class="navbar-nav navbar-nav-scroll"
                    style="max-height: 35rem"
                >
                    <!-- Menu items-->
                    <li class="nav-item">
                        <a
                            @click.prevent="$router.push('/')"
                            class="nav-link"
                            href=""
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            @click.prevent="$router.push('/movie')"
                            class="nav-link"
                            href=""
                            >Movies</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            @click.prevent="$router.push('/series')"
                            class="nav-link"
                            href=""
                            >Series</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
