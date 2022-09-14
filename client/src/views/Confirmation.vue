<script>
import {mapActions, mapWritableState} from 'pinia';
import {useCounterStore} from '../stores/counter';

export default {
    methods: {
        ...mapActions(useCounterStore, ['confirmationHandler'])
    },
    computed: {
        ...mapWritableState(useCounterStore, ['isVerified'])
    },
    watch: {
        "$route.params.token": {
            handler(token) {
                this.confirmationHandler(token);
            },
            immediate: true,
        },
    },
};
</script>
<template>
    <main class="page-wrapper pt-5">
        <!-- Page content-->
        <div
            class="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5 mt-5"
        >
            <div class="card card-light card-body" style="max-width: 940px">
                <div class="row mx-0 align-items-center">
                    <h5 v-if="!$route.params.token" class="text-white">
                        Please check your email and verify your account
                    </h5>
                    <h5 v-if="isVerified" class="text-white">Your account is now verified! Login <router-link to="/login">here</router-link></h5>
                </div>
            </div>
        </div>
    </main>
</template>
