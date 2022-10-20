<template>
       <router-link :to="{name:'movie',params:{id:singleMovie.imdbID
}}">
        <div class="movie-card">
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
          </div></router-link>
   
  
</template>
<script>
export default{
    name:'single-movie',
    props:['singleMovie'],
}
</script>
<style>
</style>