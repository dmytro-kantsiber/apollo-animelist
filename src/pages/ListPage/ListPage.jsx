import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import ListPageComponent from "../../components/ListPageComponent/ListPageComponent";
import { useTrackedState } from "../../context/AppContext";

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
