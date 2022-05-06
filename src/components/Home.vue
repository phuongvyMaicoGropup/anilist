<template >
  <div class="w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 sm:w-11/12 mx-auto">

         <div v-if="loading > 0">
           <SkeletonList hoz="false"/>
           <SkeletonList hoz="false"/>

           <SkeletonList hoz="false"/>

           <SkeletonList hoz="false"/>

      
    </div>
    <!-- Actual view -->
    <div v-else class="justify-center">
           <!-- <SkeletonList hoz="false"/> -->

        <PostList :isNowrap="true" :hoz="false" :MediaList="mediaTrends" title="Trending Comic"/>
        <PostList :isNowrap="true" :hoz="false" :MediaList="popularSeason" title="Popular this season"/>

        <PostList :isNowrap="true" :hoz="false" :MediaList="upComingSeason" title="Upcoming this season"/>
        <!-- <PostList :isNowrap="true" :hoz="false" :MediaList="mediaPopulars" title="UPCOMING NEXT SEASON"/> -->
        <PostList :isNowrap="true" :hoz="false" :MediaList="mediaPopulars" title="All time popular"/>
        <PostList :isNowrap="true" :hoz="true" :MediaList="topAnime" title="Top anime"/>

    </div>

  </div>
</template>
<script>
import PostList from "./PostList.vue";
import gql from "graphql-tag";
import SkeletonList from "./skeleton/SkeletonList.vue";
const mediaQuery = gql`
  query tags($page: Int) {
    mediaTrends: Page(page: $page, perPage: 6) {
      data: media(sort: TRENDING_DESC) {
        ...comparisonFields
      }
    }
    upComingSeason: Page(page: $page, perPage: 6) {
    data: media(sort: POPULARITY_DESC, season :SUMMER, seasonYear: 2022 ) {
      ...comparisonFields
    }
  }
      popularSeason: Page(page: $page, perPage: 6) {
    data: media(sort: POPULARITY_DESC , season:SPRING, seasonYear: 2022 ) {
      ...comparisonFields
    }
  }
    mediaPopulars: Page(page: $page, perPage: 6) {
    data: media(sort: POPULARITY_DESC) {
      ...comparisonFields
    }
    }
     
  topAnime: Page(page: $page, perPage: 10) {
  
     data: media (sort :SCORE_DESC ,  type :ANIME ) {
        id
      season
        trending
      	genres
        popularity
        seasonYear
        format
        averageScore
        episodes
        duration
        status
        studios(isMain: true) {
      nodes {
        name
      }
    }
        coverImage {
          extraLarge
          large
          medium
          color
        }
         nextAiringEpisode {
      episode
      airingAt
    }
        title {
          romaji
          english
          native
          userPreferred
        }
      
    }
  }
  
  
  }

  fragment comparisonFields on Media {
    id
    format
    averageScore
    episodes
    studios(isMain: true) {
      nodes {
        name
      }
    }
    status
    coverImage {
      extraLarge
      large
      medium
      color
    }
    nextAiringEpisode {
      episode
      airingAt
    }
    genres
    title {
      romaji
      english
      native
      userPreferred
    }
  }
`;

export default {
  name: "Home",
  components : {
        PostList,
        SkeletonList
  },
  apollo: {
    media: {
      query: mediaQuery,
      loadingKey: "loading",
      manual: true,
  result ({ data, loading }) {
    if (!loading) {
      console.log(data.mediaTrends.data);
      this.mediaTrends = data.mediaTrends.data; 
      this.mediaPopulars = data.mediaPopulars.data
      this.topAnime = data.topAnime.data
      this.popularSeason = data.popularSeason.data
      this.upComingSeason = data.upComingSeason.data
    }
  },
    },
   


  },
 
  data() {
    return{
          loading: 0,
           mediaTrends:[],
           topAnime:[],
           mediaPopulars:[],
           popularSeason :[],
           upComingSeason:[],
          
    }    
  },

  created() {
      //   console.log(mediaTrends);
  },
};
</script>
<style >
</style>