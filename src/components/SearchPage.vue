<template>
  <div class="w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 sm:w-11/12 mx-auto">
    <div class="flex align-middle">
      <i class="fa-solid fa-tags"></i>
      <div v-for="query in queryObject" :key="query">
        <ChipText @delete-tag="deleteTag" :tag="query" />
      </div>
    </div>
    <div>
      <div v-if="loading > 0">Loading</div>
      <!-- Actual view -->
      <div v-else class="justify-center">
        <!-- {{searchAnime[0].description}} -->
        <div v-if="searchAnime.data.length > 0">
          <PostList
            :hoz="false"
            :MediaList="searchAnime.data"
            title=""
          />
          <div class="actions">
            <button v-if="showMoreEnabled" @click="showMore">Show more</button>
          </div>
        </div>
        <div v-else>No Results</div>
      </div>
    </div>
  </div>
</template>
<script>
import ChipText from "./ChipText.vue";
import gql from "graphql-tag";
import PostList from "./PostList.vue";
const searchQuery = gql`
  query Page(
    $page: Int
    $perPage: Int
    $genre: String
    $format: MediaFormat
    $season: MediaSeason
    $year: Int
  	$sort : [MediaSort]
    $searchString: String
  ) {
    searchAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
      }
      data: media(
        sort : $sort
        genre : $genre
        search: $searchString
        format: $format
        season: $season
        seasonYear: $year
      ) {
        id
        season
        description
        format
        trending
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
    }
  }
`;
export default {
  name: "SearchPage",
  components: {
    ChipText,
    PostList,
  },
  data() {
    return {
      loading: 0,
      mediaList: [],
      page: 0,
      showMoreEnabled: true,
      params: [],

      searchAnime: {
        data: [],
        pageInfo: {
          currentPage: 0,
          hasNextPage: false,
        },
      },
    };
  },
  methods: {
    deleteTag(value) {
      console.log("Tag deleted" + value);
    },
    showMore() {
      this.page++;
      // Fetch more data and transform the original result
      this.$apollo.queries.searchQuery.fetchMore({
        // New variables
        variables: {
          page: this.page,
          perPage: 50,
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newAnime = fetchMoreResult.searchQuery.data;
          console.log("new Anime");
          console.log({ newAnime });
          const hasMore = fetchMoreResult.searchQuery.pageInfo.hasNextPage;

          this.showMoreEnabled = hasMore;
          console.log(    this.showMoreEnabled);

          return {
            searchAnime: {
              __typename: previousResult.searchAnime.__typename,
              // Merging the tag list
              data: [...previousResult.searchQuery.data, ...newAnime],
              hasMore,
            },
          };
        },
      });
    },
    deleteSearch() {},
  },
  // apollo: {
  //   searchAnime: {
  //     loadingKey: "loading",
  //     // manual: true,
  //     query: searchQuery,
  //     variables: {
  //       // search : "1233333",
  //       page: 0,
  //       perPage: 50,
  //     },
  //     result({ data, loading }) {
  //       if (!loading) {
  //         console.log(data);
  //         this.searchAnime = data.searchAnime;
  //         console.log("11111111111");
  //         console.log(this.$route.query.search);
  //         // this.pageInfo = data.pageInfo
  //       }
  //     },
  //   },
  // },

  computed: {
    queryObject: function () {
      console.log("Bien ne : " + this.$route.query);

      return this.$route.query
    },
  },
  watch: {
    queryObject(value) {
      this.$apollo
        .query({
          query: searchQuery,
          // client: "questionnaire",
          variables: {
            searchString: this.$route.query?.search ,
            season: this.$route.query?.season?.toUpperCase(),
            genre: this.$route.query?.genre,
            format: this.$route.query?.format?.toUpperCase(),
            year: this.$route.query?.year,
            page: 0,
            perPage: 50,
          },
        })
        .then((data) => {
          console.log("Apollo data in watch");
          console.log(data);
          this.searchAnime = data.data.searchAnime;
          // console.log("11111111111");
          // console.log(this.$route.query.search);
        })
        .catch((error) => {
          this.error = error;
          console.log(error)
          // alert("E " + error);
        });
    },
  },
  emits: ["delete-tag"],
  created() {
    console.log(this.$route.query.search);
    this.$apollo
      .query({
        query: searchQuery,
        // client: "questionnaire",
        variables: {
          searchString: this.$route.query?.search ,
          season: this.$route.query?.season?.toUpperCase(),
          genre: this.$route.query?.genre,
          format: this.$route.query?.format?.toUpperCase(),
          year: this.$route.query?.year,
          page: 0,
          perPage: 50,
        },
      })
      .then((data) => {
        console.log("Apollo data");
        console.log(data);
        this.searchAnime = data.data.searchAnime;
        // console.log("11111111111");
        // console.log(this.$route.query.search);
      })
      .catch((error) => {
        this.error = error;
        alert("E " + error);
      });
  },
};
</script>
<style></style>
