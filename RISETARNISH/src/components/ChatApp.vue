<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import io from 'socket.io-client'
import { useUserStore } from '../stores/user'

export default {
  name: 'ChatApp',
  components: { },
  data() { 
    return {
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
  computed: {
    ...mapState(useUserStore, {
      username: 'username'
    })
  },
  methods: {
    join() {
      console.log(this.currentUser)
      this.joinend = true
      this.socketInstance = io('http://localhost:3000', {
        transports: ['websocket']
      })

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
        user: this.username
      }

      this.messages = this.messages.concat(message)
      
      this.socketInstance.emit('message', message)
    }
  },
  created() { },
}
</script>

<template>
  <div>
    <div>
      <div v-for="message in messages" :key="message.id">
        <b>
          {{ message.user }}
        </b>
        : {{ message.text }}
      </div>
    </div>
    <div class="text-input-container">
      <textarea v-model="text" @keyup.enter="sendMessage" class="text-message"></textarea>
    </div>
  </div>
</template>

<style scoped>
</style>
  