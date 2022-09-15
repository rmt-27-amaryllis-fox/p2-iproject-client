import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2"

export const useGameMethodStore = defineStore({
  id: "GameMethod",
  state: () => ({
    // baseurl: `http://localhost:3000`,
    // awal state nya
    baseurl: `https://simptcg-har-iproject-server.herokuapp.com`, // deploy

    cardList: [],
    cardListAI: [],
    cardListYou: [],
    totalAtkAI: 0,
    totalAtkYou: 0,
    pointAI: 0,
    pointYou: 0,
    resultGame: ''
  }),
  actions: {
    async gameSixCardData() {
      try {
        // get six card data
        let result = await axios({
          method: "GET",
          url: `${this.baseurl}/game-cards`,
          headers: {
            access_token: localStorage.access_token
          }
        });
        // masok datanya
        console.log(result.data.cardList, '<< masok data profile user nya')

        this.cardList = result.data.cardList

        console.log(this.cardList[0], `<< ini kartu awal dolo`)
        // masokin  kartu ke AI/you datanya
        this.cardListAI = [this.cardList[0], this.cardList[1], this.cardList[2]]
        this.cardListYou = [this.cardList[3], this.cardList[4], this.cardList[5]]

        console.log(`Kartu AI : ${this.cardListAI} `)
        console.log(`Kartu You : ${this.cardListYou} `)

        this.cardListAI.forEach((item) => {
          this.totalAtkAI += item.atk
        })

        console.log(this.totalAtkAI, `<< total atk ai`)

        this.cardListYou.forEach((item) => {
          this.totalAtkYou += item.atk
        })

        console.log(this.totalAtkYou, `<< total atk You`)

        if (this.totalAtkAI > this.totalAtkYou) {
          this.resultGame = 'LOSE'
          this.pointAI += 1
          console.log(this.pointAI, `ini point ai`)
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Lose. Try again next time.`,
            showConfirmButton: true,
            // timer: 1500,
          });
        }
        else if (this.totalAtkYou > this.totalAtkAI) {
          this.resultGame = 'WIN'
          this.pointYou += 1
          console.log(this.pointYou, `ini point you`)

          Swal.fire({
            position: "center",
            icon: "success",
            title: `CONGRATS, YOU WIN !!!`,
            showConfirmButton: true,
            // timer: 1500,
          });
        }
        else if (this.totalAtkAI === this.totalAtkYou) {
          this.resultGame = 'DRAW'
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Draw.`,
            showConfirmButton: true,
            // timer: 1500,
          });
        }

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },

    async saveDataGame() {
      try {
        console.log(this.pointAI, `hasil game ai`)
        console.log(this.pointYou, `hasil game you`)
        let result = await axios({
          method: 'POST',
          url: `${this.baseurl}/game-cards`,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            pointAI: this.pointAI,
            pointYou: this.pointYou,
            cardList: this.cardListYou
          }
        })

        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result.data.message}.`,
          showConfirmButton: true,
          // timer: 1500,
        });
        this.router.push('/myhome')

      } catch (error) {
        console.log(error)
      }
    }
  },
});