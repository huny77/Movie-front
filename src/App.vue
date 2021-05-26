<template>
  <div id="app">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navar-brand text-decoration-none text-light mx-3" to="/">
        Home
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="isLoggedIn" class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="text-decoration-none text-light" to="/community">게시판</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/createpost">CreatePost</router-link>
          </li>
        </ul>
      </div>
      <div v-if="!isLoggedIn" class="d-flex justify-content-end">
        <form>
          <router-link to="/login">
          <button class="btn btn-outline-primary" >로그인</button>
          </router-link>
        </form>
        <form>
          <router-link to="/signup">
          <button class="btn btn-outline-secondary" >회원가입</button>
          </router-link>
        </form>
    

      </div>
      <div v-if="isLoggedIn">
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-decoration-none text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            내 정보
          </a>
          <ul class="dropdown-menu dropbox-color" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="text-decoration-none" to="/profile">Profile</router-link></li>
            <li><span @click="logout">Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <span @click="logout">Logout</span> -->
  </nav>
  <router-link to="/search">
    <button class="btn btn-outline-secondary" >유튜브</button>
  </router-link>
  <b-spinner
      class="d-block ml-auto mr-auto"
      v-if="loading"
      label="Spinning"
    ></b-spinner>
  <router-view/>
  </div>

</template>


<script>
// 로그인 로그아웃 판단용
import { mapGetters, mapActions, mapState } from 'vuex'


export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
    ...mapState(["loading"]),
  },
  methods: {
    ...mapActions([
      'logout'
    ])
  },
  
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}

.dropbox-color {
  background-color: gray;
}
</style>
