<template>
  <div>
    
    <div class="px-5">

      <div class="input-group mb-3">
        <span class="input-group-text" id="dataTitle">제목</span>
        <input v-model.trim="updateData.title" type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="dataTitle">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="dataMovieTitle">영화</span>
        <input v-model.trim="updateData.movie_title" type="text" class="form-control" placeholder="movieTitle" aria-label="movieTitle" aria-describedby="dataMovieTitle">
      </div>   
      <div class="input-group mb-3">
        <span class="input-group-text">내 점수 : </span>
        <input v-model="updateData.rank" type="integer" class="form-control" aria-label="rank">
        <span class="input-group-text"> 점</span>
      </div> 
      <div class="input-group">
        <span class="input-group-text">내용</span>
        <textarea v-model.trim="updateData.content" class="form-control" aria-label="content"></textarea>
      </div>
      <div class="text-end mt-3">
        <button class="btn btn-outline-warning" @click="updatePost">써져라</button>
      </div>

    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'PostUpdate',
  data: function () {
    return {
      post: Object,
      updateData: {
        id: this.postId,
        title: '',
        content: '',
        movie_title: '',
        rank: 0
      }
    }
  },
  props: {
    postId: {
      type: Number
    },
    tossPost: {
      type: Object
    }
  },
  // created: function() {
  //   axios.get(`http://127.0.0.1:8000/api/v1/community/${this.postId}`)
  //     .then(res => {
  //       console.log(res)
  //       this.post = res.data.serializer_post
  //     })      
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // },
  methods: {
    updatePost() {
      console.log(this.updateData)
      this.$store.dispatch('updatePost', this.updateData)
    }
  },
}
</script>

<style>

</style>