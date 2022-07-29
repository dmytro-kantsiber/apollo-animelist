import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../components/Layout/Layout";

import ListPageComponent from "../../components/ListPageComponent/ListPageComponent";

const ListPage = () => {
  return (
    <>
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
    </>
  );
};

export default ListPage;
