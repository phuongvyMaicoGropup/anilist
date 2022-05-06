<template>
  <div
    class="relative lg:w-40 align-text-top md:w-32 w-36 my-2 sm:w-40 md:max-w-sm md:min-w-full lg:max-w-xs lg:min-w-full xl:max-w-sm xl:min-w-full 2xl:max-w-sm 2xl:min-w-full max-w-sm max-h-72 rounded pointer-events-auto"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
   <div v-if="this.index" class="text-semibold rounded-full text-white absolute -top-2 -left-2 py-1 px-2 " :style="{'background-color' : media.coverImage.color }">
     #{{index}}
   </div>
    <div class="max-w-xs overflow-hidden align-text-top rounded aspect-[3/4]">
      <img :src="media.coverImage.large" :alt="media.title" />
    </div>
    <div class="mr-2 my-1">
      <div class="text-left text-md line-clamp-2">
        <p class="media-title truncate hover:text-clip">
          {{ media.title.userPreferred }}
        </p>
      </div>
    </div>
    <div
    :class="{'card-box-left': left, 'card-box':!left }"
      class="self-start text-md text-left absolute font-medium top-3 rounded translate-x-full z-10 w-64 md:min-w-0 lg:visible invisible bg-white px-6 py-3 shadow-2xl"
      :style="[{display: displayMedia},{right : left ? '': '-1.25rem'},{left : left ? '-1.25rem': ''},{transform : left ? 'translateX(-100%)': ''}]"
    >
      <div class="relative">
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
            <div v-if="node != media.studios.nodes.at(-1)">
              {{ node.name }},
            </div>
            <div v-else>{{ node.name }}</div>
          </div>
        </div>

        <div class="pb-4">
          {{ media.format }} Show - {{ media?.episodes || "" }} episodes
        </div>
        <div class="flex flex-wrap overflow-hidden">
          <div v-for="genre in media.genres" :key="genre">
            <p
              :style="style"
              class="text-white rounded-xl p-1 text-xs mr-3 mb-3"
            >
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
import ChipText from "../ChipText.vue";
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
      index: Number,
      left : Boolean,

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
.card-box::before {
  position: absolute;
  content: "\A";
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent transparent;
  position: absolute;
  left: -3%;
}
.card-box-left::before {
  position: absolute;
  content: "\A";
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent white transparent transparent;
  position: absolute;
  
  transform : rotate(0.5turn);

  right: -3%;
}
.media-title:hover {
  color: var(--background-color);
}
</style>
