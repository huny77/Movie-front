<template>
  <div>
    <p>{{ movie.title }}</p>
    <!-- {{ movie.title }} -->
    <!-- <iframe 
      :src="youtube(movieDetail.videos.results[0].key)"
      frameborder="0"  
      width="640" 
      height="360">
    </iframe> -->
  </div>
</template>

<script>
import { movieApi } from '@/utils/axios.js'
import { mapMutations } from "vuex";

export default {
  name: 'YoutubeSearch',
  props: {
    movie: {
      type: Object
    },
  },
  data() {
    return {
      movieDetail: {},
    }
  },
  async mounted() {
    this.SET_LOADING(true);
    console.log(this.$route);
    console.log(this.$route.params.id);
    const { id } = this.$route.params;
    const { data } = await movieApi.movieDetail(id);
    // axios 요청 보내기
    console.log(data);
    this.movieDetail = data;
    this.SET_LOADING(false);
    // backdro
  },
  methods: {
    ...mapMutations(["SET_LOADING"]),
    image(img) {
      console.log();
      return `https://image.tmdb.org/t/p/original/${img}`;
    },
    youtube(src) {
      console.log(src)
      return `https://www.youtube.com/embed/${src}`;
    },
  },
  
}
</script>

<style>

</style>
