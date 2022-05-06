<template>
  <div class="mx-auto">
    <div v-if="title">
    <HeadingTitle :title="title" />

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
      <div class="justify-center mx-auto">
        <div
          class="2xl:m-3 xl:m-3 lg:m-3 md:m-3"
          v-for="media in MediaList" 
          :key="media.id"
        >
          <MediaCardHozi @click="navigateToPage(media.id)" :media="media" :index="MediaList.indexOf(media)+1"  />
          <!-- <MediaCard :media="media" @click="navigateToPage(media.id)" /> -->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadingTitle from "./HeadingTitle.vue";
import MediaCard from "./card/MediaCard.vue";
import gql from "graphql-tag";
import MediaCardHozi from "./card/MediaCardHozi.vue";
import topAnime from "../graphql/MediaQuery.js";

export default {
  name: "PostList",
  components: {
    HeadingTitle,
    MediaCard,
    MediaCardHozi,
  },
  computed :{

  },
  data() {
    return {
      i: 1,
      
    };
  },
  props: {
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
        path: "/anime/" + id,
      });
    },
  },
};
</script>
<style lang=""></style>
