<template>
  <!-- featured section -->
  <section class="first-container">
    <div class="featured-wrapper">
      <!-- one card for feartured -->
      <featured />

      <!-- this is the temp code  -->

      <section class="hero-card">
        <div>
          <img class="image" src="tom.jpg" alt="" />
        </div>
        <div>
          <h2 class="theme">search movie or series here</h2>
          <div>
            <form @submit.prevent="searchMovie" action="">
              <input 
                v-model="searchValue"
                type="text"
                class="search text-white"
                placeholder="land of good luck"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  </section>


  <section class="cards-sections-wrapper">
    <!-- this is a single movie component -->
    <SingleMovie v-for="movie in movies" :key="movie.id" :singleMovie="movie" />
    <DefaultMovie />
  </section>
  
</template>
<script>
import featured from "./feature.vue";
import SingleMovie from "./single-movie.vue";
import DefaultMovie from "./default-movie.vue";
export default {
  components: {
    featured,
    SingleMovie,
    DefaultMovie,
  },
  data() {
    return {
      searchValue: "",
      movies: [],
      apiKey: "11fc4a08",
      showDetails: false,
      plotMovie: [],
    };
  },
  methods: {
    searchMovie() {
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
    },
    detail(id) {
      console.log(id);
      this.showDetails = true;
      fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
        .then((res) => res.json())
        .then((data) => {});
    },
  },
};
</script>
<style></style>
