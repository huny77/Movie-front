<template>
  <div>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="dataTitle" class="form-label"></label>
        <input v-model.trim="data.title" type="text" class="form-control" placeholder="제목" aria-label="title" aria-describedby="dataTitle">
      </div>
      <div class="mb-3">
        <label for="dataMovieTitle" class="form-label"></label>
        <input v-model.trim="data.movie_title" type="text" class="form-control" placeholder="영화" aria-label="movieTitle" aria-describedby="dataMovieTitle">
      </div>
      <div class="form-outline border border-top-0 mb-4">
        <input type="number" min="1" max="10" id="dataMovieScore" class="form-control" />
        <label class="form-label" for="dataMovieScore">Score</label>
      </div>
      <div id="dataMovieScore" class="form-text">1점부터 10점 사이를 입력해 주세요.</div>
      <div class="form-outline mb-4 border border-top-0 border-dark">
        <textarea class="form-control" v-model.trim="data.content" id="dataMovieContent" rows="4"></textarea>
        <label class="form-label" for="dataMovieContent">Content</label>
      </div>
      <button type="submit" class="btn btn-outline-warning" @click="postCreate" data-mdb-ripple-color="dark">
        작성
      </button>
    </form>
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