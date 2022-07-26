import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import * as Styles from "./styles";
import { loginAC } from "../../context/actions";
import { useDispatch, useTrackedState } from "../../context/AppContext";

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
