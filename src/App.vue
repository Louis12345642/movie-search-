<script>
import pageHeader from "./components/pageHeader.vue"
import hero from "./components/hero.vue"
import heroSection  from "./components/hero-section.vue"
export default{
name:"App",
components:{
pageHeader,
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
