import React from "react";
import * as Styles from "./styles";
import { Link } from "react-router-dom";
import NothingFound from "../../../NothingFound/NothingFound";
import LoadingSpinner from "../../../LoadingSpinner/LoadingSpinner";
import SearchResultsListItem from "./SearchResultsListItem/SearchResultsListItem";
import { useTrackedState } from "../../../../context/AppContext";

const SearchResults = ({ data, loading, error, search }) => {
  const state = useTrackedState();

  if (error) {
    return <>Error</>;
  }

  if (loading) {
    return (
      <Styles.SearchResults show={state.isModal}>
        <LoadingSpinner />
      </Styles.SearchResults>
    );
  }

  if (data?.Page?.media.length < 1) {
    return (
      <Styles.SearchResults show={state.isModal}>
        <NothingFound />
      </Styles.SearchResults>
    );
  }

  return (
    <Styles.SearchResults show={state.isModal}>
      {data?.Page?.media.map((anime) => {
        let isSingleGenre = anime.genres.length > 1 ? "Genres: " : "Genre : ";
        let formatedStatus = anime?.status
          ? anime?.status.charAt(0).toUpperCase() +
            anime?.status.slice(1).toLowerCase().replaceAll("_", " ")
          : "";
        return (
          <SearchResultsListItem
            key={anime.id}
            isSingleGenre={isSingleGenre}
            formatedStatus={formatedStatus}
            anime={anime}
          />
        );
      })}

      <Link to={`/?search=${search}`} style={{ textDecoration: "none" }}>
        <Styles.SearchMore>SEARCH MORE</Styles.SearchMore>
      </Link>
    </Styles.SearchResults>
  );
};

export default SearchResults;
