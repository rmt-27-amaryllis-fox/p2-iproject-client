<script>
export default {
    props: {
        playlist: Object
    },
    methods: {
        detailAction(id) {
            // console.log(id)
            // this.$router.push(`/products/${id}`);
        }
    }
};
</script>
            
<template>
    <div class="col-8 mb-3">
        <div class="card py-3 rounded-pill border-success" style="background-color:#292823">
            <div class="row align-items-center">
                <div class="col-3">
                    <img src="../assets/spotify.png" alt="logo" class="mx-auto d-block" style="width: 120px" />
                </div>
                <div class="col-7 ms-4">
                    <h5 class="mb-0 text-white">{{playlist.name}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>