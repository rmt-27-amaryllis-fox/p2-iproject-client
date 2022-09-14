<script>
import { GoogleMap, Marker, Polyline } from "vue3-google-map";
import polyline from 'google-polyline'
import markerIcon from '../assets/marker.png'
import axios from 'axios'

export default {
    components: {
        GoogleMap, Marker, Polyline
    },
    data() {
        return {
            center: { lat: -7.330607, lng: 110.504836 },
            coordinates: [],
            testvalfrom: [-7.332980, 110.505412],
            testvalto: [-6.995425, 110.433827],
            mapkey: 0,
            map: {},
            weathers: [],
            from: '',
            to: ''
        }
    },
    methods: {
        async getDirections() {
            let directionsService = new google.maps.DirectionsService();

            let request = {
                // origin: document.getElementById("from").value,
                // origin: 'Semarang, Semarang City, Central Java, Indonesia',
                // destination: "Salatiga, Salatiga City, Central Java, Indonesia",
                origin: document.getElementById("from").value,
                destination: document.getElementById("to").value,
                travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
                unitSystem: google.maps.UnitSystem.METRIC
            }

            return new Promise(resolve => directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {

                    // console.log(polyline.decode(result.routes[0].overview_polyline))
                    resolve(result)
                } else {
                    console.log(result);
                    console.log('distance gak ada');
                }
            }))



        },
        async findRoute() {
            let directionsDisplay = new google.maps.DirectionsRenderer();

            //bind the DirectionsRenderer to the map
            directionsDisplay.setMap(this.map);

            let data = await this.getDirections()
            this.coordinates = polyline.decode(data.routes[0].overview_polyline)

            await this.findWeather()

            for (const place of this.weathers) {
                console.log(place);

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
            console.log(data);
        },
        async findWeather() {
            let endpoints = []

            endpoints = this.markerPlaces.map(el => {
                return `https://api.openweathermap.org/data/2.5/weather?lat=${el.lat}&lon=${el.lng}&appid=5cf54e85c09dd02570b609fdb8142ddc&units=metric`
            })

            let response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))

            this.weathers = response.map(el => el.data)

            // console.log(this.weathers);

        }
    },
    computed: {
        polylineOptions() {
            let path = this.coordinates.map(el => {
                return { lat: el[0], lng: el[1] }
            })

            console.log(path);

            let travelpath = {
                path: path,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
            }

            return { center: this.center, travelpath }
        },
        markerPlaces() {
            let result = [];
            let parts = 6;
            const array = [...this.coordinates]
            for (let i = parts; i > 0; i--) {
                result.push(array.splice(0, Math.ceil(array.length / i)));
            }

            result = result.map(el => {
                let coordinates = el[el.length - 1]
                return { lat: coordinates[0], lng: coordinates[1] }
            })
            // console.log(result);
            result.unshift({ lat: this.coordinates[0][0], lng: this.coordinates[0][1] })
            // result.push({ lat: this.coordinates[this.coordinates.length - 1][0], lng: this.coordinates[this.coordinates.length - 1][1] })
            return result;
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

        let mapOptions = {
            center: { lat: -7.330607, lng: 110.504836 },
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };

        this.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    }
}
</script>
    
<template>
    <div class="maps-input container">
        <div class="row">
            <div class="col-md-12 mb-4">
                <form class="form-horizontal" @submit.prevent="findRoute()">
                    <div class="form-group">
                        <label for="from" class="col-xs-2 control-label"><i class="far fa-dot-circle"></i></label>
                        <div class="col-xs-4">
                            <input type="text" id="from" v-model="from" placeholder="Origin" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">

                        <label for="to" class="col-xs-2 control-label"><i class="fas fa-map-marker-alt"></i></label>
                        <div class="col-xs-4">
                            <input type="text" id="to" v-model="to" placeholder="Destination" class="form-control">
                        </div>

                    </div>

                    <button class="btn btn-primary mt-3" type="submit">Check Weather</button>

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

    <div class="container weather-report d-flex justify-content-center">
        <div class="row mt-5 d-flex justify-content-center">
            <div class="col-md-3 mt-2 mb-2" v-for="(weather, idx) in this.weathers" :key="idx" style="width: 18rem;">
                <div class="card">
                    <img class="card-img-top"
                        :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Weather at {{ weather.name }}</h5>
                        <p class="card-text">Coordinates : [{{ weather.coord.lat }}, {{ weather.coord.lon }}]</p>
                        <p class="card-text">Weather : {{ weather.weather[0].main }}, {{ weather.weather[0].description
                        }}</p>
                        <p class="card-text">Temperature : {{ weather.main.temp }}</p>
                        <p class="card-text">Temperature : {{ weather.main.temp }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
    
<style scoped>

</style>
    