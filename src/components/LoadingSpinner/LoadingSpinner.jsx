import React from "react";
import { Audio } from "react-loader-spinner";
import * as Styled from "./styles";

const LoadingSpinner = () => {
  return (
    <Styled.LoadingSpinner>
      <Audio height="200" width="200" color="#1565c0" ariaLabel="loading" />
    </Styled.LoadingSpinner>
  );
};

export default LoadingSpinner;
