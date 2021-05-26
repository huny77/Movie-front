<template>
  <div>
    <MovieFiveBest/>
    <MovieRecommend/>
    <h3 class="text-light text-start">일반 컨텐츠</h3>
    <div class="row row-cols-6 row-cols-md-6 g-4">
      <div v-for="movie in movies" :key="movie.id">        
        <div class="col">
          <div class="card" @click="isModalViewed=true, tossMovie=movie, tossId=movie.id">
          <MovieCard :movie="movie"/>
          <!-- <button @click="isModalViewed=true, tossMovie=movie, tossId=movie.id"> 상세 </button> -->
          
          </div>
        </div>  
      </div> 
    </div>
    
    <ModalView v-if="isModalViewed" @close-modal="isModalViewed=false">
      <MovieDetail :movieInfo="tossMovie"/>
    </ModalView>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ModalView from '@/components/ModalView.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import MovieCard from '@/components/MovieCard.vue'
import MovieFiveBest from '@/components/MovieFiveBest.vue'
import MovieRecommend from '@/components/MovieRecommend.vue'

export default {
  name: 'MovieList',
  data() {
    return {
      isModalViewed: false,
      tossMovie: Object,
      tossId: 0
    }
  },
  components: {
    MovieFiveBest,
    ModalView,
    MovieDetail,
    MovieCard,
    MovieRecommend
  },
  computed: {
    ...mapState([
      'movies',
      'like_list'
    ])
  },
}
</script>

<style>

</style>