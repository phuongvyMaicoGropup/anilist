/* eslint-disable */
<template>
  <div class="flex m-auto h-20 w-11/12 text-left relative">
    <div  class="text-black font-semibold text-xl w-1/12">
      #{{ index }}
    </div>
    <div
      class="flex justify-between w-11/12 bg-white rounded-lg shadow-md mr-auto p-2"
    >
      <div class="flex w-6/12">
        <div class="overflow-hidden rounded  w-12 ">
          <img class="w-12 h-full object-cover " :src="media.coverImage.medium" :alt="media.title" />
        </div>
        <div class="px-3 font-medium justify-start">
          <h3 class="text-left">{{ media.title.userPreferred }}</h3>
          <div class="flex py-1">
            <div class="flex flex-wrap">
              <div v-for="genre in media.genres" :key="genre">
                <p
                  :style="style"
                  class="text-white rounded-xl grid-rows-1 px-1 text-xs mr-3 mb-1"
                >
                  {{ genre.toLowerCase() }}
                </p>
              </div>
            </div>
            <!-- <div v-for="tag in media" :key="tag">
              <ChipText textColor="white" backgroundColor="black">{{
                tag
              }}</ChipText>
            </div> -->
          </div>
        </div>
      </div>
      <div class="w-6/12 grid grid-cols-3 font-medium text-sm">
        <div class="flex">
          <div>
            <div v-if="media.averageScore > 80">
              <i style="color: green" class="fa-regular fa-face-smile"></i>
            </div>
            <div v-else>
              <i style="color: red" class="fa-regular fa-face-meh"></i>
            </div>
          </div>
          <div class="ml-2 font-medium text-sm">
            <p>{{ media.averageScore }}%</p>
            <p class="opacity-70 text-xs">{{ media.popularity }} users</p>
          </div>
        </div>
        <div>
          <p>
            {{
              media.format[0].toUpperCase() +
              media.format.substring(1).toLowerCase()
            }}
          </p>
          <div v-if="media.duration != null" class="opacity-70 text-xs">
            {{ getDuration(media.duration) }}
          </div>
          <div v-else class="opacity-70 text-xs">
            {{ media.episodes }} episodes
          </div>
        </div>
        <div>
          <p>{{ media.season }} {{ media.seasonYear }}</p>
          <p class="opacity-70 text-xs">
            {{
              media.status[0].toUpperCase() +
              media.status.substring(1).toLowerCase()
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChipText from "../ChipText.vue";
export default {
  name: "MediaCardHoz",
  components: {
    ChipText,
  },
  props: {
    media: Object,
    index: Number,
    
    
  },

  computed: {
    // a computed getter
    style() {
      return {
        "background-color": this.media.coverImage.color,
      };
    },
  },
  methods: {
    getDuration(a) {
      if (a > 60) return Math.floor(a / 60) + " hours " + (a % 60) + " mins";
    },
  },
};
</script>

<style></style>
