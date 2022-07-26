import { Typography } from "@mui/material";
import React from "react";
import image from "../../images/NothingFound.png";
import * as Styles from "./styles";

const NothingFound = () => {
  return (
    <Styles.NothingFound>
      <Typography variant="h1" fontSize="50px" color="white">
        Nothing Found
      </Typography>
      <img src={image} alt="nothing found" srcSet="" />
    </Styles.NothingFound>
  );
};

export default NothingFound;
