import { gql, useMutation } from "@apollo/client";
import { useWhyDidYouUpdate } from "ahooks";
import React from "react";
import { useTrackedState } from "../../../../context/AppContext";
import { TOGGLE_FAV } from "../../../../graphql/mutations";
import { LOAD_USER_FAVS } from "../../../../graphql/queries";
import { ReactComponent as IsFavFalseSVG } from "../../../../images/isFavFalse.svg";
import { ReactComponent as IsFavTrueSVG } from "../../../../images/isFavTrue.svg";

const FavButton = ({ id, data, notifyToggleFav, notifyError }) => {
  const state = useTrackedState();
  useWhyDidYouUpdate("FavButton", { id, data, notifyToggleFav, notifyError });

  const [toggleFav, { loading: loadingFav }] = useMutation(TOGGLE_FAV, {
    variables: { id },
    onError: () => {
      notifyError();
    },
    update(cache, { data: { ToggleFavourite } }) {
      const temp = ToggleFavourite.anime.nodes.filter((i) => {
        return i.id === data.Media.id;
      });

      notifyToggleFav(temp.length >= 1 ? true : false);

      const tempUser = cache.readQuery({
        query: LOAD_USER_FAVS,
        variables: { id: state.user.id },
      });

      if (tempUser) {
        cache.writeQuery({
          query: LOAD_USER_FAVS,
          data: {
            User: { ...tempUser.User, favourites: { ...ToggleFavourite } },
          },
        });
      }

      cache.writeFragment({
        id: `Media:${data.Media.id}`,
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
      {data.Media.isFavourite ? (
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
