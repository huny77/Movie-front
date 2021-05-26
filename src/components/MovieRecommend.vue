<template>
  <div>
    <h3>당신을 위한 오늘의 추천!</h3>
    <div> 대충 영화들 나열된 부분 </div>
    <div>  시밀러3개 레코멘드3개 장르3개 </div>
    <div>  만약 없을 시 뒤에 거 개수 늘어나는걸로 </div>
    <div>{{ recommendList }}</div>
    <div>{{ recommendList.length }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieRecommend',
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
            this.recommendList = res.data.results.slice(0,3)
          })
          .catch(err => {
            console.error(err)
          })
        axios.get(`https://api.themoviedb.org/3/movie/${this.like_list[0]}/recommendations`, { params })
          .then(res => {
            console.log(res.data.results)
            const tmp = this.recommendList.concat(res.data.results.slice(0,3))
            this.recommendList = tmp
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  }
  
}
</script>

<style>

</style>