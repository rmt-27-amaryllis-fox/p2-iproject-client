<script>
import {mapActions} from 'pinia';
import {useCounterStore} from '../stores/counter';

export default {
    methods: {
        ...mapActions(useCounterStore, ['registerHandler']),
        localRegisterHandler() {
            this.registerHandler({
                fullname: this.fullname,
                email: this.email,
                password: this.password
            })
        }
    },
    data() {
        return {
            fullname: "",
            email: "",
            password: ""
        }
    }
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
                    <div class="col-md-6 border-end-md border-light p-2 p-sm-5">
                        <img
                            class="d-block mx-auto"
                            src="./img/signup-dark.svg"
                            width="344"
                            alt="Illustartion"
                        />
                        <div class="text-light mt-sm-4 pt-md-3">
                            <span class="opacity-60"
                                >Already have an account? </span
                            ><a
                                class="text-light"
                                href=""
                                @click.prevent="$router.push('/login')"
                                >Sign in</a
                            >
                        </div>
                    </div>
                    <div
                        class="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"
                    >
                        <form @submit.prevent="localRegisterHandler">
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="signup-name"
                                    >Full name</label
                                >
                                <input
                                    class="form-control form-control-light"
                                    type="text"
                                    id="signup-name"
                                    placeholder="Enter your full name"
                                    required=""
                                    v-model="fullname"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="signup-email"
                                    >Email address</label
                                >
                                <input
                                    class="form-control form-control-light"
                                    type="email"
                                    id="signup-email"
                                    placeholder="Enter your email"
                                    required=""
                                    v-model="email"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="signup-password"
                                    >Password
                                    <span class="fs-sm opacity-50"
                                        >min. 8 char</span
                                    ></label
                                >
                                <div class="password">
                                    <input
                                        class="form-control form-control-light"
                                        type="password"
                                        id="signup-password"
                                        minlength="8"
                                        required=""
                                        v-model="password"
                                    />
                                </div>
                            </div>
                            <button
                                class="btn btn-primary btn-lg w-100"
                                type="submit"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
