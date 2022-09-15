<script>
    export default {
        methods: {
            changePage(){
                this.$router.push("/")
            }
        }
    }
</script>

<template>
    <div class="container mt-5 p-3" style="align-content:center;width: 400px;">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template text-light">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div class="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div class="error-actions">
                        <a @click="changePage" href="#" class="btn btn-primary btn-lg"><span
                                class="glyphicon glyphicon-home"></span>
                            Take Me Home </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>