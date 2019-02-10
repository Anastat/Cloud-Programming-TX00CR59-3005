<template>
  <div>
    From
    <input v-model="messageFrom">
    <br>To
    <input v-model="messageTo">
    <br>
    <span/>Message
    <br>
    <textarea v-model="message" v-on:keyup.enter="sendMessage"/>
    <ul>
      <li v-for="message in messages">
        From: {{ message.from}} 
        To: {{ message.to }}
        Text: {{ message.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      messageFrom: "",
      messageTo: "",
      message: '',
      messages: []
    };
  },
  created () {
    this.messages = JSON.parse(localStorage.getItem("prevMessages") || '[]')
  },
  methods: {
    sendMessage() {
      this.messages.push({from: this.messageFrom, to: this.messageTo, text: this.message});
      localStorage.setItem("prevMessages", JSON.stringify(this.messages));
      this.message = "";
    }
  }
};
</script>
<style>
input {
  width: 100px;
  margin: 3px;
}
textarea {
  height: 60px;
}
</style>

