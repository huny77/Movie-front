<template>
  <div>
    <h3 class="text-light text-start">내가 좋아하는 컨텐츠</h3>
    <div hidden>{{ recommendList }}</div>
    <!-- <div>{{ recommendList.length }}</div> -->
    <carousel 
    :center-mode="true" :per-page-custom="[[480, 2], [768, 3]]"
    >
    <!-- :autoplay-timeout="3000" -->
    <!-- :autoplay="true" -->
    <!-- :navigation-enabled="true" -->
      <slide><img :src='RecommendMovieSrc1' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc2' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc3' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc4' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc6' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc7' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc8' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc9' width="300px" height="400px"></slide>
      <slide><img :src='RecommendMovieSrc10' width="300px" height="400px"></slide>
    </carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from '@jambonn/vue-concise-carousel'
import '@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css'

export default {
  name: 'MovieRecommend',
  components: { Carousel, Slide },
  data() {
    return {
      recommendList: [],
      like_list: [21, 5334, 25521]
    }
  },
  created() {
    const params = {
      api_key: 'b4893f302d08c4a823cdf51e8fcee9cc',
      language: 'ko-KR'
    }
    axios.get('http://127.0.0.1:8000/api/v1/accounts/likelist/')
      .then(res => {
        console.log(res.data)
        this.like_list = res.data.like_movie_list
      })
      .then(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${this.like_list[0]}/similar`, { params })
          .then(res => {
            console.log(res.data.results)
            this.recommendList = res.data.results.slice(0,10)
          })
          .catch(err => {
            console.error(err)
          })
        axios.get(`https://api.themoviedb.org/3/movie/${this.like_list[0]}/recommendations`, { params })
          .then(res => {
            console.log(res.data.results)
            const tmp = this.recommendList.concat(res.data.results.slice(0,10))
            this.recommendList = tmp
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  },
  computed : {
    RecommendMovieSrc1() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[0].poster_path
    },
    RecommendMovieSrc2() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[1].poster_path
    },
    RecommendMovieSrc3() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[2].poster_path
    },
    RecommendMovieSrc4() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[3].poster_path
    },
    RecommendMovieSrc5() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[4].poster_path
    },
    RecommendMovieSrc6() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[5].poster_path
    },
    RecommendMovieSrc7() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[6].poster_path
    },
    RecommendMovieSrc8() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[7].poster_path
    },
    RecommendMovieSrc9() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[8].poster_path
    },
    RecommendMovieSrc10() {
      // console.log(data)
      return 'https://image.tmdb.org/t/p/w500' + this.recommendList[9].poster_path
    },
  }
  
}
</script>

<style>

</style>