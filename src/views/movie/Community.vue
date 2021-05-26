<template>
  <div>
    <h2>Community</h2>
    <div class="px-5">
      <div class="card border-warning mt-5" v-for="post in posts" :key="post.id">
        <div class="card-header bg-transparent border-warning text-start"><h5>{{ post.title }}</h5></div>
        <div class="card-body" @click="isModalViewedDetail=true, tossPost=post, postId=post.id, detailPosts(post)">
          <p class="card-text"><small class="text-muted"> {{post.movie_title }} </small></p>
          <p class="card-text"> {{post.content }} </p>
          <p class="card-text text-end"><small class="text-muted">{{ post. created_at }}</small></p>
        </div>
        <div class="card-text text-end px-2">
          <i @click="isModalViewedUpdate=true, tossPost=post, postId=post.id" class="far fa-edit"></i> | 
          <i @click="deletePosts(post)" class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>

    
    <ModalView v-if="isModalViewedUpdate" @close-modal="isModalViewedUpdate=false">
      <PostUpdate :postId="postId" :tossPost="tossPost"/>
    </ModalView>
    <ModalView v-if="isModalViewedDetail" @close-modal="isModalViewedDetail=false">
      <PostDetail :postId="postId" :getInfo="getInfo"/>
    </ModalView>
  </div>

  
</template>

<script>
import ModalView from '@/components/ModalView.vue'
import PostUpdate from '@/components/PostUpdate.vue'
import PostDetail from '@/components/PostDetail.vue'
import axios from 'axios'

export default {
  name: 'Community',
  components: {
    ModalView,
    PostUpdate,
    PostDetail
  },
  data() {
    return {
      isModalViewedUpdate: false,
      isModalViewedDetail: false,
      postId: 0,
      tossPost: Object,
      posts: [],
      getInfo: Object
    }
  },
  created() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/v1/community/'
    })
    // axios.get('http://127.0.0.1:8000/api/v1/community/')
      .then((res) => {
        console.log(res)
        this.posts = res.data
      })
      .catch((err) => {
        console.error(err)
      })
    
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    deletePosts: function(post) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/api/v1/community/${post.id}/`,
        headers: this.setToken()
      })
      .then((res) => {
        console.log(res)
      })
      .then(() => {
        this.$router.go(this.$router.push({ name: 'Community' }))
      })
      .catch((err) => {
        console.log(err)
      })
    },
    detailPosts: function(post) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/v1/community/${post.id}/`,
        headers: this.setToken()
      })
      .then((res) => {
        console.log(res.data)
        this.getInfo = res.data
        // return res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>