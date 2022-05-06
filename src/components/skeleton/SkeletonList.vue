<template lang="">
  <div class="mx-auto">
    <div class="flex justify-between">
      <div class="bg-slate-200 rounded w-2/12 h-5 mb-3"></div>
      <div class="bg-slate-200 rounded w-1/12 h-5 mb-3"></div>
    </div>

    <div v-if="hoz == false">
      <div
        class="grid grid-rows-1 my-2 2xl:grid-cols-5 2xl:gap-5 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-1 xl:grid-cols-5 xl:gap-3 lg:grid-cols-5 lg:gap-3 md:grid-cols-5 md:gap-3 sm:grid-cols-3 sm:gap-3 grid-cols-3 gap-3 justify-between"
      >
        <SkeletonCard />
        <SkeletonCard />
        <!-- <SkeletonCard /> -->

        <SkeletonCard />

        <SkeletonCard />

        <SkeletonCard />
      </div>
    </div>
    <div v-else>
      <div class="justify-center mx-auto">
        <!-- <div
          class="2xl:m-3 xl:m-3 lg:m-3 md:m-3 "
          v-for="media in MediaList"
          :key="media.id"
        >
          <MediaCardHozi @click="navigateToPage"  :media="media" />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import SkeletonCard from "./SkeletonCard.vue";
export default {
  name: "SkeletonList",
  components: {
    SkeletonCard,
  },
  data() {
    return {
      hoz: false,
    };
  },
};
</script>
<style lang=""></style>
