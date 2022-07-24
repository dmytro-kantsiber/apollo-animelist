import React from "react";
import Layout from "../../components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ListPageComponent from "../../components/ListPageComponent/ListPageComponent";
import { useTrackedState } from "../../context/AppContext";
import { Redirect } from "react-router-dom";

const ListPage = () => {
  const state = useTrackedState();
  return (
    <>
      {state.user ? (
        <Layout>
          <ListPageComponent />

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
        </Layout>
      ) : (
        <Redirect to={`/`} />
      )}
    </>
  );
};

export default ListPage;
