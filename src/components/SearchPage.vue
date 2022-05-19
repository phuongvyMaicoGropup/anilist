<template>
  <div
    class="w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 sm:w-11/12 mx-auto min-h-screen"
  >
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
          <PostList :hoz="false" :MediaList="searchAnime.data" title="" />
          <div class="actions">
            <button v-if="searchAnime.pageInfo.hasNextPage" @click="showMore">
              Show more
            </button>
          </div>
        </div>
        <div class="text-lg font-semibold" v-else>No Results</div>
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
    $sort: [MediaSort]
    $searchString: String
  ) {
    searchAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
      }
      data: media(
        sort: $sort
        genre: $genre
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
    getNextMedia() {
      window.onscroll = () => {
        if (this.showMoreEnabled) {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            this.page++;

            this.$apollo.queries.searchAnime.fetchMore({
              variables: {
                searchString: this.$route.query?.search,
                season: this.$route.query?.season?.toUpperCase(),
                genre: this.$route.query?.genre,
                format: this.$route.query?.format?.toUpperCase(),
                year: this.$route.query?.year,
                page: this.page,
                perPage: 50,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newMedia = fetchMoreResult.searchAnime.data;
                const hasMore =
                  fetchMoreResult.searchAnime.pageInfo.hasNextPage;

                this.showMoreEnabled = hasMore;

                return {
                  searchAnime: {
                    __typename: previousResult.searchAnime.__typename,
                    // Merging the tag list
                    data: [...previousResult.searchAnime.data, ...newMedia],
                    pageInfo: {
                      currentPage: this.page,
                      hasNextPage: hasMore,
                    },
                  },
                };
              },
            });
          }
        }
      };
    },
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) this.loadBatch();
    },
    loadBatch() {
      this.client
        .request(this.query, {
          limit: this.limit,
          skip: this.items.length,
        })
        .then(this.handleLoad)
        .catch(console.error);
    },
    handleLoad(response) {
      if (this.respKey) {
        response = this.respKeyParser.reduce((o, v) => o[v], response);
      }
      this.items = this.items.concat(response);
    },
    deleteTag(value) {
      console.log("Tag deleted" + value);
    },

    deleteSearch() {},
  },
  apollo: {
    searchAnime: {
      loadingKey: "loading",
      query: searchQuery,
      variables: {
        page: 0,
        perPage: 50,
      },
      update: (data) => data.searchAnime,
    },
  },
  mounted() {
    this.getNextMedia();
  },

  computed: {
    queryObject: function () {
      console.log("Bien ne : " + this.$route.query);

      return this.$route.query;
    },
  },
  watch: {
    queryObject(value) {
      this.$apollo.queries.searchAnime.refetch({
        searchString: this.$route.query?.search,
        season: this.$route.query?.season?.toUpperCase(),
        genre: this.$route.query?.genre,
        format: this.$route.query?.format?.toUpperCase(),
        year: this.$route.query?.year,
        page: 0,
        perPage: 50,
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
          searchString: this.$route.query?.search,
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
