import React from "react";
import * as Styles from "./styles";
const HomePageButtons = ({ handleReset, handleSubmit }) => {
  return (
    <Styles.Buttons>
      <Styles.HomePageOptionsItemSearch>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </Styles.HomePageOptionsItemSearch>
      <Styles.HomePageOptionsItemSearch>
        <button onClick={(e) => handleReset(e)}>Reset</button>
      </Styles.HomePageOptionsItemSearch>
    </Styles.Buttons>
  );
};

export default HomePageButtons;
