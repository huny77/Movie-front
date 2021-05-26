<template>
  <div id="app">
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navar-brand text-decoration-none text-light mx-3" to="/">Co린이</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <div v-if="isLoggedIn">
            <li class="nav-item d-flex">
              <router-link class="nav-link" aria-current="page" to="/">홈</router-link>
            </li>
            <li class="nav-item d-flex">
              <router-link class="nav-link" to="/community">게시판</router-link>
            </li>
            <li class="nav-item dropdown d-flex">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                내 정보
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/profile">프로필</router-link></li>
                <li><div class="dropdown-item" @click="logout">로그아웃</div></li>
              </ul>
            </li>
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
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> -->
  <!-- Navbar -->
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
        <!-- Navbar brand -->
        <router-link class="navbar-brand" to="/">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            height="15"
            alt=""
            loading="lazy"
          />
        </router-link>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item d-flex">
            <router-link class="nav-link active" aria-current="page" to="/">홈</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item d-flex">
            <router-link class="nav-link" to="community">게시판</router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
    <div class="d-flex align-items-center">
        <div v-if="!isLoggedIn" class="d-flex align-items-center">
          <router-link to="/login">
          <button type="button" class="btn btn-link px-3 me-2">
            Login
          </button>
          </router-link>
          <router-link to="/signup">
          <button type="button" class="btn btn-outline-primary me-3">
            Sign up
          </button>
          </router-link>
        </div>

        <!-- Avatar -->
        <a v-if="isLoggedIn"
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="true"
        >
          <i class="fas fa-user"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <router-link class="dropdown-item" to="/profile">My profile</router-link>
          </li>
          <li>
            <a class="dropdown-item" @click="logout">logout</a>
          </li>
        </ul>
    </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->

  <router-view/>
  </div>
  
</template>


<script>
// 로그인 로그아웃 판단용
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ]),
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
