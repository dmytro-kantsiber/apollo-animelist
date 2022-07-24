import React from "react";
import * as Styles from "./styles";
import Layout from "../../components/Layout/Layout";
import AnimePageComponent from "../../components/AnimePageComponent/AnimePageComponent";

const AnimePage = () => {
  return (
    <Layout>
      <Styles.AnimePage>
        <AnimePageComponent />
      </Styles.AnimePage>
    </Layout>
  );
};

export default AnimePage;
