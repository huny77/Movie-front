<template>
<div>
  <div class="col"> 
    <div class="card card-background-color">
      <img :src="moviePosterSrc"  class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-title text-light">{{ movie.title }}</p>
        <p class="card-text text-light">{{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object
    }
  },
  computed : {
    moviePosterSrc() {
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
    }
  }
}
</script>

<style>
 .card-background-color {
   background-color: #27292d
 }
</style>