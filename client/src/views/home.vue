<script>
import { mapActions, mapWritableState } from "pinia";
import { appleStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(appleStore, [
      "changePage",
      "logOut",
      "fetchIphone",
      "changePageToOrder",
      'getIphoneId',
      'fetchMyOrder',
      'getOneIphone'
    ]),
  },
  computed: {
    ...mapWritableState(appleStore, ["isLogin", "iPhone"]),
  }
};
</script>
<template>
  <div class="product" data-aos="fade-up" v-for="el in iPhone" :key="el.id">
    <h1>{{ el.name }}</h1>
    <h3>{{ el.title }}</h3>
    <p>{{ el.description }}</p>
    <img :src="el.imgUrl" alt="" id="phone" />
    <a href="" @click.prevent="changePageToOrder(), getIphoneId(el.id), getOneIphone(el.id)">Pre-order ></a>
  </div>
  <div class="end">
    <h1>lorem ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis
      nihil, eaque velit atque exercitationem soluta numquam corporis placeat
      autem quisquam modi repellendus ipsum rerum laborum, inventore asperiores.
      Obcaecati, fugiat esse ducimus dicta autem vel iusto cupiditate corrupti
      accusantium, impedit sunt error repudiandae consequuntur? Aspernatur velit
      nostrum at nesciunt mollitia provident. Eum adipisci consequuntur omnis
      minus nostrum unde iste repudiandae porro ducimus. Cumque, esse
      perferendis incidunt similique perspiciatis sequi soluta omnis corporis
      consequatur officiis, enim facilis et fugit, vitae aliquam eius eaque odit
      eveniet quidem quo recusandae fugiat. Omnis officiis nulla recusandae
      reprehenderit a! Sint possimus impedit ratione magnam? Dicta, veniam
      sequi. Sunt maxime alias obcaecati placeat optio tenetur, mollitia eos
      beatae totam repudiandae, adipisci voluptas vero. Ex et, corporis aut hic,
      laborum placeat optio expedita quo facere totam ipsum distinctio. Mollitia
      voluptatibus, ipsa ex iste architecto beatae consequuntur ullam dolore,
      quos magnam fuga earum vitae aliquid aspernatur veritatis atque.
    </p>
  </div>
</template>
