import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTrackedState } from "../../../../context/AppContext";
import { DELETE_ENTRY, TOGGLE_STATUS } from "../../../../graphql/mutations";
import { ReactComponent as HeartSVG } from "../../../../images/heart.svg";
import { ReactComponent as StarSVG } from "../../../../images/star.svg";
import { scoreType } from "../../../../utils/scoreType";
import { setSearchObject } from "../../../../utils/setSearchObject";
import AnimeModal from "../../../AnimeModal/AnimeModal";
import FavButton from "../FavButton/FavButton";
import OptionsButton from "../OptionsButton/OptionsButton";
import * as Styles from "../styles";

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
          cache.writeFragment({
            id: `Media:${SaveMediaListEntry.mediaId}`,
            fragment: gql`
              fragment mediaListEntry on Media {
                mediaListEntry
              }
            `,
            data: {
              mediaListEntry: { __ref: `MediaList:${SaveMediaListEntry.id}` },
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
            cache.writeFragment({
              id: `Media:${id}`,
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
                id: data.Media.mediaListEntry.id,
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
                  Your score: {data.Media.mediaListEntry.score} /{" "}
                  {scoreType(state.user?.mediaListOptions.scoreFormat)}
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
