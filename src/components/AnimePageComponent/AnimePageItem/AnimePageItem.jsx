import React from "react";
import Modal from "react-modal";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import * as Styles from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimePageItemMain from "./AnimePageItemMain/AnimePageItemMain";
import AnimePageItemAdditional from "./AnimePageItemAdditional/AnimePageItemAdditional";

Modal.setAppElement("#root");
const AnimePageItem = ({ data, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Styles.AnimePageItem>
      <AnimePageItemMain data={data} loading={loading} />
      <AnimePageItemAdditional data={data} />
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
    </Styles.AnimePageItem>
  );
};

export default AnimePageItem;
