<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserProfileMethodStore } from "../stores/userProfileMethod";
import CardTCG from "../components/CardTCG.vue";

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
  created() {
    this.getUserProfile();
  },
  components: { CardTCG },
};
</script>

<template>
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4 justify-content-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <span class="name mt-3">{{ username }}</span>
        <div class="d-flex mt-2">
          <button class="btn1 btn-dark">Edit Profile</button>
        </div>
        <div class="text mt-3">
          <span> {{ bio }} </span>
        </div>

        <div class="text px-2 rounded mt-4">
          <div class="container">
            Games : <br />
            Win : {{ totalWin }} <br />
            Lose : {{ totalLose }} <br />
          </div>
        </div>

        <div class="text px-2 rounded mt-4">
          <div class="container">
            Cards Gained : <br />
            Monster Cards : {{ totalMonsterCard }} <br />
            Trap Cards :
            {{ totalTrapCard }} <br />
            Spell Cards : {{ totalSpellCard }}
          </div>
        </div>

        <div class="text px-2 rounded mt-4">Latest 3 Cards :</div>

        <div class="px-2 rounded mt-4">
          <div class="container d-flex justify-content-center">
            <CardTCG v-for="card in cardList" :key="card.id" :card="card" />
          </div>
        </div>
        <div class="px-2 rounded mt-4 date">
          <span class="join">Joined May,2021</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

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
