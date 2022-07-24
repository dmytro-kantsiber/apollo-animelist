import { gql } from "@apollo/client";

export const LOAD_USER = gql`
  query {
    Viewer {
      id
      name
      avatar {
        medium
      }
      mediaListOptions {
        scoreFormat
      }
    }
  }
`;

export const LOAD_MAIN_PAGE_SEARCH_ANIMES = gql`
  query ($perPage: Int, $search: String) {
    Page(perPage: $perPage) {
      media(search: $search, type: ANIME, sort: TRENDING_DESC) {
        id
        status
        format
        averageScore
        season
        genres
        seasonYear
        nextAiringEpisode {
          id
          episode
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        mediaListEntry {
          id
          mediaId
          status
          score
          progress
        }
        rankings {
          id
          rank
          type
          year
          allTime
          context
        }
        trailer {
          id
          thumbnail
          site
        }
        episodes
        staff(sort: RELEVANCE) {
          edges {
            node {
              id
              name {
                full
              }
              image {
                medium
              }
              primaryOccupations
            }
          }
        }
        recommendations {
          edges {
            node {
              id
              mediaRecommendation {
                id
                title {
                  romaji
                }
                coverImage {
                  medium
                  large
                }
              }
            }
          }
        }
        isFavourite
        title {
          romaji
        }
        description(asHtml: true)
        coverImage {
          medium
          large
        }
        characters(sort: [RELEVANCE, ROLE]) {
          edges {
            id
            node {
              id
              image {
                medium
              }
              name {
                first
                middle
                last
                full
                native
              }
            }
            role
          }
        }
        relations {
          edges {
            id
            node {
              id
              coverImage {
                medium
                large
              }
              title {
                romaji
              }
            }
            relationType
          }
        }
      }
    }
  }
`;

export const LOAD_ANIME_PAGE = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      status
      format
      averageScore
      season
      seasonYear
      nextAiringEpisode {
        id
        episode
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      mediaListEntry {
        id
        mediaId
        status
        score
        progress
      }
      rankings {
        id
        rank
        type
        year
        allTime
        context
      }
      trailer {
        id
        thumbnail
        site
      }
      episodes
      staff(sort: RELEVANCE) {
        edges {
          node {
            id
            name {
              full
            }
            image {
              medium
            }
            primaryOccupations
          }
        }
      }
      recommendations {
        edges {
          node {
            id
            mediaRecommendation {
              id
              title {
                romaji
              }
              coverImage {
                medium
                large
              }
            }
          }
        }
      }
      isFavourite
      title {
        romaji
      }
      description(asHtml: true)
      coverImage {
        medium
        large
      }
      characters(sort: [RELEVANCE, ROLE]) {
        edges {
          id
          node {
            id
            image {
              medium
            }
            name {
              first
              middle
              last
              full
              native
            }
          }
          role
        }
      }
      relations {
        edges {
          id
          node {
            id
            coverImage {
              medium
              large
            }
            title {
              romaji
            }
          }
          relationType
        }
      }
    }
  }
`;

export const LOAD_SEARCH_PAGE = gql`
  query (
    $page: Int
    $perPage: Int
    $search: String
    $format_in: [MediaFormat]
    $genre_in: [String]
    $averageScore_greater: Int
    $averageScore_lesser: Int
    $status_in: [MediaStatus]
    $sort: [MediaSort] = POPULARITY_DESC
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(
        search: $search
        format_in: $format_in
        genre_in: $genre_in
        averageScore_greater: $averageScore_greater
        averageScore_lesser: $averageScore_lesser
        status_in: $status_in
        type: ANIME
        sort: $sort
      ) {
        coverImage {
          medium
          large
        }
        id
        seasonYear
        averageScore
        episodes
        duration
        genres
        format
        title {
          romaji
        }
        description(asHtml: true)
        averageScore
      }
    }
  }
`;

export const LOAD_ANIME_LIST = gql`
  query ($userId: Int) {
    MediaListCollection(type: ANIME, userId: $userId) {
      lists {
        status
        entries {
          id
          mediaId
          status
          progress
          score
          media {
            id
            title {
              romaji
            }
            episodes
            nextAiringEpisode {
              id
              episode
            }
            coverImage {
              medium
              large
            }
            format
          }
        }
      }
    }
  }
`;
