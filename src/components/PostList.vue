<template >
  <div class=" justify-between md:mx-5 lg:mx-10 sm:mx-5 mx-5 ">
    <HeadingTitle :title="title" />
    <div v-if="hoz == false">
      <div
        class="
          overflow-hidden
          grid
          2xl:grid-cols-5 2xl:gap-5 2xl:grid-rows-1
          xl:grid-rows-1
          lg:grid-rows-1
          md:grid-rows-1
          sm:grid-rows-1
          xl:grid-cols-5 xl:gap-5
          lg:grid-cols-5 lg:gap-5
          md:grid-cols-6 md:gap-3
          sm:grid-cols-5 sm:gap-6
          grid-cols-3
          gap-3
          justify-between
        "
      >
        <div
          class="2xl:m-3 xl:m-3 lg:m-3 md:m-3 mr-auto"
          v-for="media in MediaList"
          :key="media.id"
        >
          <MediaCard :media="media" />
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="
        "
      >
        <div
          class="2xl:m-3 xl:m-3 lg:m-3 md:m-3 mx-auto justify-center"
          v-for="media in MediaList"
          :key="media.id"
        >
          <MediaCardHozi :media="media" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadingTitle from "./HeadingTitle.vue";
import MediaCard from "./MediaCard.vue";
import gql from "graphql-tag";
import MediaCardHozi from "./MediaCardHozi.vue";
import topAnime from "../graphql/MediaQuery.js";

export default {
  name: "PostList",
  components: {
    HeadingTitle,
    MediaCard,
    MediaCardHozi,
  },
  props: {
    MediaList: Array,
    title: String,
    hoz: Boolean,
  },
};
</script>
<style lang="">
</style>