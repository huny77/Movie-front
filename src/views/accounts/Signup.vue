<template>
  <div>
    <h2>회원가입</h2>
    <div>
      <label for="username">username : </label>
      <input type="text" id="username" v-model="credentials.username">
    </div>
    <div>
      <label for="password">password : </label>
      <input type="password" id="password" v-model="credentials.password">
    </div>
    <div>
      <label for="passwordConfirmation">passwordConfirmation : </label>
      <input type="password" id="passwordConfirmation" v-model="credentials.passwordConfirmation">
    </div>
    <button @click="signup(credentials)">회원가입</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signup'
    ])
  }
}
</script>

<style>

</style>