import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import NothingFound from "../../NothingFound/NothingFound";
import * as Styles from "./styles";

const HomePageList = ({ results, error, loading }) => {
  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (results?.Page?.media.length < 1) {
    return <NothingFound />;
  }

  return (
    <Styles.HomePageList>
      {results?.Page?.media.map((anime) => {
        let isAnimeNull = anime.duration === null || anime.episodes === null;
        let animeFormat =
          anime.format === "MOVIE"
            ? `${anime.format} - ${anime.duration} minutes`
            : `${anime.format} - ${anime.episodes} episodes`;
        return (
          <Styles.HomePageListItem key={anime.id}>
            <Styles.HomePageListLogo>
              <Link to={`/anime/${anime.id}`}>
                <img src={anime.coverImage.large} alt="" />
              </Link>
            </Styles.HomePageListLogo>
            <Styles.HomePageListInfo>
              <Link to={`/anime/${anime.id}`}>
                <Styles.HomePageListTitle>
                  <p>
                    {anime.title.romaji.length > 30
                      ? anime.title.romaji.slice(0, 30) + "..."
                      : anime.title.romaji}
                  </p>
                </Styles.HomePageListTitle>
                <p>{isAnimeNull ? "No info about episodes" : animeFormat}</p>
                <p>
                  {anime.description.length > 200
                    ? anime.description
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .replaceAll("&quot;", "")
                        .slice(0, 200) + "..."
                    : anime.description
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .replaceAll("&quot;", "")}
                </p>

                <Styles.HomePageListRateWrapper>
                  Average score:
                  <Styles.HomePageListRate averageScore={anime.averageScore}>
                    {anime.averageScore}
                  </Styles.HomePageListRate>
                </Styles.HomePageListRateWrapper>
              </Link>
            </Styles.HomePageListInfo>
          </Styles.HomePageListItem>
        );
      })}
    </Styles.HomePageList>
  );
};

export default HomePageList;
