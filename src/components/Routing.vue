<script>
import Home from './Home.vue'
// import Detail from './About.vue'
// import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/search/anime/next-season': Home
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
 
  <component :is="currentView" />
</template>