import styled from "styled-components";
import { MEDIA_QUERIES } from "../../utils/mediaQueriesList";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const HeaderBackground = styled.div`
  background-color: #383838;
`;

export const HeaderItem = styled.div`
  padding: 10px;

  > * {
    text-decoration: none;
    color: black;
    width: auto;
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    padding-left: 10px;
    font-size: 25px;
    color: white;
    font-weight: 800;
  }
  ${MEDIA_QUERIES.md} {
    > p {
      display: none;
    }
  }
`;
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  > svg {
    padding-left: 20px;
  }
  ${MEDIA_QUERIES.sm} {
    display: none;
  }
`;
export const GlobalSearch = styled.div`
  > a {
    text-decoration: none;
    color: black;
  }
`;
