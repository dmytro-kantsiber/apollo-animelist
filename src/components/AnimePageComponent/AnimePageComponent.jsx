import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { LOAD_ANIME_PAGE } from "../../graphql/queries";
import AnimePageItem from "./AnimePageItem/AnimePageItem";

const AnimePageComponent = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(LOAD_ANIME_PAGE, {
    variables: { id },
    fetchPolicy: "cache-first",
  });

  return <AnimePageItem data={data} loading={loading} />;
};

export default AnimePageComponent;
