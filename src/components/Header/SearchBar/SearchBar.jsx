import { useLazyQuery } from "@apollo/client";
import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { setIsModalAC } from "../../../context/actions";
import { useDispatch, useTrackedState } from "../../../context/AppContext";
import { LOAD_MAIN_PAGE_SEARCH_ANIMES } from "../../../graphql/queries";
import SearchResultsList from "./SearchResultsList/SearchResultsList";
import * as Styles from "./styles";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";

const SearchBar = () => {
  const state = useTrackedState();

  const [searchResults, setSearchResults] = useState([]);

  const ref = useRef();

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

  const handleClickOutside = () => {
    if (state.isModal) {
      dispatch(setIsModalAC(false));
    }
  };

  useClickOutside(ref, handleClickOutside);

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

  useEffect(() => {
    return () => {
      dispatch(setIsModalAC(false));
    };
  }, [dispatch]);

  return (
    <Styles.SearchBar>
      <Input
        ref={ref}
        onFocus={() => {
          if (search.length >= 1) {
            dispatch(setIsModalAC(true));
          }
        }}
        value={search}
        onChange={handleChange}
        placeholder="Fast search"
        sx={{ width: "100%", color: "white" }}
      />
      <SearchResultsList
        data={searchResults}
        search={search}
        loading={loading}
        error={error}
      />
    </Styles.SearchBar>
  );
};

export default SearchBar;
