import { Input, MenuItem, Select } from "@mui/material";
import React from "react";
import Modal from "react-modal";
import { MEDIA_LIST_ENTRY_STATUS } from "../../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import * as Styles from "./styles";

const AnimeModalQuickSearch = ({
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
    if (data.mediaListEntry?.status === "Not in list") {
      setOptions({});
    } else {
      setOptions({ ...data.mediaListEntry });
    }
  }, [data, modalIsOpen]);

  const handleChange = (e) => {
    if (e.target.name === "status") {
      setOptions({
        ...options,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "score") {
      if (e.target.value > 10) {
        setOptions({
          ...options,
          [e.target.name]: 10,
        });
      } else {
        setOptions({
          ...options,
          [e.target.name]: Number(e.target.value),
        });
      }
    } else if (e.target.name === "progress") {
      if (data.episodes) {
        if (e.target.value > data.episodes) {
          setOptions({
            ...options,
            [e.target.name]: data.episodes,
          });
        } else {
          setOptions({
            ...options,
            [e.target.name]: Number(e.target.value),
          });
        }
      }
      if (!data.episodes) {
        if (e.target.value > data?.nextAiringEpisode.episode - 1) {
          setOptions({
            ...options,
            [e.target.name]: data?.nextAiringEpisode.episode - 1,
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
            <img src={data?.coverImage.large} alt="cover" />
          </Styles.AnimeModalLeftImage>
        </Styles.AnimeModalLeft>
        <Styles.AnimeModalRight>
          <Styles.AnimeModalRightTitle>
            {data?.title.romaji}
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
                max: data?.episodes
                  ? data?.episodes
                  : data?.nextAiringEpisode?.episode - 1,
              }}
              sx={{ color: "white", width: "100px" }}
            />
          </Styles.AnimeModalItem>
        </Styles.AnimeModalRight>
      </Styles.AnimeModalWrapper>
      <Styles.AnimeModalButtons>
        {data?.mediaListEntry ? (
          <button onClick={handleRemove}>Remove</button>
        ) : null}

        <button
          onClick={() => handleSubmit(options, data.mediaListEntry?.status)}
        >
          Save
        </button>
      </Styles.AnimeModalButtons>
    </Modal>
  );
};

export default AnimeModalQuickSearch;
