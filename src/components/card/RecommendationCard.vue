<template lang="">
  <div

    class="relative  lg:w-32 truncate  align-text-top md:w-32 w-32 my-2  md:min-w-full lg:max-w-xs lg:min-w-full xl:max-w-sm xl:min-w-full 2xl:max-w-sm 2xl:min-w-full max-w-sm max-h-72 rounded pointer-events-auto"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="relative w-32 overflow-hidden align-text-top rounded aspect-[3/4]">
      <img :src="recommendation.coverImage.large" :alt="recommendation.title" />
      <div :style="{'display':display}" class=" absolute bottom-0 text-white bg-slate-500 font-semibold opacity-80 rounded p-2 my-auto text-sm flex justify-around w-full mx-auto">
        <i class="fa-solid fa-thumbs-up"></i>
<i class="fa-solid fa-thumbs-down"></i>
      +{{ recommendation.favourites}}
    </div>
    </div>
    <div class="my-1">
      <div class="text-left text-xs line-clamp-2">
        <p class="recommendation-title truncate hover:text-clip">
          {{ recommendation.title.userPreferred }}
        </p>
      </div>
    </div>
    
    
  </div>
</template>
<script>
export default {
  name: "RecommendationCard",
  data() {return {
    display : "none"
  }},
  computed: {
    isMouseOver(){
      return display 
    }
  },
  props: {
    recommendation: Object,
  },
  methods: {
    mouseover: function () {
      this.display = "flex";
    },
    mouseleave: function () {
      this.display = "none";
    },
  },
  mounted() {
      //   console.log(recommendation)
  }
};
</script>
<style lang=""></style>
