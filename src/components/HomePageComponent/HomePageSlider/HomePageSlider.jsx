import { Slider, Typography } from "@mui/material";
import React from "react";
import * as Styles from "./styles";

const HomePageSlider = ({ value, handleChange }) => {
  return (
    <Styles.HomePageOptionsItemSearch>
      <Slider
        value={value}
        onChange={handleChange}
        sx={{
          width: "200px",
          margin: "20px",
          color: "#3457f3",
        }}
        aria-labelledby="slider"
        valueLabelDisplay="on"
      />
      <Typography
        id="slider"
        gutterBottom
        sx={{ margin: "20px", color: "white", fontWeight: 700 }}
      >
        Score range
      </Typography>
    </Styles.HomePageOptionsItemSearch>
  );
};

export default HomePageSlider;
