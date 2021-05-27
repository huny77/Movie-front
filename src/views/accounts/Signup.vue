<template>
  <div>
    <!-- <h2>회원가입</h2>
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
    <button @click="signup(credentials)">회원가입</button> -->
    <div class="d-flex align-items-center h-80 my-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">
            <div class="card">
              <div class="card-body p-5">

                <div class="row d-flex align-items-center">
                  <div class="col-md-6 col-xl-7">

                    <div class="text-center pt-md-5 pb-5 my-md-5 logo-size" style="padding-right: 24px;">
                      <img src='@/assets/coc_logo.png' alt="">
                    </div>

                  </div>
                  <div class="col-md-6 col-xl-4 text-center">

                    <h2 class="fw-bold mb-4 pb-2">Hello, Sign up</h2>

                    <div class="form-outline form-outline-dark mb-3">
                      <input type="username" id="username" v-model="credentials.username" class="form-control border border-top-0 border-dark form-control-lg" />
                      <label class="form-label" for="username">User ID</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="Password" v-model="credentials.password" class="form-control border border-top-0 border-dark form-control-lg" />
                      <label class="form-label" for="Password">Password</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="passwordConfirmation" v-model="credentials.passwordConfirmation" class="form-control border border-top-0 border-dark form-control-lg" />
                      <label class="form-label" for="passwordConfirmation">Password Confirmation</label>
                    </div>

                    <div class="text-center">
                      <button class="btn btn-danger btn-block btn-lg mt-3 mb-4" @click="signup(credentials)" type="submit">Sign up</button>
                      <router-link to="/Login" class="link-info">Already have an account? Sign in <i class="fas fa-long-arrow-alt-right"></i></router-link>
                      <div class="my-3 form-text text-start">가입하기 버튼을 클릭하면 Co-Child의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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