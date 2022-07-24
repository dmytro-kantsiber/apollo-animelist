import React from "react";
import * as Styles from "./styles";

const AnimeListSort = ({ currentSort, setCurrentSort }) => {
  const sorts = ["Title", "Score", "Type"];

  return (
    <Styles.AnimeListSortWrapper>
      <Styles.AnimeListSortTitle>Sort by: </Styles.AnimeListSortTitle>
      {sorts.map((sort, index) => {
        return (
          <Styles.AnimeListSortItem
            key={index}
            onClick={() => setCurrentSort(sort)}
            currentSort={currentSort}
            sort={sort}
          >
            {sort}
          </Styles.AnimeListSortItem>
        );
      })}
    </Styles.AnimeListSortWrapper>
  );
};

export default AnimeListSort;
