import {useQuery} from "@apollo/client";
import React from "react";
import {useParams} from "react-router-dom";
import {LOAD_ANIME_PAGE} from "../../graphql/queries";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import AnimePageItem from "./AnimePageItem/AnimePageItem";

const AnimePageComponent = () => {
    const {id} = useParams();

    const {data, loading, error} = useQuery(LOAD_ANIME_PAGE, {
        variables: {id},
        fetchPolicy: "cache-first",
    });

    if (loading) {
        return <LoadingSpinner/>;
    }

    if (error) {
        return <ErrorComponent/>;
    }

    return <AnimePageItem data={data}/>;
};

export default AnimePageComponent;
