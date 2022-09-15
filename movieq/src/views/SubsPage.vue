<template>
  <section class="subs">
    <div class="subscribe">
      <h2 class="subscribe__title">Subscribe here!</h2>
      <p class="subscribe__copy">Subscribe to enjoy the full experience and keeping up with the latest movie available
      </p>
      <div class="button">
        <!-- <input type="email" class="form__email" placeholder="Enter your email address" /> -->
        <button @click="paymentHandler" class="subs_button">Subscribe</button>
      </div>
    </div>
  </section>
</template>


<script>
import { mapActions, mapState } from 'pinia';
import { useProjectStore } from '../stores/store'

export default {
  data: () => ({

  }),
  methods: {
    ...mapActions(useProjectStore, ['payment', "paid"]),
    async paymentHandler() {
      await this.payment()
      window.snap.pay(this.trans_token, {
        onSuccess: () => {
          this.paid()
        }
      })
    }
  },
  computed: {
    ...mapState(useProjectStore, ['trans_token'])
  }
}
</script>

<style>
.subs {
	background: #CAD3DB;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	/* font-family: 'Mulish', sans-serif; */
  flex-grow: 1;
}

.subscribe {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: white;
	width: 945px;
	height: 474px;
	border-radius: 10px;
	box-shadow: 0 4px 20px rgba(61, 159, 255, 0.2)
}


.subscribe__title {
	font-weight: bold;
	font-size: 26px;
	margin-bottom: 18px;
}

.subscribe__copy {
	max-width: 450px;
	text-align: center;
	margin-bottom: 53px;
	line-height: 1.5;
}

.button {
	margin-bottom: 25px;
}

/* .form__email {
	padding: 20px 25px;
	border-radius: 5px;
 	border: 1px solid #CAD3DB;
	width: 431px;
	font-size: 18px;
	color: #0F121F;
} */

/* .form__email:focus {
	outline: 1px solid #3D9FFF;
} */

.subs_button {
	background: #ff9900;
	padding: 10px;
	border: none;
	width: 244px;
	height: 65px;
	border-radius: 5px;
	font-size: 18px;
	color: white;
	box-shadow: 0 4px 20px rgba(61, 159, 255, 0.7);
}

.subs_button:hover {
	box-shadow: 0 10px 20px rgba(61, 159, 255, 0.7);
}

.notice {
	width: 345px;
}
</style>