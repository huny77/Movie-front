<template>
  <div>    
    <div class="px-5 pt-3">
      <h3 class="text-light text-start">오늘의 추천 컨텐츠</h3>
    </div>
    
    <div hidden>
      {{bestMovies[0].poster_path}}
    </div>
    <carousel-3d autoplay=True autoplayHoverPause=True height=500>
      <slide :index="0">
        <img :src="bestMoviePosterSrc1" alt="" @click="isModalViewed=true, tossMovie=bestMovies[0]">
      </slide>
      <slide :index="1">
        <img :src="bestMoviePosterSrc2" alt="" @click="isModalViewed=true, tossMovie=bestMovies[1]">
      </slide>
      <slide :index="2">
        <img :src="bestMoviePosterSrc3" alt="" @click="isModalViewed=true, tossMovie=bestMovies[2]">
      </slide>
      <slide :index="3">
        <img :src="bestMoviePosterSrc4" alt="" @click="isModalViewed=true, tossMovie=bestMovies[3]">
      </slide>
      <slide :index="4">
        <img :src="bestMoviePosterSrc5" alt="" @click="isModalViewed=true, tossMovie=bestMovies[4]">
      </slide>
    </carousel-3d>
    
    <ModalView v-if="isModalViewed" @close-modal="isModalViewed=false">
      <MovieDetail :movieInfo="tossMovie"/>
    </ModalView>

  </div>
</template>

<script>
// import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import ModalView from '@/components/ModalView.vue'
import MovieDetail from '@/components/MovieDetail.vue'

export default {
  name: "MovieFiveBest",
  props: {
    movie: {
      type: Object
    },
    bestMovies: {
      type: Array
    }
  },
  data: function () {
    return {
      // bestMovies: [],
      isModalViewed: false,
      tossMovie: Object,
    }
  },
  components: {
    Carousel3d,
    Slide,
    ModalView,
    MovieDetail,
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