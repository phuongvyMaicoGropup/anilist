/* eslint-disable */ 
<template>
  <div class="flex  h-20 w-10/12">
    <div class="text-black font-semibold text-xl w-1/12">
      #{{ media.trending }}
    </div>
    <div class="flex justify-between w-11/12 bg-white rounded-lg shadow-md mr-auto ">
      <div class="flex w-6/12">
        <div
          class="
            object-cover
            overflow-hidden
            rounded

            aspect-[3/4]
          "
        >
          <img class="" :src="media.coverImage.medium" :alt="media.title" />
        </div>
        <div>
          <h3>{{ media.title.userPreferred }}</h3>
          <div class="flex">
            <div class="flex flex-wrap">
              <div v-for="genre in media.genres" :key="genre">
                <p
                  :style="style"
                  class="text-white rounded-xl p-1 text-xs mr-3 mb-3"
                >
                  {{ genre }}
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
      <div class="w-6/12 justify-around flex">
        <div>
          {{ media.popularity }}
        </div>
        <div>
          {{ media.averageScore }}
        </div>
        <div>
          {{ media.format }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChipText from "./ChipText.vue";
export default {
  name: "MediaCardHoz",
  components: {
    ChipText,
  },
  props: {
    media: Object,
  },
};
</script>

<style>
</style>