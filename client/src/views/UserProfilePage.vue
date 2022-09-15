<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserProfileMethodStore } from "../stores/userProfileMethod";
import CardTCG from "../components/CardTCG.vue";
import Chart from "chart.js/auto";

export default {
  methods: {
    ...mapActions(useUserProfileMethodStore, ["getUserProfile"]),
  },

  computed: {
    ...mapWritableState(useUserProfileMethodStore, [
      "username",
      "bio",
      "totalSpellCard",
      "totalMonsterCard",
      "totalTrapCard",
      "totalWin",
      "totalLose",
      "cardList",
    ]),
  },

  data() {
    return {
      trap: this.totalTrapCard,
      spell: this.totalSpellCard,
      monster: this.totalMonsterCard,
    };
  },

  created() {
    this.getUserProfile();
  },

  updated() {
    // total stats win/lose

    const dataGamesUser = {
      labels: ["Lose", "Win"],
      datasets: [
        {
          data: [this.totalLose, this.totalWin],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(102, 255, 178)"],
          hoverOffset: 4,
        },
      ],
    };

    const chartStatGame = document.getElementById("chart-game");
    const visualkanGameStat = new Chart(chartStatGame, {
      type: "pie",
      data: dataGamesUser,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Games History :",
          },
        },
      },
    });

    // card gained viz
    const dataCardsUser = {
      labels: ["Trap", "Spell", "Monster"],
      datasets: [
        {
          legend: "Cards Collected",
          data: [
            this.totalTrapCard,
            this.totalSpellCard,
            this.totalMonsterCard,
          ],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(102, 255, 178)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const chartCardsStat = document.getElementById("chart-kartu");
    const visualisasiCardStat = new Chart(chartCardsStat, {
      type: "pie",
      data: dataCardsUser,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Cards Collected :",
          },
        },
      },
    });
  },

  components: { CardTCG },
};
</script>

<template>
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4 justify-content-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <span class="name mt-3">{{ username }}</span>

        <div class="container row">
          <div class="col">
            <canvas id="chart-game" width="300" height="300"></canvas>
          </div>
          <div class="col">
            <canvas id="chart-kartu" width="300" height="300"></canvas>
          </div>
        </div>

        <!-- <div class="container">
            Cards Gained : <br />
            Monster Cards : {{ totalMonsterCard }} <br />
            Trap Cards :
            {{ totalTrapCard }} <br />
            Spell Cards : {{ totalSpellCard }}
          </div> -->

        <span class="name mt-3">Latest 3 Cards :</span>

        <div class="px-2 rounded mt-4">
          <div class="container d-flex justify-content-center">
            <CardTCG v-for="card in cardList" :key="card.id" :card="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #000;
}

.card {
  width: 950px;
  background-color: #efefef;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
}

.image img {
  transition: all 0.5s;
}

.card:hover .image img {
  transform: scale(1.5);
}

.btn {
  height: 140px;
  width: 140px;
  border-radius: 50%;
}

.name {
  font-size: 22px;
  font-weight: bold;
}

.idd {
  font-size: 14px;
  font-weight: 600;
}

.idd1 {
  font-size: 12px;
}

.number {
  font-size: 22px;
  font-weight: bold;
}

.follow {
  font-size: 12px;
  font-weight: 500;
  color: #444444;
}

.btn1 {
  height: 40px;
  width: 150px;
  border: none;
  background-color: #000;
  color: #aeaeae;
  font-size: 15px;
}

.text span {
  font-size: 13px;
  color: #545454;
  font-weight: 500;
}

.icons i {
  font-size: 19px;
}

hr .new1 {
  border: 1px solid;
}

.join {
  font-size: 14px;
  color: #a0a0a0;
  font-weight: bold;
}

.date {
  background-color: #ccc;
}
</style>
