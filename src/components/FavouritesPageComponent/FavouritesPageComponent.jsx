import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTrackedState } from "../../context/AppContext";
import { TOGGLE_FAV } from "../../graphql/mutations";
import { LOAD_USER_FAVS } from "../../graphql/queries";
import FavouritesItem from "./FavouritesItem/FavouritesItem";
import * as Styles from "./styles";

const FavouritesPageComponent = () => {
  const state = useTrackedState();

  const notifyDeleteFav = () => toast("Removed from favorites");

  const notifyError = () => toast("Failed!");

  const { data } = useQuery(LOAD_USER_FAVS, {
    variables: { id: state.user?.id },
    fetchPolicy: "cache-first",
  });

  const [deleteEntry] = useMutation(TOGGLE_FAV);

  const handleDelete = (id) => {
    deleteEntry({
      variables: { id },
      update(cache, { data: { ToggleFavourite } }) {
        const tempUser = cache.readQuery({
          query: LOAD_USER_FAVS,
          variables: { id: state.user?.id },
        });
        cache.writeQuery({
          query: LOAD_USER_FAVS,
          data: {
            User: { ...tempUser.User, favourites: { ...ToggleFavourite } },
          },
        });

        cache.writeFragment({
          fragment: gql`
            fragment MyTodo on Media {
              isFavourite
            }
          `,
          id: `Media:${id}`,
          data: {
            isFavourite: false,
          },
        });
      },
      onError: () => {
        notifyError();
      },
      onCompleted: () => {
        notifyDeleteFav();
      },
    });
  };

  return (
    <>
      <Styles.FavouritePageTitle>
        {state.user?.username}`s favourites
      </Styles.FavouritePageTitle>
      <Styles.FavouriteItemsWrapper>
        {data?.User.favourites.anime.nodes.map((anime) => {
          return (
            <FavouritesItem
              key={anime.id}
              handleDelete={handleDelete}
              data={anime}
            />
          );
        })}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Styles.FavouriteItemsWrapper>
    </>
  );
};

export default FavouritesPageComponent;
