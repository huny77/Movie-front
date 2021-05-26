<template>
  <div>
    <h2>Login</h2>
    <div>
      <label for="username">username: </label>
      <input type="text" id="username" v-model="credentials.username">
    </div>
    <div>
      <label for="password">password: </label>
      <input type="password" id="password"  v-model="credentials.password">
    </div>
    <button @click="login(credentials)">로그인</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style>

</style>