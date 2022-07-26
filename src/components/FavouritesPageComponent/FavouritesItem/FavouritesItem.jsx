import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteFavSVG } from "../../../images/removeFav.svg";
import * as Styles from "./styles";

const FavouritesItem = ({ data, handleDelete }) => {
  return (
    <Styles.FavouritesItemWrapper>
      <Styles.FavouritesItem>
        <Link to={`/anime/${data.id}`} style={{ textDecoration: "none" }}>
          <Styles.FavouritesItemTitle>
            {data?.title.romaji}
          </Styles.FavouritesItemTitle>
          <Styles.FavouritesItemImage>
            <img src={data?.coverImage.large} alt="cover"></img>
          </Styles.FavouritesItemImage>
        </Link>
        <Styles.FavouritesItemButton onClick={() => handleDelete(data.id)}>
          <DeleteFavSVG />
        </Styles.FavouritesItemButton>
      </Styles.FavouritesItem>
    </Styles.FavouritesItemWrapper>
  );
};

export default FavouritesItem;
