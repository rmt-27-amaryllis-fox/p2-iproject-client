<script>
export default {
    data() {
        return {
            myLatLng: { lat: -7.330607, lng: 110.504836 },
            options: {
                types: ['(cities)']
            },
            from : '',
            to : ''
        }
    },
    methods: {
        calcRoute() {
            //create request
            let request = {
                origin: document.getElementById("from").value,
                destination: document.getElementById("to").value,
                travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
                unitSystem: google.maps.UnitSystem.METRICS
            }

            //pass the request to the route method
            this.directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    console.log(result);

                    //Get distance and time
                    const output = document.querySelector('#output');
                    output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

                    //display route
                    new google.maps.Marker({
                        position: this.myLatLng,
                        icon: './Images/marker.png',
                        map: map,
                    })

                    directionsDisplay.setDirections(result);
                } else {
                    //delete route from map
                    directionsDisplay.setDirections({ routes: [] });
                    //center map in London
                    map.setCenter(this.myLatLng);

                    //show error message
                    output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
                }
            });

        }
    },
    computed: {

    },
    mounted() {
        let mapOptions = {
            center: this.myLatLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        let map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);

        let input1 = document.getElementById("from");
        let autocomplete1 = new google.maps.places.Autocomplete(input1, this.options);

        let input2 = document.getElementById("to");
        let autocomplete2 = new google.maps.places.Autocomplete(input2, this.options);
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="container-fluid">
            <h1>Find The Distance Between Two Places.</h1>
            <p>This App Will Help You Calculate Your Travelling Distances.</p>
            <form class="form-horizontal">
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

            </form>

            <div class="col-xs-offset-2 col-xs-10">
                <button class="btn btn-info btn-lg " @click="this.calcRoute();"><i
                        class="fas fa-map-signs"></i></button>
            </div>
        </div>
        <div class="container-fluid">
            <div id="googleMap">

            </div>
            <div id="output">

            </div>
        </div>

    </div>
</template>

<style>

</style>