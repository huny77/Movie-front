<template>
  <div>
    <div hidden>
      {{bestMovies[0].poster_path}}
    </div>
    <carousel-3d autoplay=True autoplayHoverPause=True height=500>
      <slide :index="0">
        <img :src="bestMoviePosterSrc1" alt="">
      </slide>
      <slide :index="1">
        <img :src="bestMoviePosterSrc2" alt="">
      </slide>
      <slide :index="2">
        <img :src="bestMoviePosterSrc3" alt="">
      </slide>
      <slide :index="3">
        <img :src="bestMoviePosterSrc4" alt="">
      </slide>
      <slide :index="4">
        <img :src="bestMoviePosterSrc5" alt="">
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: "MovieFiveBest",
  props: {
    movie: {
      type: Object
    }
  },
  data: function () {
    return {
      bestMovies: [],
    }
  },
  components: {
    Carousel3d,
    Slide,
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/v1/movies/bestFive/')
      .then(res => {
        console.log(res.data)
        this.bestMovies = res.data
      })
      .catch(err => {
        console.error(err)
      })
  },
  computed : {
    bestMoviePosterSrc1() {
      return 'https://image.tmdb.org/t/p/w500' + this.bestMovies[0].poster_path
    },
    bestMoviePosterSrc2() {
      return 'https://image.tmdb.org/t/p/w500' + this.bestMovies[1].poster_path
    },
    bestMoviePosterSrc3() {
      return 'https://image.tmdb.org/t/p/w500' + this.bestMovies[2].poster_path
    },
    bestMoviePosterSrc4() {
      return 'https://image.tmdb.org/t/p/w500' + this.bestMovies[3].poster_path
    },
    bestMoviePosterSrc5() {
      return 'https://image.tmdb.org/t/p/w500' + this.bestMovies[4].poster_path
    },
  }
}
</script>

<style>

</style>