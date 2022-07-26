import { useLazyQuery } from "@apollo/client";
import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { setIsModalAC } from "../../../context/actions";
import { useDispatch } from "../../../context/AppContext";
import { LOAD_MAIN_PAGE_SEARCH_ANIMES } from "../../../graphql/queries";
import SearchResultsList from "./SearchResultsList/SearchResultsList";
import * as Styles from "./styles";

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const [getMainPageSearchAnimes, { error, loading }] = useLazyQuery(
    LOAD_MAIN_PAGE_SEARCH_ANIMES
  );

  const debounced = useDebouncedCallback((value) => {
    getMainPageSearchAnimes({
      variables: { search: value, perPage: 5 },
      onCompleted: (data) => setSearchResults(data),
    });
  }, 500);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length === 0) {
      debounced.cancel();
      setSearchResults([]);
      dispatch(setIsModalAC(false));
    }
    if (search.length >= 1) {
      dispatch(setIsModalAC(true));
      debounced(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, debounced]);

  return (
    <Styles.SearchBar>
      <Input
        onFocus={() => {
          if (search.length >= 1) {
            dispatch(setIsModalAC(true));
          }
        }}
        onBlur={() => {
          setTimeout(() => {
            dispatch(setIsModalAC(false));
          }, 200);
        }}
        value={search}
        onChange={handleChange}
        placeholder="Fast search"
        sx={{ width: "100%", color: "white" }}
      />
      <SearchResultsList
        data={searchResults}
        loading={loading}
        error={error}
        search={search}
      />
    </Styles.SearchBar>
  );
};

export default SearchBar;
