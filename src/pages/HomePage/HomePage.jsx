import React from "react";
import Layout from "../../components/Layout/Layout";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

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
