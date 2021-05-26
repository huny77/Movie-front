<template>
<div class="movie-detail">
  <!-- <div class="movie-detail-image">
    <img :src="imgSrc">
  </div> -->
  <div class="movie-content d-flex">
  <div style="">
    <img
      class="mt-2 "
      style="height:80vh;"
      :src="imgSrc"
    />
  </div>
  <div class="ml-4 w-75">
    <!-- <img :src="imgSrc" alt="포스터없음" width="200"> -->
    <h3 class="movie-title">{{ movieInfo.title }}</h3>
    <!-- <p class="movie-title">{{ is_liked }}</p> -->
    <div class="movie-information-wrapper mt-4 d-flex align-items-center">
      <p class="mx-3">개봉일 : {{ movieInfo.release_date }}</p>
      <p class="mx-3">평점 : {{ movieInfo.vote_average }}</p>
      <div class="mx-5">
        <button class="btn btn-outline-danger" v-if="is_liked" @click="like">❤</button> 
        <button class="btn btn-outline-danger" v-else @click="like">🤍</button>
        <span>{{ countLike }}</span>
      </div>
    </div>
    
    <p class="text-start">리뷰 {{ reviewList.length }}</p>
    <div v-for="review in reviewList" :key="review.id">
      <p class="text-start">{{ review.content }}</p>
    </div>
    
    <div class="input-group mb-3">
      <input v-model.trim="reviewData.content" type="text" class="form-control border-warning" placeholder="당신의 감상을 남겨주세요">
      <span class="input-group-text border-warning">점수:</span>
      <input v-model.trim="reviewData.rank" type="integer" class="form-control border-warning">
      <div class="text-end"><button class="btn btn-outline-warning" @click="create_review()">작성</button></div>
    </div>
    <iframe 
      :src="youtubeSrc"
      frameborder="0"  
      width="640" 
      height="360">
    </iframe>
  </div>
 </div>
</div>

</template>

<script>
import axios from 'axios'


export default {
  data() {
    return {
      is_liked: false,
      reviewList: [],
      countLike: 0,
      reviewData: {
        content: '',
        rank: 0,
      }
    }
  },
  name: 'MovieDetail',
  props: {
    movieInfo: {
      type: Object
    },
    movieId: {
      type: Number
    }
  },
  computed: {
    imgSrc() {
      return 'https://image.tmdb.org/t/p/w500' + this.movieInfo.poster_path
    },
    youtubeSrc() {
      return `https://www.youtube.com/embed/${this.movieInfo.key}`;
    },
  },
  created() {
    // this.is_liked = this.like_list.includes(this.movieInfo.id)
    axios.get(`http://127.0.0.1:8000/api/v1/movies/${this.movieInfo.id}/`)
      .then(res => {
        console.log(res.data)
        this.is_liked = res.data.is_liked
        this.reviewList = res.data.review_list
        this.countLike = this.movieInfo.like_user.length
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    like() {
      axios.get(`http://127.0.0.1:8000/api/v1/movies/${this.movieInfo.id}/like/`)
        .then(res => {
          console.log(res.data)
          this.is_liked = !this.is_liked
          if (this.is_liked) {
            this.countLike += 1
          } else {
            this.countLike -= 1
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    create_review: function() {   
      console.log(this.commentData)
      axios({
        method: 'POST',
        url: `http://127.0.0.1:8000/api/v1/movies/${this.movieInfo.id}/`,
        data: this.reviewData,
      })
        .then(res => {
          console.log(res.data)
          this.reviewList.push(res.data)
          this.reviewData.content = ''
          this.reviewData.rank = 0
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}

</script>

<style>
.movie-detail {
  /* z-index: 99; */
  position: relative;
  padding: 40px 40px;
}
.movie-detail-image {
  border: 0;
  padding: 0; 
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
.movie-content {
  position: relative;
  z-index: 999;
}
.movie-title {
  margin-left: 5px;
}
.movie-information-wrapper {
  font-size: 13px;
}
.movie-overview {
  max-width: 80%;
  font-size: 14px;
  color: black
}
</style>