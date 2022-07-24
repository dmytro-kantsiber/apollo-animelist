import React from "react";
import { ReactComponent as IsFavTrueSVG } from "../../../../images/isFavTrue.svg";
import { ReactComponent as IsFavFalseSVG } from "../../../../images/isFavFalse.svg";
import { gql, useMutation } from "@apollo/client";
import { TOGGLE_FAV } from "../../../../graphql/mutations";

const FavButton = ({ id, data, notifyToggleFav, notifyError }) => {
  const [toggleFav, { loading: loadingFav }] = useMutation(TOGGLE_FAV, {
    variables: { id },
    onError: () => {
      notifyError();
    },
    update(cache, { data: { ToggleFavourite } }) {
      const temp = ToggleFavourite.anime.nodes.filter((i) => {
        return i.id === data?.Media.id;
      });
      notifyToggleFav(temp.length >= 1 ? true : false);
      cache.writeFragment({
        id: `Media:${data?.Media.id}`,
        fragment: gql`
          fragment Fav on Media {
            isFavourite
          }
        `,
        data: {
          isFavourite: temp.length >= 1 ? true : false,
        },
      });
    },
  });

  return (
    <>
      {data?.Media.isFavourite ? (
        <IsFavTrueSVG
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (!loadingFav) {
              toggleFav();
            }
          }}
        />
      ) : (
        <IsFavFalseSVG
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (!loadingFav) {
              toggleFav();
            }
          }}
        />
      )}
    </>
  );
};

export default FavButton;
