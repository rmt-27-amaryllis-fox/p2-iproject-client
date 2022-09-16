<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import io from 'socket.io-client'
import { useUserStore } from '../stores/user'

export default {
  name: 'ChatApp',
  components: { },
  data() { 
    return {
      display: false,
      text: '',
      messages: [],
    }
  },
  computed: {
    ...mapWritableState(useUserStore, {
      username: 'username',
      isLogin: 'isLogin'
    })
  },
  methods: {
    ...mapActions(useUserStore, {
      getUser: 'getUser'
    }),
    join() {
      this.socketInstance = io('https://h8omoring.herokuapp.com', {
        transports: ['websocket']
      })
      this.socketInstance.on('message:received', (data) => {
        this.messages = this.messages.concat(data)
      })
    },
    sendMessage() {
      this.addMessage()
      this.text = ''
    },
    addMessage() {
      const message = {
        id: new Date().getTime(), //biar unique aja
        text: this.text,
        user: this.username
      }
      this.socketInstance.emit('message', message)
      this.messages = this.messages.concat(message)
    },
    openChat() {
      this.display = true
    },
    closeChat() {
      this.socketInstance.emit('forceDisconnect')
      this.display = false
    }
  },
  created() {
    this.getUser()
    this.text = ''
  }
}
</script>

<template>
  <button @click.prevent="join" v-if="!display" class="open-button" @click.prevet="openChat">Chat</button>
  
  <div v-if="display" class="chat-popup" id="myForm">
    <form class="form-container">
      <p>RISE TARNISHED</p>

      <label for="msg"><b>Message</b></label>
      <div class="grid-one-by-one">
        <div class="chat-boxes overflow-auto">
          <div v-for="message in messages" :key="message.id">
            <b>
              {{ message.user }}
            </b>
            : {{ message.text }}
          </div>
        </div>
        <div v-if="isLogin" class="text-warper">
          <textarea 
            placeholder="Type message.."
            name="msg"
            @keyup.enter="sendMessage"
            v-model="text"
          >
          </textarea>
        </div>
      </div>
      <div class="row button-warper">
        <div v-if="isLogin" class="col">
          <button type="submit" class="btn btn-outline-secondary" @click.prevent="sendMessage">Send</button>
        </div>
        <div v-if="!isLogin">
          <p class="small" style="color: red;">Please Login First</p>
        </div>
        <div class="col flex-item">
          <button type="button" class="btn cancel" @click.prevent="closeChat">Close</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
* {box-sizing: border-box;}

.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 0px;
  left: 0px;
}

div.chat-boxes{
  overflow: scroll;
}

div.grid-one-by-one {
  display: grid;
  grid-template-rows: 200px 50px;
}

.chat-popup {
  width: 17em;
  height: auto;
  position: fixed;
  bottom: 0.5em;
  left: 0.5em;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

.form-container textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0 15px;
  border: none;
  background: #f1f1f1;
  resize: none;
}

.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

.form-container .btn {
  background-color: rgb(155, 121, 47);
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

.form-container .cancel {
  background-color: rgb(177, 49, 49);
}

.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}

div.button-warper {
  margin-top: 1.5em;
}
div.flex-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  