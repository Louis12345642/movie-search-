<template>
<div class="movie-card">
              <div class="image-container">
                  <img class="image-movie" src="cover2.jpg" alt="">
              </div>
             
              <div class="author">
              
                  <div>
                      <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                  </div>
                <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="hary.jpg" alt=""></div>
             <div> <button class="more-btn">Read More</button></div>
              </div>
  
              </div>
          </div>
  
          <div class="movie-card">
              <div class="image-container">
                  <img class="image-movie" src="tom.jpg" alt="">
              </div>
             
              <div class="author">
              
                  <div>
                      <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                  </div>
                <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="/assests/images/hary.jpg" alt=""></div>
             <div> <button class="more-btn">Read More</button></div>
              </div>
  
              </div>
          </div>
  
          <div class="movie-card">
              <div class="image-container">
                  <img class="image-movie" src="cover.jpg" alt="">
              </div>
             
              <div class="author">
              
                  <div>
                      <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                  </div>
                <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="cover.jpg" alt=""></div>
             <div> <button class="more-btn">Read More</button></div>
              </div>
  
              </div>
          </div>
</template>
<script>
import { ref } from 'vue';

export default{
    setup(){
        const movie=ref([]);
        function getDefault(){
      fetch(
        `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.searchValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.Search;
          console.log(data);
        });
      this.searchValue = "";
      console.log(this.movies);
    }
        
        return{
            movie,
            getDefault
        }
    }
}
</script>
<style>

</style>