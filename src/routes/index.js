import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import movieDetails from '../views/movieDetails.vue'


const routes=[
    {
        path:'/',
        name:'home',
        component:home

    },
    {
        path:'/movie/:id',
        name:'movie',
        component:movieDetails
    }

]

const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
export default router