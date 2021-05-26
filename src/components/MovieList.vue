<template>
  <div>
    <MovieFiveBest/>
    <MovieRecommend/>
    <div class="row row-cols-6 row-cols-md-6 g-4">
      <div v-for="movie in movies" :key="movie.id">        
        <div class="col">
          <div class="card">
          <MovieCard :movie="movie"/>
          <button @click="isModalViewed=true, tossMovie=movie"> 상세 </button>
          
          <ModalView v-if="isModalViewed" @close-modal="isModalViewed=false">
          <MovieDetail :movieInfo="tossMovie"/>
          </ModalView>
          </div>
        </div>  
      </div> 
    </div>
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
      tossMovie: Object
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