<template>
    


        <div v-for="singleMovie in movies.slice(0,6) " :key="singleMovie.id" class="movie-card">

            <router-link :to="{name:'movie',params:{id:singleMovie.imdbID}}">
              <div class="image-container">
                  <img class="image-movie" :src="singleMovie.Poster" alt="">
              </div>
             
              <div class="author">
              
                  <div>
                      <h3 class="logo"><span class="green-head"></span> <span class="white-head">{{singleMovie.Title}}</span></h3>
                      <p> The {{singleMovie.Type}}  {{singleMovie.Title}}</p>
                      <p> was created in the year  {{singleMovie.Year}} under the id of {{singleMovie.imdbID}}</p>
                  </div>
                <div class="more-user-wrapper"><div class="user-wrapper"><h4>{{singleMovie.Type}}</h4><img class="user" :src="singleMovie.Poster" alt=""></div>
             <div> <button class="more-btn">Read More</button></div>
              </div>
  
              </div>
            </router-link>

          </div>

</template>
<script>
import { ref } from 'vue';

export default{
    setup(){
        const movies=ref([]);
        const apiKey=ref('11fc4a08');

        const searchValue=ref('turning red');
        function getDefault(){
      fetch(
        `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.searchValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('default movie',data);
          movies.value=data.Search

        });
      searchValue.value = "";
      console.log(this.movies);
    }
        
        return{
            apiKey,
          movies,
            searchValue,
            getDefault
        }
    },
    created(){
        console.log('default created')
        this.getDefault()
    }

}
</script>
<style>

</style>