import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2"

const baseUrl = "http://localhost:3000/"

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({paymentToken: "",paintings: [], products: [], productById: [], page:[], filter: 0, totalPages: 0, isLogin: false, qrImage: "", isLoading: false}),
  getters: {
    doubleCount: (state) => state.count * 2,
    filterProduct(state){
      return
    }
  },
  actions: {
    increment(){
      this.count++
    },
    async purchasedItems(id){
      try {
        console.log("MASUK PURCHASED COUNTER");
        console.log(id, "ID PURCHASED");
        const {data} = axios({
          method: "POST",
          url: baseUrl + `owned/${id}`,
          headers: {
            access_token: localStorage.access_token,
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    async addFavourite(id){
      try {
        console.log("<<< MASUK COUNTER ADD");
        console.log(id, "<<<IDNYA");
        const response = await axios({
          method: "POST",
          url: baseUrl + `favourites/${id}`,
          headers: {
            access_token: localStorage.access_token
          },
        })
        console.log(response.data.trans_token);
        console.log(response, "Success add favourite");
        
        console.log(this.paymentToken, "<<<SEBELUM");
        this.paymentToken = response.data.trans_token
        console.log(this.paymentToken, "<<<SESUDAH");
        
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: 'please login first'
        })
      }
    },
    async getPainting (name, next) {
      try {
        console.log(name);
       this.isLoading = true
       const paintings = []
       const {data} = await axios({
           method: "GET",
           url: `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${name}`
       })
  
       paintings.push(data.objectIDs)
  
       let images = []
  
       for(let i=0; i<6; i++){
           let image = ``
           let id = paintings[0][i]
  
           image = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
           images.push(image)
       }
  
       let imgUrls = []
  
       for(let i = 0; i<images.length;i++){
  
           const {data} = await axios({
               method: "GET",
               url: images[i],
  
           })
           
           let painting = {
               title: data.title,
               artist: data.artistDisplayName,
               image: data.primaryImageSmall,
               created: data.objectEndDate,
               id: data.objectID, 
               price: (new Date().getFullYear()  - data.objectEndDate) * 10000
              //  price: Math.round((Math.ceil(Math.random()*11)*5000000))
           } 

           if(painting.image == ""){
            continue
           }else {

             imgUrls.push(painting)
          }
       }
  
       this.paintings = imgUrls
       console.log(this.paintings);
       
  
  
      } catch (error) {
       next(error)
       console.log(error);
      } finally {
        this.isLoading = false
      }
   },
   async getProductById(id){
    console.log(id, "<<< masuk product by id di counter");
    try {
      this.isLoading = true
      const {data} = await axios({
        method: "GET",
        url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(data);
      let painting = {
        title: data.title,
        artist: data.artistDisplayName,
        price: (new Date().getFullYear()  - data.objectEndDate) * 10000,
        image: data.primaryImage,
        created: data.objectEndDate,
        id: data.objectID
      } 
      this.productById = painting;
      console.log(painting, "LOG PAINTING");

      const qr = await axios({
        url: "https://api.happi.dev/v1/qrcode",
        params: {
          apikey: "dd4571pqJwlqcv1dmD4m2FEJLuHAY8rcyiJqXqBEe9ZtPoff0EeN682B",
          data: baseUrl + `products/${id}`
        },
        
        
      })

      console.log(qr, "<<<< manggil QR");

      this.qrImage = qr.data.qrcode

     
     
    } catch (error) {
      this.isLoading = false
      console.log(error)
    } finally {
      console.log("MASUK FINALLY");
      this.isLoading = false
      
    }
  },
    async loginHandler(value){
      try {
        this.isLogin = false
        console.log(value, "sampai ke store loginHandler");

        const {data} = await axios({
          method: "POST",
          url: baseUrl + "login",
          data: value
        })
        console.log("MASUK SINI JUGA");
        console.log(data);

        localStorage.access_token = data.access_token
        

        Swal.fire(
          'Success Login!',
          'Enjoy our services!',
          'success'
        )
          console.log("SWAL UDAH LEWAT");
          this.router.push('/')
          this.isLogin = true
        // this.router.push("/register")
      } catch (error) {
        console.log(error);
      }
    },
    handleCredentialResponse(response){
      console.log("<<< masuk credential");
      axios({
          method: "POST",
          url: baseUrl + `google-sign-in`,
          data: {
              credential: response.credential
          }
      })  
      .then(response => {
          console.log(response);
          const {access_token} = response.data
          localStorage.access_token = access_token
          this.isLogin=true
          this.router.push('/')
          Swal.fire(
            'Success Login!',
            'Enjoy our services!',
            'success'
          )
      })
      .catch(err => {
          console.log(err, "Google sign in error!");
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Google Sign In Error!",
              footer: '<a href="">Why do I have this issue?</a>'
              })
      }) 
  },
//   async handleCredentialResponse(response) {
//     try {
//         const { data } = await axios({
//             method: "POST",
//             url: baseUrl + 'google-sign-in',
//             headers: {
//                 google_token: response.credential
//             }
//         })

//         localStorage.setItem("access_token", data.access_token)

//         this.isLogin = true

//         this.router.push("/home")
//         // this.alertSuccess(data)
//     } catch (error) {
//         // this.alertError(error)
//         console.log(error);
//     }
// },
    async registerHandler(value){
      try {
        console.log("<<<masuk ke registerHandler di counter.js");

        const {data} = await axios({
          method: "POST",
          url: baseUrl + "register",
          data: value
        })
        console.log("masuk register sini juga");
        console.log(data);

        Swal.fire(
          'Success Register!',
          'Please login to continue!',
          'success'
        )
        this.router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },

    logoutHandler(){
      localStorage.clear()
      this.isLogin = false
      this.router.push('/login')
    },

    async fetchProducts(categoryId, page){
      console.log("masuk fetch products di counter");
      try {
        const {data} = await axios({
          method: "GET",
          url: baseUrl + "products",
          headers: {
            access_token: localStorage.access_token
          },
          params: {
            page: page,
            size: 8,
            category: categoryId ? categoryId : undefined
          }
        })

        console.log(data);
        this.products = data.data.products
        this.totalPages = data.data.totalPages
        // this.page = 2
      } catch (error) {
        console.log(error);
      }
    },
    
    async getProductById(id){
      console.log(id, "<<< masuk product by id di counter");
      try {
        const {data} = await axios({
          method: "GET",
          url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })

        const qr = await axios({
          url: "https://api.happi.dev/v1/qrcode",
          params: {
            apikey: "dd4571pqJwlqcv1dmD4m2FEJLuHAY8rcyiJqXqBEe9ZtPoff0EeN682B",
            data: baseUrl + `products/${id}`
          },
          
          
        })

        console.log(qr, "<<<< manggil QR");

        this.qrImage = qr.data.qrcode

        console.log(data)

        let painting = {
          title: data.title,
          artist: data.artistDisplayName,
          image: data.primaryImage,
          created: data.objectEndDate,
          id: data.objectID 
      } 
        this.productById = painting;
      } catch (error) {
        console.log(error)
      }
    },

    async fetchFavourites(){
      console.log("<<< masuk favourite di counter");
      try {
        const {data} = await axios({
          method: "GET",
          url: baseUrl + "favourites",
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(data, "<<<< DATA DI FAVOURITES")
        // this.paintings = data;
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    
    async qrCode() {
      try {
          const apikey = "dd4571pqJwlqcv1dmD4m2FEJLuHAY8rcyiJqXqBEe9ZtPoff0EeN682B"
          const { data } = await axios({
              method: "GET",
              url: "https://api.happi.dev/v1/qrcode",
              params: {
                  data: baseUrl + "products",
                  apikey
              }
          })

          this.qrcode = data.qrcode 
      } catch (error) {
          this.alertError(error)
      }
  },
  
  

  }
})  


