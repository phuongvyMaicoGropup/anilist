<template>
  <div class="bg-slate-100">
    <MainHeader style="overflow-y: scroll; overflow-x: hidden" />
    <div class="justify-center mx-auto">
      <SearchBar />
      <router-view></router-view>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    SearchBar,
    MainFooter,
  },
  computed: {
    // router() {
    //   return this.$route.name
    // }
  },

  mounted() {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #237, 241, 245;
  color: #2c3e50;
}
</style>
