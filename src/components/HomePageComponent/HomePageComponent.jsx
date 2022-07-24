import React from "react";
import * as Styles from "./styles";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOAD_SEARCH_PAGE } from "../../graphql/queries";
import HomePageList from "./HomePageList/HomePageList";
import { InView } from "react-intersection-observer";
import { PER_PAGE } from "../../utils/constants";
import HomePageWrapper from "./HomePageWrapper/HomePageWrapper";

const HomePageComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [getSearchPage, { data, error, loading, fetchMore }] = useLazyQuery(
    LOAD_SEARCH_PAGE,
    { variables: { perPage: PER_PAGE } }
  );

  return (
    <>
      <HomePageWrapper
        data={data}
        loading={loading}
        fetchMore={fetchMore}
        getSearchPage={getSearchPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <HomePageList results={data} error={error} loading={loading} />
      <Styles.InView>
        <InView
          onChange={(inView) => {
            if (inView && !loading) {
              setCurrentPage(Math.floor(data?.Page?.media.length / PER_PAGE));
            }
          }}
        ></InView>
      </Styles.InView>
    </>
  );
};

export default HomePageComponent;
