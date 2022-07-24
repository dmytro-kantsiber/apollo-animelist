import React from "react";

import * as Styles from "../styles";

const Staff = ({ data, limit, setCurrentTab }) => {
  return (
    <>
      {data.Media.staff.edges.length >= 1 ? (
        <Styles.AnimePageChild>
          <Styles.AnimePageChildTitle onClick={() => setCurrentTab("staff")}>
            Staff
          </Styles.AnimePageChildTitle>
          <Styles.AnimePageChildItemWrapper>
            {data.Media.staff.edges.map((staff, index) => {
              if (index < limit) {
                return (
                  <Styles.AnimePageChildItem key={staff.node.id}>
                    <Styles.AnimePageChildItemTitle
                      style={{ fontSize: "12px" }}
                    >
                      {staff.node.primaryOccupations[0] || "No info"}
                    </Styles.AnimePageChildItemTitle>
                    <Styles.AnimePageChildItemImage>
                      <img src={staff.node.image.medium} alt="cover" />
                    </Styles.AnimePageChildItemImage>
                    <Styles.AnimePageChildItemTitle
                      style={{ fontWeight: "700" }}
                    >
                      {staff.node.name.full}
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

export default Staff;
