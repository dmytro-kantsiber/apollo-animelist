import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/Error.png";
import * as Styles from "./styles";

const ErrorPage = () => {
  return (
    <Styles.ErrorPage>
      <img src={Image} alt="error 404" />

      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h3" color="white">
          Повернутись на Головну
        </Typography>
      </Link>
    </Styles.ErrorPage>
  );
};

export default ErrorPage;
