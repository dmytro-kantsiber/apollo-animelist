import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
export const HomePageOptionsItemSearch = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  > button {
    cursor: pointer;
    border-radius: 30px;
    width: 200px;
    height: 50px;
    color: white;
    font-size: 23px;
    background-color: #3457f3;
    border: none;
    &:hover {
      background-color: #5d7bff;
    }
  }
`;
