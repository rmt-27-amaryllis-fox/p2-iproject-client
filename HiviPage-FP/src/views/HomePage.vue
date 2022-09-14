<script>
import { mapState, mapActions } from "pinia";
import { useMusicStore } from "../stores/music";
import Tweet from "vue-tweet";
export default {
  name: "home",
  components: {
    Tweet,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useMusicStore, ["photos", "tweets"]),
  },
  methods: {
    ...mapActions(useMusicStore, ["getPhoto", "getTweet"]),
  },
  created() {
    this.getPhoto();
    this.getTweet();
  },
  // untuk tweet
  setup() {
    function onTweetLoadSuccess(embedNode) {
      console.log(embedNode);
    }

    function onTweetLoadError() {
      console.log("Ops... an error has occurred");
    }

    return { onTweetLoadSuccess, onTweetLoadError };
  },
};
</script>
<template>
  <h1>Welcome to Hivi-Club!</h1>
  <section class="home">
    <Tweet
      class="tweet"
      v-if="tweets.data"
      :tweet-id="tweets.data.id"
      cards="visible"
      conversation="all"
      lang="en"
      theme="light"
      align="left"
      :width="300"
      :dnt="false"
      @tweet-load-error="onTweetLoadError"
      @tweet-load-success="onTweetLoadSuccess"
    >
      <template v-slot:loading>
        <span>Loading...</span>
      </template>

      <template v-slot:error>
        <span>Sorry, that tweet doesn’t exist!</span>
      </template>
    </Tweet>

    <!-- end coba tweet -->
    <!-- <h1>cek</h1> -->
    <div class="container">
      <!--Area of the images-->
      <div class="wrapper">
        <img v-for="el in photos" :key="el.id" :src="el" />
      </div>
    </div>
  </section>
  <p>
    HIVI! (Haivai) merupakan sebuah grup musik pop Indonesia yang dibentuk di
    Jakarta pada tahun 2009. Grup musik ini beranggotakan Neida Aleida (vokal),
    Ilham Aditama (vokal), Febrian Nindyo Purbowiseso (vokal/gitar) dan Ezra
    Mandira (vokal/gitar). Grup musik ini bergenre pop.
  </p>
</template>
<style scoped>
p {
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: 40px;
  margin-bottom: 40px;
}
h1 {
  font-size: 110px;
  display: flex;
  justify-content: center;
}
.home {
  display: flex;
  column-gap: 50px;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 40px;
}
.tweet {
  margin-left: 100px;
  display: flex;
}
.container {
  /* width: 1000px; */
  /* tambahan */
  display: flex;
  /* display: none; */
  /* margin-top: 50px; */
  /* position: relative; */
  /* position: absolute; */
  /* transform: translate(-50%, -50%); */
  /* top: 50%;
  left: 50%; */
  overflow: hidden;

  border: 10px;
  border-radius: 8px;
  box-shadow: -1px 5px 15px;
}

/*Area of images*/
.wrapper {
  /* width: 100%; */
  display: flex;
  animation: slide 10s infinite;
}

img {
  width: 100%;
  /* height: 700px; */
  object-fit: cover;
}
/*Animation activated by keyframes*/
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  /* 25% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-100%);
  } */
  50% {
    transform: translateX(-100%);
  }
  /* 55% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-200%);
  }
  80% {
    transform: translateX(-300%);
  } */
  100% {
    transform: translateX(-200%);
  }
}
</style>
