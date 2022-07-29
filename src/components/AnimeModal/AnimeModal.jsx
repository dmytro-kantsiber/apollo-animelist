import { Input, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useTrackedState } from "../../context/AppContext";
import { MEDIA_LIST_ENTRY_STATUS } from "../../utils/constants";
import { scoreType } from "../../utils/scoreType";
import * as Styles from "./styles";

const AnimeModal = ({
  data,
  modalIsOpen,
  closeModal,
  handleSubmit,
  handleRemove,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modalIsOpen ? "hidden" : "auto";
  }, [modalIsOpen]);

  const state = useTrackedState();

  const modalStyle = {
    overlay: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "rgba(9, 5, 5, 0.75)",
    },
    content: {
      width: "800px",
      minWidth: "300px",
      height: "550px  ",
      position: "relative",
      top: "15%",
      left: "0px",
      right: "0px",
      color: "white",
      backgroundColor: "#383838",
      border: "none",
    },
  };

  const defaultOptions = {
    status: "Not in list",
    score: 0,
    progress: 0,
  };

  const [options, setOptions] = useState({});

  useEffect(() => {
    if (data.Media.mediaListEntry?.status === "Not in list") {
      setOptions({});
    } else {
      setOptions({ ...data.Media.mediaListEntry });
    }
  }, [data, modalIsOpen]);

  const handleChange = (e) => {
    if (e.target.name === "status") {
      setOptions({
        ...options,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "score") {
      if (e.target.value > scoreType(state.user.mediaListOptions.scoreFormat)) {
        setOptions({
          ...options,
          [e.target.name]: scoreType(state.user.mediaListOptions.scoreFormat),
        });
      } else {
        setOptions({
          ...options,
          [e.target.name]: Number(e.target.value),
        });
      }
    } else if (e.target.name === "progress") {
      if (data.Media.episodes) {
        if (e.target.value > data.Media.episodes) {
          setOptions({
            ...options,
            [e.target.name]: data.Media.episodes,
          });
        } else {
          setOptions({
            ...options,
            [e.target.name]: Number(e.target.value),
          });
        }
      }
      if (!data.Media.episodes) {
        if (e.target.value > data.Media.nextAiringEpisode.episode - 1) {
          setOptions({
            ...options,
            [e.target.name]: data.Media.nextAiringEpisode.episode - 1,
          });
        } else {
          setOptions({
            ...options,
            [e.target.name]: Number(e.target.value),
          });
        }
      }
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={modalStyle}
    >
      <Styles.AnimeModalWrapper>
        <Styles.AnimeModalLeft>
          <Styles.AnimeModalLeftImage>
            <img src={data.Media.coverImage.large} alt="cover" />
          </Styles.AnimeModalLeftImage>
        </Styles.AnimeModalLeft>
        <Styles.AnimeModalRight>
          <Styles.AnimeModalRightTitle>
            {data.Media.title.romaji}
          </Styles.AnimeModalRightTitle>
          <Styles.AnimeModalItem>
            <Styles.AnimeItemTitle>Status</Styles.AnimeItemTitle>
            <Select
              sx={{
                width: "200px",
                height: "50px",
                backgroundColor: "gray",
                color: "white",
              }}
              MenuProps={{
                MenuListProps: { disablePadding: true },
              }}
              value={options.status || defaultOptions.status}
              name="status"
              onChange={handleChange}
            >
              {MEDIA_LIST_ENTRY_STATUS.map((option, index) => {
                return (
                  <MenuItem
                    key={index}
                    sx={{
                      height: "50px",
                      backgroundColor: "gray",
                      disablePadding: true,
                      color: "white",

                      "&:hover": {
                        backgroundColor: "#929292",
                      },

                      "&.Mui-selected": {
                        backgroundColor: "#929292 !important",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "#929292",
                      },
                    }}
                    value={option.value || ""}
                  >
                    {option.title}
                  </MenuItem>
                );
              })}
            </Select>
          </Styles.AnimeModalItem>
          <Styles.AnimeModalItem>
            <Styles.AnimeItemTitle>Score</Styles.AnimeItemTitle>
            <Input
              type="number"
              value={options.score || defaultOptions.score}
              onChange={handleChange}
              name="score"
              inputProps={{ min: 0, max: 10 }}
              sx={{ color: "white", width: "100px" }}
            />
          </Styles.AnimeModalItem>
          <Styles.AnimeModalItem>
            <Styles.AnimeItemTitle>Progress</Styles.AnimeItemTitle>
            <Input
              type="number"
              value={options.progress || defaultOptions.progress}
              onChange={handleChange}
              name="progress"
              inputProps={{
                min: 0,
                max: data.Media.episodes
                  ? data.Media.episodes
                  : data.Media.nextAiringEpisode?.episode - 1 ?? 0,
              }}
              sx={{ color: "white", width: "100px" }}
            />
          </Styles.AnimeModalItem>
        </Styles.AnimeModalRight>
      </Styles.AnimeModalWrapper>
      <Styles.AnimeModalButtons>
        {data.Media.mediaListEntry ? (
          <button onClick={handleRemove}>Remove</button>
        ) : null}

        <button onClick={() => handleSubmit(options)}>Save</button>
      </Styles.AnimeModalButtons>
    </Modal>
  );
};

export default AnimeModal;
