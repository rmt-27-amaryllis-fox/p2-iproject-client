<script>
export default {
    props: {
        artist: Object
    }
};
</script>
        
<template>
    <div class="col p-1">
        <div class="card h-100 col-12 rounded-4" style="background-color: #292823;">
            <!-- <img src="artist.image" class="card-img-top"> -->
            <!-- <div class="card-body mb-0"> -->
                <h6 class="card-title text-light py-2 ps-2 mt-1">{{artist.Name}}</h6>
            <!-- </div> -->
        </div>
    </div>
</template>