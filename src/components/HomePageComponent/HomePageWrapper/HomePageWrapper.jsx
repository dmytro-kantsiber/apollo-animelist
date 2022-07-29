import queryString from "query-string";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { PER_PAGE } from "../../../utils/constants";
import { filterOptions } from "../../../utils/filterOptions";
import { setSearchObject } from "../../../utils/setSearchObject";
import HomePageButtons from "../HomePageButtons/HomePageButtons";
import HomePageOptions from "../HomePageOptions/HomePageOptions";
import HomePageSearch from "../HomePageSearch/HomePageSearch";
import HomePageSlider from "../HomePageSlider/HomePageSlider";
import * as Styles from "./styles";

const HomePageWrapper = ({
  data,
  loading,
  fetchMore,
  getSearchPage,
  currentPage,
  setCurrentPage,
}) => {
  const defaultOptions = useMemo(() => {
    return {
      search: "",
      format_in: "Any",
      status_in: "Any",
      genre_in: "Any",
      sort: "POPULARITY_DESC",
    };
  }, []);

  const history = useHistory();

  const [sliderValue, setSliderValue] = useState({
    averageScore_greater: 0,
    averageScore_lesser: 100,
  });

  const [options, setOptions] = useState({ ...defaultOptions });

  useEffect(() => {
    getSearchPage({
      variables: setSearchObject({
        ...queryString.parse(history.location.search),
      }),
    });
  }, [history.location.search, getSearchPage]);

  useEffect(() => {
    setOptions({
      ...defaultOptions,
      ...queryString.parse(history.location.search),
    });
    const temp = queryString.parse(history.location.search);
    setSliderValue({
      averageScore_greater: temp.averageScore_greater || 0,
      averageScore_lesser: temp.averageScore_lesser || 100,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    (e) => {
      setOptions({
        ...options,
        [e.target.name]: e.target.value,
      });
    },
    [options]
  );

  const handleSliderChange = (e) => {
    if (!loading) {
      setSliderValue({
        averageScore_greater: e.target.value[0],
        averageScore_lesser: e.target.value[1],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      let searchQuery = filterOptions(defaultOptions, options, sliderValue);
      history.push(
        "?" +
          Object.keys(searchQuery)
            .map((key) => key + "=" + searchQuery[key])
            .join("&")
      );
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [data, setCurrentPage]);

  useEffect(() => {
    if (currentPage >= data?.Page?.media.length / PER_PAGE && !loading) {
      fetchMore({
        variables: { page: currentPage + 1 },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            Page: {
              ...previousResult.Page,
              ...fetchMoreResult.Page,
              media: [
                ...previousResult?.Page?.media,
                ...fetchMoreResult.Page.media,
              ],
            },
          });
        },
      }).catch((err) => err);
    }
  }, [fetchMore, loading, currentPage, data?.Page?.media.length]);

  const handleReset = useCallback(
    (e) => {
      e.preventDefault();
      if (!loading) {
        setOptions({
          ...defaultOptions,
        });
        setSliderValue({
          averageScore_greater: 0,
          averageScore_lesser: 100,
        });
      }
    },
    [defaultOptions, loading]
  );

  return (
    <>
      <HomePageOptions handleChange={handleChange} options={options} />
      <Styles.Wrapper onSubmit={handleSubmit}>
        <HomePageSlider
          value={[
            Number(sliderValue.averageScore_greater),
            Number(sliderValue.averageScore_lesser),
          ]}
          handleChange={handleSliderChange}
        />
        <HomePageSearch options={options} handleChange={handleChange} />
      </Styles.Wrapper>
      <HomePageButtons handleSubmit={handleSubmit} handleReset={handleReset} />
    </>
  );
};

export default HomePageWrapper;
