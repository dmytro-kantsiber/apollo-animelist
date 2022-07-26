import { gql } from "@apollo/client";

export const TOGGLE_FAV = gql`
  mutation ToggleUserFavourite($id: Int) {
    ToggleFavourite(animeId: $id) {
      anime {
        nodes {
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
`;

export const TOGGLE_STATUS = gql`
  mutation ToggleStatus(
    $id: Int
    $mediaId: Int
    $status: MediaListStatus
    $progress: Int
    $score: Float
  ) {
    SaveMediaListEntry(
      id: $id
      mediaId: $mediaId
      status: $status
      progress: $progress
      score: $score
    ) {
      id
      mediaId
      status
      score
      progress
    }
  }
`;

export const DELETE_ENTRY = gql`
  mutation DeleteEntry($id: Int) {
    DeleteMediaListEntry(id: $id) {
      deleted
    }
  }
`;
