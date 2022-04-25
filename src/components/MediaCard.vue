<template>
  <div
    class="
      relative
      lg:w-48
      md:w-32
      w-40
      sm:w-36
      md:max-w-sm md:min-w-full
      lg:max-w-sm lg:min-w-full
      xl:max-w-sm xl:min-w-full
      2xl:max-w-sm 2xl:min-w-full
      max-w-sm max-h-72
      min-w-full min-h-fit
      rounded
      
      pointer-events-auto
    "
    @mouseover="mouseover"
    @mouseleave="mouseleave"
>
    <div
      class="object-cover max-w-sm w-full overflow-hidden rounded aspect-[3/4]"
    >
      <img :src="media.coverImage.large" :alt="media.title" />
    </div>
    <div class="px-2 py-4 min-w-full">
      <div class="text-left text-sm">{{ media.title.userPreferred }}</div>
    </div>
    <div
      class="
        self-start
        text-md text-left
        absolute
        font-medium
        top-3
        -right-5
        rounded
        translate-x-full
        z-10
        w-64
        md:min-w-0
        lg:visible
        invisible
        bg-white
        px-6
        py-3
        shadow-2xl
      "
      :style="{ display: displayMedia }">
    <div class="card-box relative ">
<div class="flex justify-between pb-3">
        <h3 class="">Ep {{ media.nextAiringEpisode?.episode }} in 6 days</h3>
        <div v-if="media.averageScore > 80">
          <i style="color: green" class="fa-regular fa-face-smile"></i>
          {{ media.averageScore }}%
        </div>
        <div v-else>
          <i style="color: red" class="fa-regular fa-face-meh"></i>
          {{ media.averageScore }}%
        </div>
      </div>
      <div class="flex">
        <div
          :style="{ color: media.coverImage.color }"
          class="font-semibold pb-2 text-sm"
          v-for="node in media.studios.nodes"
          :key="node"
        >
          <div v-if="node != media.studios.nodes.at(-1)">{{ node.name }},</div>
          <div v-else>{{ node.name }}</div>
        </div>
      </div>

      <div class="pb-4">
        {{ media.format }} Show - {{ media?.episodes || "" }} episodes
      </div>
      <div class="flex flex-wrap overflow-hidden">
        <div v-for="genre in media.genres" :key="genre">
          <p :style="style" class="text-white rounded-xl p-1 text-xs mr-3 mb-3">
            {{ genre }}
          </p>
        </div>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import ChipText from "./ChipText.vue";
export default {
  name: "MediaCard",
  components: {
    ChipText,
  },
  methods: {
    mouseover: function () {
      this.displayMedia = "block";
    },
    mouseleave: function () {
      this.displayMedia = "none";
    },
  },
  computed: {
    // a computed getter
    style() {
      return {
        "background-color": this.media.coverImage.color,
      };
    },
  },
  data() {
    return {
      displayMedia: "none",
    };
  },
  props: {
    media: {
      id: Number,
      format: String,
      averageScore: Number,
      episodes: {
        type: Number,
        default: 0,
      },
      studios: {
        nodes: Array,
      },
      status: String,
      coverImage: {
        extraLarge: String,
        large: String,
        medium: String,
        color: String,
      },

      nextAiringEpisode: Object,
      genres: Array,
      title: {
        romaji: String,
        english: String,
        native: String,
        userPreferred: String,
      },
    },
  },
  apollo: {},
};
</script>


<style scoped>
.more-info {
  display: var(--displayMedia);

  widows: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
}
.card-box::before{
  position: absolute;
  content:"\A";
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-color: transparent white transparent transparent;
    position: absolute;
    left: -15%;
    

}
</style>