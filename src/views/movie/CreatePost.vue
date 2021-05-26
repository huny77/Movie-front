<template>
  <div>
    <div class="px-5">

      <div class="input-group mb-3">
        <span class="input-group-text" id="dataTitle">제목</span>
        <input v-model.trim="data.title" type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="dataTitle">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="dataMovieTitle">영화</span>
        <input v-model.trim="data.movie_title" type="text" class="form-control" placeholder="movieTitle" aria-label="movieTitle" aria-describedby="dataMovieTitle">
      </div>   
      <div class="input-group mb-3">
        <span class="input-group-text">내 점수 : </span>
        <input v-model="data.rank" type="integer" class="form-control" aria-label="rank">
        <span class="input-group-text"> 점</span>
      </div> 
      <div class="input-group">
        <span class="input-group-text">내용</span>
        <textarea v-model.trim="data.content" class="form-control" aria-label="content"></textarea>
      </div>
      <div class="text-end mt-3">
        <button class="btn btn-outline-warning" @click="postCreate">써져라</button>
      </div>

    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

// 글 작성시 바로 community로 이동
export default {
  name: 'CreatePost',
  data: function () {
    return {
      data: {
        title: '',
        rank: 0,        
        movie_title: '',
        content: '',
      }
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    // postCreate() {
    //   console.log(this.data)
    //   this.$store.dispatch('createPost', this.data)
    //   this.title = ''
    //   this.movie_title = ''
    //   this.content = ''
    //   this.rank = 0
    // }
    postCreate: function() {   
      console.log(this.data)
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/community/',
        data: this.data,
        // headers: this.setToken()
      })
        .then(res => {
          console.log(res)
        })
        .then(() => {
          this.$router.push({ name: 'Community' })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style>

</style>