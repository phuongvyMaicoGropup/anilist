<template>
<div class="w-full">
  <MainHeader/>

  

  <Routing/>


</div>

</template>
<script>

import MainHeader from "./components/MainHeader.vue"
import Routing from "./components/Routing.vue"

export default {
  name: 'App',
  components: {
    MainHeader,
    Routing,
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #237,241,245; 
  color: #2c3e50;
}
</style>
