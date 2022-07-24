import React, { useReducer } from "react";
import { createContainer } from "react-tracked";
import { AppReducer } from "./AppReducer";

const initialState = {
  isAuth: localStorage.getItem("access_token"),
  isModal: false,
  user: null,
};

const useValue = () => useReducer(AppReducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);

export const AppProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
