<script>
import pageHeader from "./components/pageHeader.vue"
import hero from "./components/hero.vue"
import searchButton from "./components/searchButton.vue"
import heroSection  from "./components/hero-section.vue"
export default{
name:"App",
components:{
pageHeader,
searchButton,
heroSection
}
}
</script>

<template>
  <pageHeader/>
<router-view/>
</template>

<style>

</style>
