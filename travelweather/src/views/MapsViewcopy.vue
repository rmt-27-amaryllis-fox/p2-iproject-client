<script>
import { GoogleMap, Marker, Polyline } from "vue3-google-map";
import polyline from 'google-polyline'

export default {
    components: {
        GoogleMap, Marker, Polyline
    },
    data() {
        return {
            // center: { lat: 0, lng: -180 },
            center: { lat: -7.330607, lng: 110.504836 },
            coordinates: [],
            testvalfrom: [-7.332980, 110.505412],
            testvalto: [-6.995425, 110.433827],
            mapkey: 0
        }
    },
    methods: {
        async getDirections() {
            let directionsService = new google.maps.DirectionsService();

            let request = {
                // origin: document.getElementById("from").value,
                origin: 'Semarang, Semarang City, Central Java, Indonesia',
                destination: "Salatiga, Salatiga City, Central Java, Indonesia",
                travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
                unitSystem: google.maps.UnitSystem.METRIC
            }

            return new Promise(resolve => directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    // console.log(result.routes[0].overview_polyline);

                    console.log(polyline.decode(result.routes[0].overview_polyline))
                    resolve(polyline.decode(result.routes[0].overview_polyline))
                } else {
                    console.log(result);
                    console.log('distance gak ada');
                }
            }))



        },
        async findRoute() {
            let data = await this.getDirections()
            this.coordinates = data
            console.log(data);
            this.mapkey += 1
        }
    },
    computed: {
        // polylineCenter(){
        //     let center = {
        //         lat : this.coordinates[Math.round((arr.length - 1) / 2)][0],
        //         lng : this.coordinates[Math.round((arr.length - 1) / 2)][1]
        //     }
        //     return center;
        // },
        polylineOptions() {
            // let center = {
            //     lat : this.coordinates[Math.round((this.coordinates.length - 1) / 2)][0],
            //     lng : this.coordinates[Math.round((this.coordinates.length - 1) / 2)][1]
            // }

            // console.log(center);
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
            return this.center
            // if (this.coordinates.length == 0) {


            //     let sixth = Math.floor(this.coordinates.length / 3)
            //     // console.log(this.coordinates[sixth]);
            //     console.log({ lat: this.coordinates[sixth][0], lng: this.coordinates[sixth][1] });

            //     let maps = [
            //         { lat: this.coordinates[sixth][0], lng: this.coordinates[sixth][1] },
            //         { lat: this.coordinates[sixth * 2][0], lng: this.coordinates[sixth * 2][1] },
            //         // { lat : this.coordinates[sixth*3][0], lng : this.coordinates[sixth*3][1] },
            //     ]

            //     // console.log(maps);

            //     return maps
            //     // console.log(res);
            // }

            // else {
            //     return this.center
            // }
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

    }
}
</script>
    
<template>
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-5">
                <form class="form-horizontal" @submit.prevent="findRoute()">
                    <div class="form-group">
                        <label for="from" class="col-xs-2 control-label"><i class="far fa-dot-circle"></i></label>
                        <div class="col-xs-4">
                            <input type="text" id="from" placeholder="Origin" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">

                        <label for="to" class="col-xs-2 control-label"><i class="fas fa-map-marker-alt"></i></label>
                        <div class="col-xs-4">
                            <input type="text" id="to" placeholder="Destination" class="form-control">
                        </div>

                    </div>

                    <button class="btn btn-primary mt-3" type="submit">Check Weather</button>

                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <GoogleMap :key="mapkey" api-key="AIzaSyC_tFvkHTdpppU9s_BDHD6chPOec-mHiFE"
                    style="width: 100%; height: 500px" :center="center" :zoom="10" mapTypeId="roadmap">
                    <Marker v-if="this.coordinates" v-for="(coordinate,idx) in markerPlaces" :key="idx"
                        :options="{ position: coordinate }" />
                    <Polyline :options="polylineOptions" />
                </GoogleMap>
            </div>
        </div>

    </div>


</template>
    
<style scoped>

</style>
    