import React from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Layout from "../../components/Layout/Layout";

import HomePageComponent from "../../components/HomePageComponent/HomePageComponent";
const HomePage = () => {
  return (
    <ScrollToTop>
      <Layout>
        <HomePageComponent />
      </Layout>
    </ScrollToTop>
  );
};

export default HomePage;
