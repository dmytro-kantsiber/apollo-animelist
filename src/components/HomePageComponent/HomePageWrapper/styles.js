import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
