<template>
  <div class="mx-auto">
    <div v-if="title">
    <HeadingTitle :title="title" :queryObject="queryObject"/>

    </div>
    <div v-if="hoz == false">
      <div
        class="grid my-2 grid-rows-1 2xl:grid-cols-5 2xl:gap-5 md:grid-rows-1 sm:grid-rows-1 xl:grid-cols-5 xl:gap-3 lg:grid-cols-5 lg:gap-3 md:grid-cols-5 md:gap-3 sm:grid-cols-3 sm:gap-3 grid-cols-3 gap-3 justify-between"
      >
        <div
          class="2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2 sm:mx-1 mx-auto "
          v-for="media in MediaList"
          :key="media.id"
          :class="{
            'md:hidden': MediaList.indexOf(media) === MediaList.length - 1 && isNowrap,
          }"
        >
          <MediaCard :left="(MediaList.indexOf(media) +1)% 5  ===0 " :media="media" @click="navigateToPage(media.id)" />

        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="this.width >1000" class="justify-center mx-auto">
        <div
          class="2xl:m-3 xl:m-3 lg:m-3 md:m-3"
          v-for="media in MediaList" 
          :key="media.id"
        >
          <MediaCardHozi @click="navigateToPage(media.id)" :media="media" :index="MediaList.indexOf(media)+1"  />
          
       

        </div>
      </div>
      <div v-else>
        <div
        class="grid my-2 grid-rows-1 2xl:grid-cols-5 2xl:gap-5 md:grid-rows-1 sm:grid-rows-1 xl:grid-cols-5 xl:gap-3 lg:grid-cols-5 lg:gap-3 md:grid-cols-5 md:gap-3 sm:grid-cols-3 sm:gap-3 grid-cols-3 gap-3 justify-between"
      >
        <div
          class="2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2 sm:mx-1 mx-auto "
          v-for="media in MediaList"
          :key="media.id"
          :class="{
            'md:hidden': MediaList.indexOf(media) === MediaList.length - 1 && isNowrap,
          }"
        >
          <MediaCard :index="MediaList.indexOf(media)+1" :left="(MediaList.indexOf(media) +1)% 5  ===0 " :media="media" @click="navigateToPage(media.id)" />

        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadingTitle from "./HeadingTitle.vue";
import MediaCard from "./card/MediaCard.vue";
import MediaCardHozi from "./card/MediaCardHozi.vue";

export default {
  name: "PostList",
  components: {
    HeadingTitle,
    MediaCard,
    MediaCardHozi,
  },
  
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  
  data() {
        return {
          i:1,
          width: window.innerWidth, height: window.innerHeight ,
            
            txt: ''
        }
    },

    

  props: {
    queryObject : Object,
    MediaList: Array,
    title: String,
    hoz: Boolean,
    isNowrap: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigateToPage(id) {
      console.log("navigateToPage" + id);
      this.$router.push({
        path: "/anime/" + id+"/",
      });
    },
     onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
  mounted() {

    // console.log( window.innerWidth)
  }
};
</script>
<style lang=""></style>
