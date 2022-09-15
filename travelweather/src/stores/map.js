import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMapStore = defineStore("map", {
    state(){
        return{
            mapsdata:[],
            mapOptions: {
                center: { lat: -7.330607, lng: 110.504836 },
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            coordinates:[]
        }
    },
    getters:{
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
            result.unshift({ lat: this.coordinates[0][0], lng: this.coordinates[0][1] })
            
            return result;
        }
    },
    actions:{
        
    }
});
