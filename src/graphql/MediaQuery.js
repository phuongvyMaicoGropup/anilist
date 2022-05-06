import gql from "graphql-tag";

export const detailMediaQuery = gql`
query ($id: Int ) {
  Media(id: $id) {
    season
    bannerImage
    nextAiringEpisode {
      episode
      timeUntilAiring
    }
    trailer {
      site
      thumbnail
    }
    recommendations(perPage: 7, sort :RATING_DESC) {
     
      nodes {
        mediaRecommendation {
          coverImage {
            large
          }
          title {
            userPreferred
          }
        }
      
     
        
      }
   }
    staff  (perPage :4,sort :RELEVANCE ){
      edges {
        role
        node {
          name {
            full
          }
          image {
            large
          }
        }
      }
    }
    characters(role: MAIN) {
      edges {
        node {
          image {
            large
          }
          name {
            full
          }
        }
        voiceActors(language: JAPANESE) {
          image{
            large
          }
          homeTown
          name {
            full
          }
        }
      }
    }
    relations {
      nodes {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          color
          medium
          large
        }
        format
        status
      }
    }
    duration
    startDate {
      year
      month
      day
    }
    season
    seasonYear
    averageScore
    meanScore
    endDate {
      year
      month
      day
    }
    externalLinks {
      url
      color
      site
      icon
    }
    popularity
    favourites
    source
    hashtag
    genres
    synonyms
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

`;
