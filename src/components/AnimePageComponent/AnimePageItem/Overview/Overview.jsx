import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Characters from "../Characters/Characters";
import Recomendations from "../Recomendations/Recomendations";
import Staff from "../Staff/Staff";
import * as Styles from "../styles";

const Overview = ({ data, setCurrentTab }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Styles.AnimePage>
      <Styles.AnimePageInfo>
        <Styles.AnimePageChildTitle>Information</Styles.AnimePageChildTitle>
        <Styles.AnimePageInfoItems>
          <Styles.AnimePageInfoItem>
            <b>Format:</b> {data.Media.format}
          </Styles.AnimePageInfoItem>
          <Styles.AnimePageInfoItem>
            <b>Status:</b>{" "}
            {data.Media.status.charAt(0).toUpperCase() +
              data.Media.status.slice(1).toLowerCase().replaceAll("_", " ")}
          </Styles.AnimePageInfoItem>
          <Styles.AnimePageInfoItem>
            <b>Average Score:</b> {data.Media.averageScore || "No score"}
          </Styles.AnimePageInfoItem>
          <Styles.AnimePageInfoItem>
            <b>Episodes:</b> {data.Media.episodes || "No info"}
          </Styles.AnimePageInfoItem>
          <Styles.AnimePageInfoItem>
            <b>Season:</b> {data.Media.season}{" "}
            {data.Media.seasonYear || "No info"}
          </Styles.AnimePageInfoItem>
          <Styles.AnimePageInfoItem>
            <b>Start Date:</b> {monthNames[data.Media.startDate.month]}{" "}
            {data.Media.startDate.day}, {data.Media.startDate.year}
          </Styles.AnimePageInfoItem>
          <Styles.AnimePageInfoItem>
            <b>End Date:</b> {monthNames[data.Media.endDate.month]}{" "}
            {data.Media.endDate.day}, {data.Media.endDate.year}
          </Styles.AnimePageInfoItem>
        </Styles.AnimePageInfoItems>
      </Styles.AnimePageInfo>
      <>
        {data.Media.trailer?.id ? (
          <Styles.AnimePageYoutube>
            <Styles.AnimePageChildTitle>Trailer</Styles.AnimePageChildTitle>
            <Styles.AnimePageYoutubeVideo>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${data?.Media.trailer.id}`}
                controls
                width="100%"
                height="100%"
              />
            </Styles.AnimePageYoutubeVideo>
          </Styles.AnimePageYoutube>
        ) : null}

        {data.Media.relations.edges.length >= 1 ? (
          <Styles.AnimePageChild>
            <Styles.AnimePageChildTitle>Relations</Styles.AnimePageChildTitle>
            <Styles.AnimePageChildItemWrapper>
              {data.Media.relations.edges.map((relation) => {
                return (
                  <Link
                    to={`/anime/${relation.node.id}`}
                    key={relation.node.id}
                  >
                    <Styles.AnimePageChildItem>
                      <Styles.AnimePageChildItemTitle
                        style={{ fontSize: "12px" }}
                      >
                        {relation.relationType.charAt(0).toUpperCase() +
                          relation.relationType
                            .slice(1)
                            .toLowerCase()
                            .replaceAll("_", " ")}
                      </Styles.AnimePageChildItemTitle>
                      <Styles.AnimePageChildItemImage>
                        <img
                          src={relation.node.coverImage.medium}
                          alt="cover"
                        />
                      </Styles.AnimePageChildItemImage>
                      <Styles.AnimePageChildItemTitle
                        style={{ fontWeight: "700" }}
                      >
                        {relation.node.title.romaji}
                      </Styles.AnimePageChildItemTitle>
                    </Styles.AnimePageChildItem>
                  </Link>
                );
              })}
            </Styles.AnimePageChildItemWrapper>
          </Styles.AnimePageChild>
        ) : null}
      </>
      <Characters data={data} limit={10} setCurrentTab={setCurrentTab} />
      <Recomendations data={data} limit={10} setCurrentTab={setCurrentTab} />
      <Staff data={data} limit={10} setCurrentTab={setCurrentTab} />
    </Styles.AnimePage>
  );
};

export default Overview;
