<script>
import { mapActions } from "pinia";
import { useMusicStore } from "../stores/music";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    ...mapActions(useMusicStore, ["sendEmail"]),
    getMessage() {
      this.sendEmail(this.message);
      this.message = "";
    },
  },
};
</script>
<template>
  <div>
    <img
      class="foto"
      src="https://i.ibb.co/ZcCY5bG/Screenshot-2022-09-14-212455.jpg"
      alt=""
    />
  </div>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          ❤️❤️ Send any message to us ❤️❤️
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          We would love to hear your message
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Message</label
              >
              <textarea
                v-model="message"
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              @click="getMessage"
              class="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.foto {
  width: 300px;
  margin-top: 10vh;
  margin-left: 41vw;
}
.container {
  padding-top: 30px;
}
h1 {
  font-size: 1500px;
}
</style>
