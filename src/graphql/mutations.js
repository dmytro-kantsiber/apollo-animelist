import { gql } from "@apollo/client";

export const ADD_ITEM_TO_LIST = gql`
  mutation ($mediaId: Int) {
    SaveMediaListEntry(mediaId: $mediaId) {
      mediaId
    }
  }
`;

export const TOGGLE_FAV = gql`
  mutation ($id: Int) {
    ToggleFavourite(animeId: $id) {
      anime {
        nodes {
          id
        }
      }
    }
  }
`;

export const TOGGLE_STATUS = gql`
  mutation (
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
  mutation ($id: Int) {
    DeleteMediaListEntry(id: $id) {
      deleted
    }
  }
`;
