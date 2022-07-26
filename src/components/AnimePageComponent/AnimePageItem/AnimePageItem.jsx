import React from "react";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import AnimePageItemAdditional from "./AnimePageItemAdditional/AnimePageItemAdditional";
import AnimePageItemMain from "./AnimePageItemMain/AnimePageItemMain";
import * as Styles from "./styles";

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
