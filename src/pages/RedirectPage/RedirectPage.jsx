import React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

import { useDispatch, useTrackedState } from "../../context/AppContext";
import { loginAC } from "../../context/actions";
const RedirectPage = () => {
  const code = window.location;
  const dispatch = useDispatch();
  const state = useTrackedState();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      dispatch(loginAC(code.hash.slice(14, code.hash.length - 38)));
    }
  }, [code.hash, dispatch]);
  if (state.isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <Styles.RedirectPage>
      <Typography variant="h4" color="initial">
        ЗАЧЕКАЙТЕ, ВІДБУВАЄТЬСЯ ПЕРЕНАПРАВЛЕННЯ
      </Typography>
      <Link to="/">
        <Typography variant="h3" color="initial">
          Повернутись на Головну
        </Typography>
      </Link>
    </Styles.RedirectPage>
  );
};

export default RedirectPage;
