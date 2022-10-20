<template>
 
 <main class="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6 mx-10">
            <article class="max-w-4xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
                <div class="col-span-4 lg:text-center lg:pt-14 mb-10">
                    <img src="./images/illustration-1.png" alt="" class="rounded-xl">

                    <p class="mt-4 block text-gray-400 text-md">
                        Published on <time>{{movie.Released}}</time>
                    </p>

                    <div class="flex items-center lg:justify-center text-sm mt-4">
                        <img class="rounded-lg" :src="movie.Poster" alt="Lary avatar">
                        
                    </div>
                    <div class="ml-3 text-left">
                        <h1 class="font-bold text-white mt-5 text-xl ">The actors include</h1>
                            <h5 class=" text-gray-200 mt-5 text-sm ">{{movie.Actors}}</h5>
              
                            <h1 class=" font-bold text-white mt-5 text-xl ">The {{movie.Type}} is  written by </h1>
                            <h5 class=" text-gray-200 mt-5 text-sm "> {{movie.Writer}}</h5>
                          
                            <h5 class=" font-bold text-white mt-5 text-xl ">The {{movie.Type}} is  didrected by</h5>
                            <h5 class=" text-gray-200 mt-5 text-sm "> {{movie.Director}}</h5>
                        </div>
                </div>

                <div class="col-span-8">
                    <div class="hidden lg:flex justify-between mb-6">
                    <router-link to="/">
                        <div
                            class="transition-colors text-white duration-300 relative inline-flex items-center text-lg hover:text-blue-500">
                            <svg width="22" height="22" viewBox="0 0 22 22" class="mr-2">
                                <g fill="none" fill-rule="evenodd">
                                    <path stroke="#000" stroke-opacity=".012" stroke-width=".5" d="M21 1v20.16H.84V1z">
                                    </path>
                                    <path class="fill-current"
                                        d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z">
                                    </path>
                                </g>
                            </svg>

                          back home
                        </div>
                    </router-link>

                        <div class="space-x-2">
                            <a href="#"
                                class="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                style="font-size: 10px">{{movie.Type}}</a>
                         
                        </div>
                    </div>

                    <h1 class="font-bold text-3xl lg:text-4xl mb-10 text-white">
                   {{movie.Title}}
                    </h1>

                    <div class="space-y-4 lg:text-lg leading-loose">
                        <p class=" text-white">   {{movie.Plot}}</p>

                   
                    </div>
                </div>
            </article>
        </main>
</template>
<script>
import { createDOMCompilerError } from '@vue/compiler-dom';

export default{

    name:'movieDetail',
   data(){
   return{
    id:this.$route.params.id,
    apiKey: "11fc4a08",
    movie:[]
   }
   }
,
    methods:{
        detail() {
      fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${this.id}`)
        .then((res) => res.json())
        .then((data) => {
            this.movie= data;

            console.log(data)
            console.log(this.movie);
        });
    },
    }
    ,
    created(){
        console.log('created')
        this.detail()
    }

}
</script>
<style>

</style>