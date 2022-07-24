import React from "react";

import * as Styles from "../styles";

const Characters = ({ data, limit, setCurrentTab }) => {
  return (
    <>
      {data.Media.characters.edges.length >= 1 ? (
        <Styles.AnimePageChild>
          <Styles.AnimePageChildTitle
            onClick={() => setCurrentTab("characters")}
          >
            Characters
          </Styles.AnimePageChildTitle>
          <Styles.AnimePageChildItemWrapper>
            {data.Media.characters.edges.map((character, index) => {
              if (index < limit) {
                return (
                  <Styles.AnimePageChildItem key={character.id}>
                    <Styles.AnimePageChildItemTitle
                      style={{ fontSize: "12px" }}
                    >
                      {character.role.charAt(0).toUpperCase() +
                        character.role
                          .slice(1)
                          .toLowerCase()
                          .replaceAll("_", " ")}
                    </Styles.AnimePageChildItemTitle>
                    <Styles.AnimePageChildItemImage>
                      <img src={character.node.image.medium} alt="cover" />
                    </Styles.AnimePageChildItemImage>
                    <Styles.AnimePageChildItemTitle
                      style={{ fontWeight: "700" }}
                    >
                      {character.node.name.full}
                    </Styles.AnimePageChildItemTitle>
                  </Styles.AnimePageChildItem>
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

export default Characters;
