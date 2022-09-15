<script>
import { mapState, mapWritableState } from 'pinia';
import { useMapStore } from '../stores/map';
import axios from 'axios';

export default {
    data() {
        return {
            map: {},
            forecasts: [],
            order: 0,
            baseUrl : `http://localhost:3000`
        }
    },
    methods: {
        async forecastWeather() {
            try {
                let { data } = await axios({
                    url: this.baseUrl + `/forecasts`,
                    method: 'post',
                    data: {
                        coord: this.markerPlaces
                    }
                })

                this.forecasts = data
                console.log(this.forecasts);
            } catch (error) {
                Swal.fire({
                    title: error.response.data.message,
                    text: 'Error Code ' + error.response.status,
                    icon: 'error'
                })
            }
        },
        async setMap() {
            this.map = new google.maps.Map(document.getElementById('forecastMap'), this.mapOptions);
            let directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, map: this.map });

            for (const place of this.forecasts) {
                const icon = {
                    url: `http://openweathermap.org/img/wn/${place.list[this.order].weather[0].icon}@2x.png`, // url
                    scaledSize: new google.maps.Size(50, 50), // scaled size
                };

                new google.maps.Marker({
                    position: { lat: place.city.coord.lat, lng: place.city.coord.lon },
                    icon: icon,
                    map: this.map,
                })
            }

            directionsDisplay.setDirections(this.mapsdata);
        },
        async next() {
            this.order += 1
            await this.setMap()
        },
        async previous() {
            this.order -= 1
            await this.setMap()
        }
    },
    computed: {
        ...mapWritableState(useMapStore, ["mapsdata", "mapOptions"]),
        ...mapState(useMapStore, ["markerPlaces"]),
        getDateFromUnix() {
            return new Date(this.forecasts[0].list[this.order].dt * 1000).toLocaleDateString("id-ID") + ' ' + new Date(this.forecasts[0].list[this.order].dt * 1000).toLocaleTimeString()
        }
    },
    async mounted() {
        this.map = new google.maps.Map(document.getElementById('forecastMap'), this.mapOptions);
        let directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, map: this.map });

        await this.forecastWeather()
        this.order = 0

        console.log(this.forecasts);
        for (const place of this.forecasts) {
            // console.log(place);

            const icon = {
                url: `http://openweathermap.org/img/wn/${place.list[0].weather[0].icon}@2x.png`, // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
            };

            new google.maps.Marker({
                position: { lat: place.city.coord.lat, lng: place.city.coord.lon },
                icon: icon,
                map: this.map,
            })
        }

        directionsDisplay.setDirections(this.mapsdata);
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12 mb-5">
                <button class="btn btn-danger" @click.prevent="this.$router.push('/maps')">Get Another routes</button>
            </div>
            <div class="col-md-12">
                <div class="col-md-12">
                    <div id="forecastMap" style="height: 500px; width: 1296px;">

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container d-flex justify-content-between mt-4 mb-4">
        <button class="btn btn-primary" :disabled="this.order === 0" @click.prevent="this.previous">Previous</button>
        <button class="btn btn-primary" :disabled="this.order === 15" @click.prevent="this.next">Next</button>
    </div>

    <div v-if="this.forecasts.length !== 0" class="container weather-report">
        <div class="container  d-flex justify-content-center">
            <h1>Weather at {{ getDateFromUnix }}</h1>
        </div>
        <div class="row mt-5 d-flex justify-content-center">
            <div class="col-md-3 mt-2 mb-4" v-for="(weather, idx) in this.forecasts" :key="idx" style="width: 18rem;">
                <div class="card">
                    <img class="card-img-top"
                        :src="`http://openweathermap.org/img/wn/${weather.list[this.order].weather[0].icon}@2x.png`"
                        alt="Card image cap">
                    <div class="card-body" style="height:250px;">
                        <h5 class="card-title">Weather at {{ weather.city.name }}</h5>
                        <p class="card-text">Coordinates : [{{ weather.city.coord.lat }}, {{ weather.city.coord.lon }}]
                        </p>
                        <p class="card-text">Weather : {{ weather.list[this.order].weather[0].main }}, {{
                        weather.list[this.order].weather[0].description
                        }}</p>
                        <p class="card-text">Temperature : {{ weather.list[this.order].main.temp }}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>