import React, { useEffect, useState } from "react";
import AnimeListItem from "./AnimeListItem/AnimeListItem";
import AnimeListSort from "./AnimeListSort/AnimeListSort";
import * as Styles from "./styles";

const AnimeList = ({
  data,
  currentList,
  loading,
  loadingStatus,
  deleteEntry,
  toggleStatus,
}) => {
  const [listData, setListData] = useState(null);

  const [currentSort, setCurrentSort] = useState("Title");

  useEffect(() => {
    setListData(data);
  }, [data]);

  useEffect(() => {
    let temp;
    switch (currentSort) {
      case "Title":
        temp = data?.sort((a, b) =>
          a.media.title.romaji.localeCompare(b.media.title.romaji)
        );
        setListData([...temp]);
        break;
      case "Score":
        temp = data?.sort((a, b) => b.score - a.score);
        setListData([...temp]);
        break;
      case "Type":
        temp = data?.sort((a, b) =>
          a.media.format.localeCompare(b.media.format)
        );
        setListData([...temp]);
        break;
      default:
        break;
    }
  }, [currentSort, data]);

  return (
    <Styles.ListPageItemWrapper>
      <AnimeListSort
        setCurrentSort={setCurrentSort}
        currentSort={currentSort}
      />
      <Styles.ListPageAnimeList>
        {listData?.map((list, index) => {
          if (list.status === currentList || currentList === "All") {
            return (
              <Styles.ListPageItem key={index}>
                <Styles.ListPageWrapper>
                  <AnimeListItem
                    key={list.media.id}
                    data={list}
                    loading={loading}
                    loadingStatus={loadingStatus}
                    deleteEntry={deleteEntry}
                    toggleStatus={toggleStatus}
                  />
                </Styles.ListPageWrapper>
              </Styles.ListPageItem>
            );
          } else {
            return null;
          }
        })}
      </Styles.ListPageAnimeList>
    </Styles.ListPageItemWrapper>
  );
};

export default AnimeList;
