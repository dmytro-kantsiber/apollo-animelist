import { useLazyQuery, useMutation } from "@apollo/client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTrackedState } from "../../context/AppContext";
import { DELETE_ENTRY, TOGGLE_STATUS } from "../../graphql/mutations";
import { LOAD_ANIME_LIST } from "../../graphql/queries";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import AnimeList from "./AnimeList/AnimeList";
import AnimeListInfo from "./AnimeList/AnimeListInfo/AnimeListInfo";
import * as Styles from "./styles";

const ListPageComponent = () => {
  const notifyDeleteEntry = () => toast("Entry successfully deleted!");

  const state = useTrackedState();

  const [fetchAnimeList, { loading, data, error }] = useLazyQuery(
    LOAD_ANIME_LIST,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  const [lists, setLists] = useState([]);

  const [animes, setAnimes] = useState([]);

  const [currentList, setCurrentList] = useState("All");

  const [toggleStatus, { loading: loadingStatus }] = useMutation(TOGGLE_STATUS);

  const [deleteEntry] = useMutation(DELETE_ENTRY, {
    onCompleted: () => notifyDeleteEntry(),
  });

  useEffect(() => {
    if (state.user) {
      fetchAnimeList({
        variables: { userId: state.user?.id },
      });
    }
  }, [state.user, fetchAnimeList]);

  useEffect(() => {
    setLists([...new Set(animes.map((item) => item.status))].sort());
  }, [animes]);

  useEffect(() => {
    let temp = [];
    data?.MediaListCollection.lists.forEach((list) => {
      list.entries.forEach((entry) => {
        temp = [...temp, entry];
      });
    });
    setAnimes(temp);
  }, [data]);

  if (!state.user) {
    return (
      <Typography
        sx={{
          fontWeight: "700",
          color: "white",
          fontSize: "45px",
          textAlign: "center",
        }}
      >
        Login to see this page
      </Typography>
    );
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <Styles.ListPageContainer>
      <AnimeListInfo
        lists={lists}
        currentList={currentList}
        setCurrentList={setCurrentList}
      />
      <AnimeList
        toggleStatus={toggleStatus}
        loadingStatus={loadingStatus}
        deleteEntry={deleteEntry}
        data={animes}
        currentList={currentList}
      />
    </Styles.ListPageContainer>
  );
};

export default ListPageComponent;
