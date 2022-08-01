import React from "react";
import { SEARCH_OPTIONS } from "../../../utils/constants";
import HomePageOption from "./HomePageOption";
import * as Styles from "./styles";

const HomePageOptions = ({ handleChange, options }) => {
  return (
    <>
      <Styles.HomePageOptions>
        <form>
          <Styles.HomePageOptionsFilters>
            {SEARCH_OPTIONS.map((element, index) => {
              return (
                <HomePageOption
                  key={index}
                  element={element}
                  handleChange={handleChange}
                  options={options[element.type]}
                />
              );
            })}
          </Styles.HomePageOptionsFilters>
        </form>
      </Styles.HomePageOptions>
    </>
  );
};

export default HomePageOptions;
