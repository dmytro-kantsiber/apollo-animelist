import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../utils/mediaQueriesList";

export const HomePageOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageOptionsFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${MEDIA_QUERIES.lg} {
    justify-content: space-between;
  }
  @media (max-width: 580px) {
    justify-content: center;
  }
`;
export const HomePageOptionsItem = styled.div`
  padding: 20px 5px 25px;
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
export const HomePageOptionsItemName = styled.div`
  padding-left: 20px;
  font-weight: 700;
  color: white;
`;
export const HomePageOptionsItemInput = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
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
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
