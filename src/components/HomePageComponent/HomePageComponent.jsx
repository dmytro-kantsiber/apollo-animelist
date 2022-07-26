import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { LOAD_SEARCH_PAGE } from "../../graphql/queries";
import { PER_PAGE } from "../../utils/constants";
import HomePageList from "./HomePageList/HomePageList";
import HomePageWrapper from "./HomePageWrapper/HomePageWrapper";
import * as Styles from "./styles";

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
