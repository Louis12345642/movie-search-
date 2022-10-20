
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
    
</div>

     </div>
     
    </div>
    </div>

   

    </div>
</section>
</template>
<script>
     
    // require('dotenv').config
    import movie from './movie.vue'
export default{
    name:"seachButton",
    components:{
   movie
    },
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
},
}
</script>
<style>
.form-wrapper{
    display:flex;
    align-content: center;
    justify-content: center;
    flex-direction:row;

}
input{
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
    border-style:none;
    height:30px;
    border: 4px solid  #37dd76 ;
    border-radius: 15px;
    background-color: #352b41;
    color: white;
    font-weight: 500;
    text-align: center;
    z-index:1px;
     
}
button{
    color:white;
    background-color:#2cdd70;
    text-align: center;
    width:177px;
    height: 30px;
    border-style:none;
    border-radius:25px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    font-size:25px;
    font-weight: 400;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
button:hover{
    border-style:none;
}
.movie-wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    
}
.movie-card{
    background-color: #0f1538;
    margin:20px;
    border:10px;
    border-radius:10px;
    box-shadow:2px 2px 2px rgba(0,0,0 ,0.3);
}
.image{
    width: 100%;
    height:300px;
    background-color:rgb(136, 173, 34);
    border-top-right-radius:10px ;
     border-top-left-radius:10px ;

}
.image-tag{
    width: 100%;
    object-fit:cover;
    height:300px;
}
.title{
    text-align: center;
    color:rgb(255, 255, 255);
    font-family: 'Roboto Mono';
    font-size:20px;
    padding: 10px;
}
.discription{
    padding: 20px;
    text-align: center;
    color:white;
    line-height: 1.6em;
    font-size: 20px;
}
.type-movie{
    background-color: rgb(133, 5, 5);
    color: white;
    width:100px;
    height:30px;
    box-shadow:2px 2px 2px rgba(0,0,0 ,0.3);
    border-radius:5px;
    text-align: center;
    font-family: 'Roboto Mono';
    padding: 5px;

}

</style>