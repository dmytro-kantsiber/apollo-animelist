import { useMutation } from "@apollo/client";
import React from "react";
import * as Styles from "../styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DELETE_ENTRY, TOGGLE_STATUS } from "../../../../graphql/mutations";
import { LOAD_ANIME_PAGE } from "../../../../graphql/queries";
import { useTrackedState } from "../../../../context/AppContext";
import { setSearchObject } from "../../../../utils/setSearchObject";
import { ReactComponent as StarSVG } from "../../../../images/star.svg";
import { ReactComponent as HeartSVG } from "../../../../images/heart.svg";
import AnimeModal from "../../../AnimeModal/AnimeModal";
import FavButton from "../FavButton/FavButton";
import { useState } from "react";
import OptionsButton from "../OptionsButton/OptionsButton";
import { Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AnimePageItemMain = ({ data, loading }) => {
  const state = useTrackedState();

  const [modalIsOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const notifyChangeEntry = () => toast("Entry successfully changed!");

  const notifyDeleteEntry = () => toast("Entry successfully deleted!");

  const notifyToggleFav = (state) =>
    toast(state ? "Added to favorites!" : "Removed from favorites");

  const notifyError = () => toast("Failed!");

  const [toggleStatus, { loading: loadingStatus }] = useMutation(TOGGLE_STATUS);

  const [deleteEntry, { loading: loadingDelete }] = useMutation(DELETE_ENTRY);

  const handleSubmit = (options) => {
    if (!loadingStatus) {
      toggleStatus({
        variables: { ...setSearchObject(options), mediaId: id },
        update(cache, { data: { SaveMediaListEntry } }) {
          cache.writeQuery({
            query: LOAD_ANIME_PAGE,
            variables: { id },
            data: {
              Media: {
                ...data.Media,
                mediaListEntry: {
                  ...SaveMediaListEntry,
                },
              },
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
    if (
      !loadingDelete &&
      data?.Media.mediaListEntry.status &&
      data?.Media.mediaListEntry.status !== "Not in list"
    ) {
      deleteEntry({
        variables: { id: data.Media.mediaListEntry.id },
        update(cache, { data: { DeleteMediaListEntry } }) {
          if (DeleteMediaListEntry.deleted) {
            cache.evict({
              id: cache.identify({
                __typename: "MediaList",
                id: id,
              }),
            });
            cache.gc();
          }
        },
        onCompleted: () => {
          setIsOpen(false);
          notifyDeleteEntry();
        },
        onError: () => {
          notifyError();
        },
      });
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Styles.AnimePageItemMain>
      <Styles.AnimePageItemMainLeft>
        <Styles.AnimePageItemMainLeftImage
          src={data?.Media.coverImage.large}
          alt="animeCover"
        />
        <AnimeModal
          data={data}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          handleRemove={handleRemove}
        />

        {state.isAuth ? (
          <Styles.AnimePageItemMainLeftOptions>
            <Styles.AnimePageItemMainLeftOptionsButtons>
              <OptionsButton data={data} openModal={openModal} />
              <FavButton
                id={id}
                loading={loading}
                data={data}
                notifyToggleFav={notifyToggleFav}
                notifyError={notifyError}
              />
            </Styles.AnimePageItemMainLeftOptionsButtons>
            <Styles.AnimePageItemMainLeftOptionsScore>
              {data.Media.mediaListEntry?.score > 0 ? (
                <Typography sx={{ fontWeight: "700", color: "white" }}>
                  Your score: {data.Media.mediaListEntry.score}
                </Typography>
              ) : (
                <Typography sx={{ fontWeight: "700", color: "white" }}>
                  No score
                </Typography>
              )}
            </Styles.AnimePageItemMainLeftOptionsScore>
          </Styles.AnimePageItemMainLeftOptions>
        ) : null}

        <Styles.AnimePageAdditionalLeft>
          {data?.Media?.rankings?.map((item) => {
            if (item.allTime) {
              return (
                <Styles.AnimePageAdditionalLeftRankings key={item.id}>
                  {item.type === "RATED" ? <StarSVG /> : <HeartSVG />}
                  <Styles.AnimePageAdditionalLeftRankingsItem>
                    <p>{`#${item.rank} ${item.context}`}</p>
                  </Styles.AnimePageAdditionalLeftRankingsItem>
                </Styles.AnimePageAdditionalLeftRankings>
              );
            } else {
              return null;
            }
          })}
        </Styles.AnimePageAdditionalLeft>
      </Styles.AnimePageItemMainLeft>
      <Styles.AnimePageItemMainRight>
        <Styles.AnimePageItemMainRightTitle>
          {data?.Media.title.romaji}
        </Styles.AnimePageItemMainRightTitle>
        <Styles.AnimePageItemMainRightDescription>
          {ReactHtmlParser(data?.Media.description)}
        </Styles.AnimePageItemMainRightDescription>
      </Styles.AnimePageItemMainRight>
    </Styles.AnimePageItemMain>
  );
};

export default AnimePageItemMain;
