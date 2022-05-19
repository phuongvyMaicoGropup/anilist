<template lang="">
  <div class="mx-auto">
    <div v-if="loading > 0">Loading</div>
    <div v-else class="mx-auto bg-slate-100">
      <div class="bg-white">
        <div
          v-if="Media?.bannerImage"
          class="shadow-lg xl:h-72 lg:h-72 md:h-72 sm:max-h-52 max-h-52 w-full object-cover overflow-hidden"
        >
          <img
            class="object-cover h-52 w-full"
            :src="Media.bannerImage"
            alt=""
          />
        </div>
        <div class="flex w-10/12 md:w-11/12 lg:w-10/12 mx-auto sm:flex-col flex-col md:flex-row lg:flex-row h-fit lg:h-72">
          <div class=" md:w-4/12 lg:w-3/12 w-full relative h-fit">
            <div
              class="-top-44 md:-top-32 lg:-top-28 absolute  lg:flex-col flex md:flex-col sm:flex flex-row justify-between sm:w-full w-full lg:w-52 md:w-52  "
              style="align-items: flex-end "
            >
              <div class="object-cover w-32 sm:w-32 lg:w-52 md:w-52" v-if="Media?.coverImage?.large">
                <img :src="Media.coverImage.large" alt="" />
              </div>
              <div class="flex lg:my-4 justify-between h-fit mt-3 w-full ">
                <div
                  class="lg:w-40 md:w-40  justify-between flex py-1 px-1 mr-3 sm:w-full w-full mx-2 rounded bg-blue-400 text-white "
                >
                  <p>Add to list</p>
                  <i class="my-auto fa-solid fa-chevron-down"></i>
                </div>
                <div class="rounded py-1 w-8 px-2  my-auto bg-red-500">
                  <i style="color: white" class="fa-solid fa-heart white"></i>
                </div>
              </div>
            </div>
          </div>
          

          <div class="md:w-8/12 lg:w-9/12 w-9/12 text-left mt-2 ml-3 pb-3 ">
            <h1 class="font-medium text-lg my-2">
              {{ Media.title?.userPreferred }}
            </h1>
            <div class="opacity-70 text-sm max-h-56 overflow-clip sm:hidden hidden lg:block 2xl:block md:block ">
              <p v-html="Media.description"></p>
            </div>
           
          </div>
        </div>
         <div class="grid grid-cols-3 justify-around text-sm text-slate-400 mt-5 pb-7">
              <a href="./">Overview</a>
              <a href="characters">Characters</a>
              <a href="staffs">Staff</a>
            </div>
      </div>
      <div
        class="w-11/12 lg:w-10/12 md:w-11/12 justify-between mx-auto md:flex-row lg:flex-row flex sm:flex-col flex-col"
      >
        <div
          class="bg-white m-2 lg:w-52 h-fit rounded-lg py-2 px-3 flex flex-row w-full lg:flex-col md:w-52 md:flex-col sm:flex-row sm:w-full overflow-scroll"
        >
          <!-- <Info title="Format" :value="['Ep'+Media.nextAiringEpisode.episode]" /> -->

          <Info title="Format" :value="[Media.format]" />
          <Info title="Episodes" :value="[Media.episodes]" />
          <Info title="Episodes duration" :value="[Media.duration + ' mins']" />
          <Info title="Status" :value="[Media.status]" />
          <Info title="Start Date" :value="[Media.startDate?.day]" />
          <Info title="End Date" :value="[Media.endDate?.day]" />
          <Info
            title="Season"
            :value="[Media.season + ' ' + Media.seasonYear]"
          />
          <Info title="Average Score" :value="[Media.averageScore + '%']" />
          <Info title="Mean Score" :value="[Media.meanScore + '%']" />
          <Info title="Popularity" :value="[Media.popularity]" />
          <Info title="Favorites" :value="[Media.favourites]" />
          <Info title="Studios" :value="[Media.studios?.nodes?.name]" />
          <Info title="Source" :value="[Media.source]" />
          <Info title="HashTags" :value="[Media.hashtag]" />
          <Info title="Genres" :value="Media.genres" />
          <Info title="Romaji" :value="[Media.title?.romaji]" />
          <Info title="English" :value="[Media.title?.english]" />
          <Info title="Native" :value="[Media.title?.native]" />
          <Info title="Synonyms" :value="Media.synonyms" />
        </div>

        <div class="mx-2 md:w-9/12 lg:w-9/12">
         <div class="text-left font-medium lg:hidden xl:hidden md:hidden sm:block block ">
            <h2 class="my-2">Description</h2>
            <div class="opacity-70 text-sm max-h-56 overflow-clip lbg-white rounded p-6 bg-white">
              <p v-html="Media.description"></p>
            </div>
          </div>
          <div v-if="Media.relations?.nodes" class="text-left font-medium">
            <h2 class="my-2">Relations</h2>
            <div
              class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 "
            >
              <RelationCard
                v-for="relation in Media.relations?.nodes"
                :relation="relation"
              />
            </div>
          </div>
          <div class="text-left font-medium">
            <h2 class="my-2">Characters</h2>
            <div
              class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1"
            >
              <CharacterCard
                v-for="c in Media.characters?.edges"
                :character="c"
              />
            </div>
          </div>
          <div class="text-left font-medium">
            <h2 class="my-2">Staff</h2>
            <div
              class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1"
            >
              <StaffCard v-for="c in Media.staff?.edges" :staff="c" />
            </div>
          </div>
          <div v-if="Media.trailer?.thumbnail" class="text-left font-medium">
            <h2 class="my-2">Trailer</h2>
            <div
              class="relative grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1"
            >
              <img :src="Media.trailer?.thumbnail" alt="" />
              <div class="text-white absolute top-0 left-1">Youtube</div>
            </div>
          </div>
          <div class="text-left font-medium">
            <div class="flex justify-between">
            <h2 class="my-2">Recommendations</h2>
            <h2 class="my-2 mr-5">Xem thêm</h2>
              
            </div>
            <div
              class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-4"
            >
              <RecommendationCard
                v-for="c in Media.recommendations?.nodes"
                :recommendation="c.mediaRecommendation"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- <h1>Detail Page</h1> -->
    </div>
  </div>
</template>
<script>
import Info from "./Info.vue";
import RelationCard from "./card/RelationCard.vue";
import RecommendationCard from "./card/RecommendationCard.vue";
import CharacterCard from "./card/CharacterCard.vue";
import StaffCard from "./card/StaffCard.vue";
import { detailMediaQuery } from "../graphql/MediaQuery.js";

export default {
  name: "DetailPage",
  data() {
    return {
      Media: {},
      page: "Overview",
      id: 1,
      loading: 0,
    };
  },
  components: {
    Info,
    CharacterCard,
    RelationCard,
    RecommendationCard,
    StaffCard,
  },
  computed: {
    getId() {
      return { id: this.$route.params.id };
    },
  },

  created() {
    this.$apollo
      .query({
        query: detailMediaQuery,
        // client: "questionnaire",
        loadingKey: "loading",
        variables: {
          id: this.$route.params.id,
        },
      })
      .then((data) => {
        this.Media = data.data.Media;
        // console.log("11111111111");
        // console.log(this.$route.query.search);
      })
      .catch((error) => {
        this.error = error;
        alert("E " + error);
      });
  },
  mounted() {
    // this.id =
    //     console.log(this.id);
    console.log("DetailPage mounted");
    //   console.log(this.Media );
  },
};
</script>
<style lang=""></style>
