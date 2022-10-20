
<template>
  <!-- featured section -->
  <section class="first-container">
        <div class="featured-wrapper">
 <section class="hero-card">
    <div>
        <img class="image" src="super.jpg" alt="">
     
     </div>
     <div>
      <h2 class="theme">personalize you theme</h2>
       <div class="big-dots-wrapper">
        <div id="big-white" class="big-dot"></div>
        <div id="big-blue" class="big-dot"></div>
        <div id="big-green" class="big-dot"></div>
        <div id="big-purple" class="big-dot"></div>
       </div>
     </div>
 </section>

    <section class="hero-card">
        <div >
            <img class="image" src="tom.jpg" alt="">
         
         </div>
         <div>
            <h2 class="theme">search movie here</h2>
            <div>
                <form @submit.prevent="searchMovie" action="">
                    <input v-model="searchValue" type="text" class="search" placeholder="land of good luck">
                </form>
            </div>

         </div>
    </section>

        </div>
    </section>


    <section class="cards-sections-wrapper">
        <div class="movie-card"  v-for="movie in movies" :key="movie.id">
            <div class="image-container">
                <img class="image-movie" :src="movie.Poster" alt="">
            </div>
           
            <div class="author">
            
                <div>
                    <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">{{movie.Title}}</span></h3>
                    <p> {{movie.Title}}</p>
                </div>
              <div class="more-user-wrapper"><div class="user-wrapper"><h4>{{movie.Type}}</h4><img class="user" :src="movie.Poster" alt=""></div>
           <div> <button class="more-btn">Read More</button></div>
            </div>

            </div>
        </div>
        
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

      

        <!-- <div class="movie-card">
            <div class="image-container">
                <img class="image-movie" src="/assests/images/tom.jpg" alt="">
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
                <img class="image-movie" src="/assests/images/super.jpg" alt="">
            </div>
           
            <div class="author">
            
                <div>
                    <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                </div>
              <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="/assests/images/tom.jpg" alt=""></div>
           <div> <button class="more-btn">Read More</button></div>
            </div>

            </div>
        </div>
        <div class="movie-card">
            <div class="image-container">
                <img class="image-movie" src="/assests/images/super.jpg" alt="">
            </div>
           
            <div class="author">
            
                <div>
                    <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                </div>
              <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="/assests/images/tom.jpg" alt=""></div>
           <div> <button class="more-btn">Read More</button></div>
            </div>

            </div>
        </div>
        <div class="movie-card">
            <div class="image-container">
                <img class="image-movie" src="/assests/images/super.jpg" alt="">
            </div>
           
            <div class="author">
            
                <div>
                    <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                </div>
              <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="/assests/images/tom.jpg" alt=""></div>
           <div> <button class="more-btn">Read More</button></div>
            </div>

            </div>
        </div>
        <div class="movie-card">
            <div class="image-container">
                <img class="image-movie" src="/assests/images/super.jpg" alt="">
            </div>
           
            <div class="author">
            
                <div>
                    <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                </div>
              <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="/assests/images/tom.jpg" alt=""></div>
           <div> <button class="more-btn">Read More</button></div>
            </div>

            </div>
        </div>
        <div class="movie-card">
            <div class="image-container">
                <img class="image-movie" src="/assests/images/super.jpg" alt="">
            </div>
           
            <div class="author">
            
                <div>
                    <h3 class="logo"><span class="green-head">Land of lucky</span> <span class="white-head">Lebricones</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, perspiciatis!</p>
                </div>
              <div class="more-user-wrapper"><div class="user-wrapper"><h4>By Kual Louis</h4><img class="user" src="/assests/images/tom.jpg" alt=""></div>
           <div> <button class="more-btn">Read More</button></div>
            </div>

            </div>
        </div> -->



    </section>
</template>
<script>
export default{
data(){
    return{
        searchValue:"",
        movies:[],
        apiKey:"11fc4a08",
        showDetails:false,
        plotMovie:[]
    }
},
methods: {
    searchMovie(){
        fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.searchValue}`)
        .then((res)=>res.json())
        .then((data)=>{
            this.movies=data.Search
            console.log(data)
        })
        this.searchValue=""
        console.log(this.movies)
      
    },
    detail(id){
        console.log(id)
        this.showDetails=true
        fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
           .then(res=>res.json())
           .then((data)=>{
            
        
           })
    }
},
}
</script>
<style>

</style>