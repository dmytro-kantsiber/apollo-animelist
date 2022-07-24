import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimeModalQuickSearch from "../../../../AnimeModal/AnimeModalQuickSearch";
import * as Styles from "../styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DELETE_ENTRY, TOGGLE_STATUS } from "../../../../../graphql/mutations";
import { gql, useMutation } from "@apollo/client";
import { setSearchObject } from "../../../../../utils/setSearchObject";
import { Button } from "@mui/material";
import { LOAD_ANIME_LIST } from "../../../../../graphql/queries";
import {
  useDispatch,
  useTrackedState,
} from "../../../../../context/AppContext";
import { memo } from "react";
import { setIsModalAC } from "../../../../../context/actions";
const SearchResultsListItem = ({ isSingleGenre, formatedStatus, anime }) => {
  const dispatch = useDispatch();

  const state = useTrackedState();

  const [modalIsOpen, setIsOpen] = useState(false);

  const [toggleStatus, { loading: loadingStatus }] = useMutation(
    TOGGLE_STATUS,
    {
      refetchQueries: [
        {
          query: LOAD_ANIME_LIST,
          variables: {
            userId: state.user?.id,
          },
        },
      ],
    }
  );

  const [deleteEntry] = useMutation(DELETE_ENTRY, {});

  const notifyChangeEntry = () => toast("Entry successfully changed!");

  const notifyError = () => toast("Failed!");

  const handleSubmit = (options) => {
    if (!loadingStatus) {
      toggleStatus({
        variables: { ...setSearchObject(options), mediaId: anime.id },
        update(cache, { data: { SaveMediaListEntry } }) {
          cache.writeFragment({
            id: `Media:${anime.id}`,
            fragment: gql`
              fragment MyMedia2 on Media {
                mediaListEntry
              }
            `,
            data: {
              mediaListEntry: SaveMediaListEntry,
            },
          });
        },
        onCompleted: () => {
          setIsOpen(false);
          notifyChangeEntry();
        },
        onError: () => {
          notifyError();
        },
      }).catch((err) => console.error(err));
    }
  };

  const handleRemove = () => {
    deleteEntry({
      variables: { id: anime?.mediaListEntry.id },
      update(cache, { data: { DeleteMediaListEntry } }) {
        if (DeleteMediaListEntry.deleted) {
          cache.evict({
            id: cache.identify({
              __typename: "MediaList",
              id: anime?.mediaListEntry.id,
            }),
          });
          cache.gc();
        }
      },
      onCompleted: () => {
        setIsOpen(false);
      },
      onError: () => {
        setIsOpen(false);
      },
    });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Styles.SearchResultsWrapper key={anime.id}>
      <Styles.SearchResultsLeft>
        <Link
          onClick={() => dispatch(setIsModalAC(false))}
          to={`/anime/${anime.id}`}
        >
          <Styles.SearchResultsImage>
            <img src={anime.coverImage.large} alt="animeCover"></img>
          </Styles.SearchResultsImage>
          <Styles.SearchResultsInfo>
            <Styles.SearchResultsInfoTitle>
              {anime.title.romaji}
            </Styles.SearchResultsInfoTitle>
            <Styles.SearchResultsInfoGenres>
              {isSingleGenre + anime.genres}
              <Styles.SearchResultsInfoStatus status={anime.status}>
                <p>{formatedStatus}</p>
              </Styles.SearchResultsInfoStatus>
            </Styles.SearchResultsInfoGenres>
            <Styles.SearchResultsInfoType>
              Type : {anime.format}
            </Styles.SearchResultsInfoType>
          </Styles.SearchResultsInfo>
        </Link>
      </Styles.SearchResultsLeft>
      <Button
        onClick={openModal}
        variant="contained"
        sx={{
          height: "60px",
          width: "60px",
          fontWeight: 700,
          fontSize: "30px",
        }}
      >
        +
      </Button>
      <AnimeModalQuickSearch
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleRemove={handleRemove}
        handleSubmit={handleSubmit}
        data={anime}
      />
    </Styles.SearchResultsWrapper>
  );
};

export default memo(SearchResultsListItem);
