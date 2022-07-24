import React from "react";
import * as Styles from "./styles";
import AnimeListModal from "../../../AnimeModal/AnimeListModal";
import { setSearchObject } from "../../../../utils/setSearchObject";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { memo } from "react";

const AnimeListItem = ({ data, loadingStatus, toggleStatus, deleteEntry }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const notifyChangeEntry = () => toast("Entry successfully changed!");

  const notifyError = () => toast("Failed!");

  const handleSubmit = (options) => {
    if (!loadingStatus) {
      toggleStatus({
        variables: { ...setSearchObject(options), mediaId: data.mediaId },

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
      variables: { id: data.id },

      update(cache, { data: { DeleteMediaListEntry } }) {
        if (DeleteMediaListEntry.deleted) {
          cache.writeFragment({
            id: `Media:${data.mediaId}`,
            fragment: gql`
              fragment MyMedia2 on Media {
                mediaListEntry
              }
            `,
            data: {
              mediaListEntry: null,
            },
          });

          cache.evict({
            id: cache.identify({
              __typename: "MediaList",
              id: data.id,
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
    <>
      <Styles.AnimeListItem>
        <>
          <Styles.AnimeListItemImage>
            <img src={data?.media.coverImage.medium} alt="" />
          </Styles.AnimeListItemImage>
          <Styles.AnimeListItemWrapper>
            <Styles.AnimeListItemTitle>
              <Link to={`/anime/${data?.media.id}`}>
                {data?.media.title.romaji}
              </Link>
            </Styles.AnimeListItemTitle>
            <Styles.AnimeListAdaptive>
              <Styles.AnimeListItemScore>
                Score: <span> {data?.score}</span>
              </Styles.AnimeListItemScore>

              <Styles.AnimeListItemProgress>
                Progress:{" "}
                <span>
                  {" "}
                  {data?.progress} /{" "}
                  {data?.media.episodes
                    ? data?.media.episodes
                    : data?.media.nextAiringEpisode.episode - 1}
                </span>
              </Styles.AnimeListItemProgress>
            </Styles.AnimeListAdaptive>
            <Styles.AnimeListItemType>
              {data?.media.format}
            </Styles.AnimeListItemType>
            <Styles.AnimeListItemType>{data?.status}</Styles.AnimeListItemType>
          </Styles.AnimeListItemWrapper>
          <Button
            variant="contained"
            sx={{ height: "50px" }}
            onClick={openModal}
          >
            Edit
          </Button>
        </>
      </Styles.AnimeListItem>
      <AnimeListModal
        data={data}
        handleRemove={handleRemove}
        handleSubmit={handleSubmit}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default memo(AnimeListItem);
