import React from "react";
import AnimePageComponent from "../../components/AnimePageComponent/AnimePageComponent";
import Layout from "../../components/Layout/Layout";
import * as Styles from "./styles";

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
