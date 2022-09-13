<script>
export default {};
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
                        <h2 class="h3 text-light mb-4 mb-sm-5">
                            Hey there!<br />Welcome back.
                        </h2>
                        <img
                            class="d-block mx-auto"
                            src="./img/signin-dark.svg"
                            width="344"
                            alt="Sign in"
                        />
                        <div class="text-light mt-4 mt-sm-5">
                            <span class="opacity-60"
                                >Don't have an account? </span
                            ><a
                                @click.prevent="$router.push('/register')"
                                class="text-light"
                                href=""
                                >Sign up here</a
                            >
                        </div>
                    </div>
                    <div
                        class="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"
                    >
                        <a
                            id="fb-login"
                            class="btn btn-outline-info w-100 mb-3"
                            href="#"
                            ><i class="bi bi-facebook me-2"></i>Sign in with
                            Facebook</a
                        >
                        <div class="d-flex align-items-center py-3 mb-3">
                            <hr class="hr-light w-100" />
                            <div class="text-light opacity-70 px-3">Or</div>
                            <hr class="hr-light w-100" />
                        </div>
                        <form class="needs-validation" novalidate="">
                            <div class="mb-4">
                                <label
                                    class="form-label text-light mb-2"
                                    for="signin-email"
                                    >Email address</label
                                >
                                <input
                                    class="form-control form-control-light"
                                    type="email"
                                    id="signin-email"
                                    placeholder="Enter your email"
                                    required=""
                                />
                            </div>
                            <div class="mb-4">
                                <div
                                    class="d-flex align-items-center justify-content-between mb-2"
                                >
                                    <label
                                        class="form-label text-light mb-0"
                                        for="signin-password"
                                        >Password</label
                                    >
                                </div>
                                <div class="password-toggle">
                                    <input
                                        class="form-control form-control-light"
                                        type="password"
                                        id="signin-password"
                                        placeholder="Enter password"
                                        required=""
                                    />
                                </div>
                            </div>
                            <button
                                class="btn btn-primary btn-lg w-100"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
