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
  <!-- <p>cek home</p>
  <p>{{ photos }}</p>
  <p>ini tweet {{ tweets }}</p> -->
  <section class="home">
    <Tweet
      class="tweet"
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
</template>
<style scoped>
.home {
  display: flex;
  column-gap: 50px;
  flex-direction: row;
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
  margin-top: 50px;
  /* position: relative; */
  /* position: absolute; */
  transform: translate(-50%, -50%);
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
  animation: slide 16s infinite;
}

img {
  width: 100%;
}
/*Animation activated by keyframes*/
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  55% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-200%);
  }
  80% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-300%);
  }
}
</style>
