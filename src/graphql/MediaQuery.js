// import gql from "graphql-tag";

// const topAnime = gql `query topAnime($page: Int) {
//   Page(page: $page, perPage: 10) {
//     topAnime:mediaTrends(sort: SCORE_DESC) {
//       mediaId
//       media {
//         season
//         popularity
//         seasonYear
//         format
//         averageScore
//         episodes
//         duration
//         status
//         coverImage {
//           extraLarge
//           large
//           medium
//           color
//         }
//         title {
//           romaji
//           english
//           native
//           userPreferred
//         }
//       }
//     }
//   }
// }`;