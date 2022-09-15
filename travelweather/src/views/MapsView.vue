<script>
import { GoogleMap, Marker, Polyline } from "vue3-google-map";
import polyline from 'google-polyline'
import axios from 'axios'
import { mapState, mapWritableState } from "pinia";
import { useMapStore } from "../stores/map"

export default {
    components: {
        GoogleMap, Marker, Polyline
    },
    data() {
        return {
            center: { lat: -7.330607, lng: 110.504836 },
            map: {},
            weathers: [],
            baseUrl : `http://localhost:3000`
        }
    },
    methods: {
        async getDirections() {
            let directionsService = new google.maps.DirectionsService();

            let request = {
                origin: document.getElementById("from").value,
                destination: document.getElementById("to").value,
                travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
                unitSystem: google.maps.UnitSystem.METRIC
            }

            return new Promise((resolve, reject) => directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    resolve(result)
                } else {
                    reject(`Cannot get direction data`)
                }
            }))
        },
        async findRoute() {
            try {
                this.map = new google.maps.Map(document.getElementById('googleMap'), this.mapOptions);

                let directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });

                directionsDisplay.setMap(this.map);

                let data = await this.getDirections()

                this.mapsdata = data
                this.coordinates = polyline.decode(data.routes[0].overview_polyline)

                await this.findWeather()

                for (const place of this.weathers) {
                    const icon = {
                        url: `http://openweathermap.org/img/wn/${place.weather[0].icon}@2x.png`, // url
                        scaledSize: new google.maps.Size(50, 50), // scaled size
                    };

                    new google.maps.Marker({
                        position: { lat: place.coord.lat, lng: place.coord.lon },
                        icon: icon,
                        map: this.map,
                    })
                }

                directionsDisplay.setDirections(data);
            } catch (error) {
                Swal.fire({
                    title: "Error rendering routes",
                    icon: 'error'
                })
            }

        },
        async findWeather() {
            try {
                let { data } = await axios({
                    url: this.baseUrl + `/weathers`,
                    method: 'post',
                    data: {
                        coord: this.markerPlaces
                    }
                })

                this.weathers = data

            } catch (error) {
                Swal.fire({
                    title: error.response.data.message,
                    text: 'Error Code ' + error.response.status,
                    icon: 'error'
                })
            }
        }
    },
    computed: {
        ...mapWritableState(useMapStore, ["mapsdata", "mapOptions", "coordinates"]),
        ...mapState(useMapStore, ["markerPlaces"]),
        getDateFromUnix() {
            return new Date(this.weathers[0].dt * 1000).toLocaleDateString("id-ID") + ' ' + new Date(this.weathers[0].dt * 1000).toLocaleTimeString()
        }
    },
    mounted() {
        let options = {
            types: ['(cities)']
        }
        let input1 = document.getElementById("from");
        let autocomplete1 = new google.maps.places.Autocomplete(input1, options);

        let input2 = document.getElementById("to");
        let autocomplete2 = new google.maps.places.Autocomplete(input2, options);

        this.map = new google.maps.Map(document.getElementById('googleMap'), this.mapOptions);

        document.getElementById('from').value= ''
        document.getElementById('to').value=''
    }
}
</script>
    
<template>
    <div class="maps-input container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12 mb-4">
                <h1 class="mb-4">Check your trip weather here...</h1>
                <form class="form-horizontal" @submit.prevent="findRoute()">
                    <div class="form-outline mb-3">
                        <input type="text" id="from" class="form-control" />
                        <label class="form-label" for="from">Origin</label>
                        <div class="form-notch">
                            <div class="form-notch-leading" style="width: 9px;"></div>
                            <div class="form-notch-middle" style="width: 87.2px;"></div>
                            <div class="form-notch-trailing"></div>
                        </div>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="text" id="to" class="form-control" />
                        <label class="form-label" for="to">Destination</label>
                        <div class="form-notch">
                            <div class="form-notch-leading" style="width: 9px;"></div>
                            <div class="form-notch-middle" style="width: 87.2px;"></div>
                            <div class="form-notch-trailing"></div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary btn-lg mt-3" type="submit">Check Weather</button>
                        <button @click.prevent="this.$router.push('/forecast')" :disabled="coordinates.length === 0"
                            class="btn btn-secondary mt-3">Forecast Weather</button>
                    </div>


                </form>
            </div>
            <div class="col-md-12">
                <div class="col-md-12">
                    <div id="googleMap" style="height: 500px; width: 1296px;">

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="this.mapsdata.routes && this.weathers.length !== 0" class="container">
        <div class="container d-flex flex-column align-items-center mb-5">
            <h1>Your travel report</h1>
            <h3>Driving Distance: {{ this.mapsdata.routes[0].legs[0].distance.text }}</h3>
            <h3>Driving Duration: {{ this.mapsdata.routes[0].legs[0].duration.text }}</h3>
        </div>
        <div class="container weather-report">
            <div class="container  d-flex justify-content-center">
                <h1>Weather at {{ getDateFromUnix }}</h1>
            </div>
            <div class="row mt-5 d-flex justify-content-center">
                <div class="col-md-3 mt-2 mb-4" v-for="(weather, idx) in this.weathers" :key="idx"
                    style="width: 18rem;">
                    <div class="card">
                        <img class="card-img-top"
                            :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                            alt="Card image cap">
                        <div class="card-body" style="height:250px;">
                            <h5 class="card-title">Weather at {{ weather.name }}</h5>
                            <p class="card-text">Coordinates : [{{ weather.coord.lat }}, {{ weather.coord.lon }}]</p>
                            <p class="card-text">Weather : {{ weather.weather[0].main }}, {{
                            weather.weather[0].description
                            }}</p>
                            <p class="card-text">Temperature : {{ weather.main.temp }}</p>
                            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>
    
<style scoped>

</style>
    