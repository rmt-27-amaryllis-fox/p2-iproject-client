<script>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>
<div class="nav-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded d-flex justify-content-center">
        <a class="navbar-brand ps-5" href="#">TravelWeather</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
            aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <RouterLink to="/maps"><a class="nav-link" href="#">Maps</a></RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</div>

</template>

<style>

</style>