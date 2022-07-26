import { useLazyQuery } from "@apollo/client";
import React, { memo, useEffect } from "react";
import { setUserAC } from "../../context/actions";
import { useDispatch, useTrackedState } from "../../context/AppContext";
import { LOAD_USER } from "../../graphql/queries";
import BaseContainer from "../BaseContainer/BaseContainer";
import Header from "../Header/Header";
import * as Styles from "./styles";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const state = useTrackedState();

  const [getUser, { data: userData }] = useLazyQuery(LOAD_USER);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    if (state.isAuth && !state.user) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData) {
      dispatch(
        setUserAC({
          id: userData?.Viewer?.id,
          username: userData?.Viewer?.name,
          avatar: userData?.Viewer?.avatar.medium,
          mediaListOptions: userData?.Viewer?.mediaListOptions,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <>
      <Header />

      <Styles.Layout isOpen={state.isModal}>
        <BaseContainer>{children}</BaseContainer>
      </Styles.Layout>
    </>
  );
};

export default memo(Layout);
