<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import io from 'socket.io-client'

export default {
  name: 'ChatApp',
  components: { },
  data() { 
    return {
      joinend: false,
      currentUser: '',
      text: '',
      messages: [
        {
          id: 1,
          text: 'test',
          user: 'testUser'
        }
      ]
    }
  },
  computed: { },
  methods: {
    join() {
      console.log(this.currentUser)
      this.joinend = true
      this.socketInstance = io('http://localhost:3000')

      this.socketInstance.on('message:received', (data) => {
        this.messages = this.messages.concat(data)
      })
    },
    sendMessage() {
      console.log(this.text)
      this.addMessage()
      this.text = ''
    },
    addMessage() {
      const message = {
        id: new Date().getTime(), //biar unique aja
        text: this.text,
        user: this.currentUser
      }

      this.messages = this.messages.concat(message)
      
      this.socketInstance.emit('message', message)
    }
  },
  created() { },
}
</script>

<template>
  <h1>chat app test</h1>
  <div v-if="!joinend" class="name-container">
    <input v-model="currentUser" type="text" class="username">
    <button @click="join" class="btn-join">join</button>
  </div>
  <div v-if="joinend">
    <div>
      <div v-for="message in messages" :key="message.id">
        <b>
          {{ message.user }}
        </b>
        : {{ message.text }}
      </div>
    </div>
    <div>
      <textarea v-model="text" @keyup.enter="sendMessage" id="text-message" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<style scoped>
div.name-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 150px;
  margin-bottom: 200px;
}

.username {
  height: 30px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
  