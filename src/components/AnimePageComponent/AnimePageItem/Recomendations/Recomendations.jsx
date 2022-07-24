import React from "react";
import { Link } from "react-router-dom";

import * as Styles from "../styles";

const Recomendations = ({ data, limit, setCurrentTab }) => {
  return (
    <>
      {data.Media.recommendations.edges.length >= 1 ? (
        <Styles.AnimePageChild>
          <Styles.AnimePageChildTitle
            onClick={() => setCurrentTab("recomendations")}
          >
            Recommendations
          </Styles.AnimePageChildTitle>
          <Styles.AnimePageChildItemWrapper>
            {data.Media.recommendations.edges.map((recommendation, index) => {
              if (index < limit) {
                return (
                  <Link
                    to={`/anime/${recommendation.node.mediaRecommendation?.id}`}
                    key={recommendation.node.mediaRecommendation?.id}
                  >
                    <Styles.AnimePageChildItem>
                      <Styles.AnimePageChildItemImage>
                        <img
                          src={
                            recommendation.node.mediaRecommendation?.coverImage
                              .medium
                          }
                          alt="cover"
                        />
                      </Styles.AnimePageChildItemImage>
                      <Styles.AnimePageChildItemTitle
                        style={{ fontWeight: "700" }}
                      >
                        {recommendation.node.mediaRecommendation?.title.romaji}
                      </Styles.AnimePageChildItemTitle>
                    </Styles.AnimePageChildItem>
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </Styles.AnimePageChildItemWrapper>
        </Styles.AnimePageChild>
      ) : null}
    </>
  );
};

export default Recomendations;
