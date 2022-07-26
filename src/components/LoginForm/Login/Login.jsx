import { Button } from "@mui/material";
import React from "react";
import { useTrackedState } from "../../../context/AppContext";
import useComponentVisible from "../../../hooks/useComponentVisible";
import Dropdown from "./Dropdown/Dropdown";
import * as Styles from "./styles";

const Login = () => {
  const state = useTrackedState();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <>
      {state.isAuth ? (
        <Styles.Login ref={ref}>
          <Styles.LoginImage>
            <img
              src={state.user?.avatar}
              alt="user avatar"
              onClick={setIsComponentVisible}
            />
          </Styles.LoginImage>
          {isComponentVisible ? <Dropdown /> : null}
        </Styles.Login>
      ) : (
        <Button
          sx={{ height: "40px", fontWeight: 700 }}
          href="https://anilist.co/api/v2/oauth/authorize?client_id=8495&response_type=token"
          variant="contained"
        >
          Login
        </Button>
      )}
    </>
  );
};

export default Login;
