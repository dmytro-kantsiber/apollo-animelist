import styled from "styled-components";

export const Layout = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? "0.33" : "1")};
  > * {
    pointer-events: ${({ isOpen }) => (isOpen ? "none" : "auto")};
  }
  margin-top: 50px;
  /* border: 1px solid blue; */
`;
