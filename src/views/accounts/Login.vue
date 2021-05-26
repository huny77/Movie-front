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
    <!-- <sweet-modal icon="success">
      This is a success!
    </sweet-modal> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
  name: 'Login',
  // components: {
  //   SweetModal,
	// 	SweetModalTab,
  // },
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