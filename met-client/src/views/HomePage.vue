<script>
  import { mapWritableState, mapActions } from 'pinia';
  import { useCounterStore } from "../stores/counter"
  import CardRow from '../components/CardRow.vue';
  
  export default {
    data() {
      return
      index = 1
    },
    components: {
      CardRow
    },
    methods: {
      ...mapActions(useCounterStore, ["getPainting", "logoutHandler", "fetchProducts", 'qrCode']),
      getPaintingComponent() {
        this.getPainting(this.filter, null)
      }
    },
  
    computed: {
      ...mapWritableState(useCounterStore, ["paintings", "products", "qrImage", "totalPages", "index", "isLoading"])
    },
    created() {
      this.getPainting("van gogh", null)
    }
  }
  
  
  </script>
    
  
  
  <template>
  
    <div style="align-content:center" v-if="isLoading == true" class="w-auto h-auto">
      <h2 class="text-light text-center">Loading ... <br><br>this may take up to 10 seconds</h2>
      <img style="width:auto;height:auto;opacity:0.3"
        src="https://static.vecteezy.com/system/resources/thumbnails/008/174/698/original/animation-loading-circle-icon-loading-gif-loading-screen-gif-loading-spinner-gif-loading-animation-loading-on-black-background-free-video.jpg"
        alt="loading screen">
    </div>
  
    <main v-if="isLoading === false">
      
      <div class="row">
        <div class="col-1">
          <div class="container" style="display:flex;justify-content:flex-start">
            <div class="row" style="display:flex;flex-direction:column;flex-wrap:wrap;max-width: 13em;">
              <h3 class="text-light"> Selected Artist's Collection: </h3>
              <div class="row-2 mb-2">
                <select class="form-select" v-model="filter" @change="getPaintingComponent(value)">
                  <option value="" selected disabled>Apply Filter</option>
                  <option value="Vincent Van Gogh">Vincent Van Gogh</option>
                  <option value="Rembrandt">Rembrandt</option>
                  <option value="Cezanne">Cezanne</option>
                  <option value="Da Vinci">Da Vinci</option>
                  <option value="Vermeer">Vermeer</option>
                </select>
              </div>
            </div>
          </div>
          <div class="container" style="display:flex;justify-content:flex-start">
            <div class="row" style="display:flex;flex-direction:column;flex-wrap:wrap;max-width: 15em;">
              <h3 class="text-light"> Culture: </h3>
              <div class="row-2">
                <select class="form-select" v-model="filter" @change="getPaintingComponent(value)">
                  <option value="" selected disabled>Apply Filter</option>
                  <option value="africa">African Culture</option>
                  <option value="american">American</option>
                  <option value="asian">Asian Culture</option>
                  <option value="europe">European</option>
                </select>
              </div>
            </div>
          </div>
       
        </div>
        
  
        <div class="col">
          <h4 class="text-white justify-content-center"
          style="background-color: rgba(0,0,0,0.5);font-family:monospace;margin:auto;text-align:center; font-size:15px;width: 50%;text-align: center;">You may purchase a replica of the artwork. All funds received from sales of replica will be used to conserve our collections at the museum</h4>
          <h1 style="font-family:monospace" class="text-center text-light mt-5" v-if="this.filter">Arts Related to
            {{this.filter}}</h1>
          <h1 style="font-family:monospace" class="text-center text-light mt-5" v-if="!this.filter">Our
            Collection{{this.filter}}</h1>
  
          <div style="display:flex;flex-wrap:wrap;justify-content:space-around;width:80%;margin:auto"
            class="my-4 border-top pt-5">
            <CardRow v-for="(painting, index) in paintings" :key="index" :painting="painting" />
          </div>
        </div>
      </div>
  
  
  
  
    </main>
  
  </template>
      
      
  <style scoped>
  img {
    max-width: 100%;
  }
  </style>