import styled from "styled-components";

export const SearchResults = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  left: 1%;
  overflow: hidden;
  height: auto;
  width: 98%;
  top: 100px;
  z-index: 10;
  background-color: #191919;
  border: 2px solid black;
  border-radius: 15px;
`;

export const SearchResultsWrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid blue;
  &:hover {
    background-color: #353535;
  }
  &:last-child {
    padding-bottom: 10px;
  }
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const SearchResultsImage = styled.div`
  > img {
    object-fit: cover;
    width: 65px;
    height: 90px;
  }
`;

export const SearchResultsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  line-height: 0px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: white;
`;

export const SearchResultsInfoTitle = styled.p`
  font-weight: 700;
  font-size: 16 px;
  width: auto;
`;

export const SearchResultsInfoType = styled.p`
  font-size: 13px;
`;

export const SearchResultsInfoStatus = styled.div`
  background-color: ${({ status }) => {
    if (status === "CANCELED" || status === "HIATUS") {
      return "red";
    }
    if (status === "RELEASING") {
      return "orange";
    }
    if (status === "NOT_YET_RELEASED") {
      return "blue";
    }
    if (status === "FINISHED") {
      return "green";
    }
  }};
  color: white;
  width: auto;
  padding: 3px;
  margin-right: 5px;
  line-height: 0;
  text-align: center;
  height: 20px;
  margin-left: 20px;
  > p {
    font-size: 13px;
  }
`;

export const SearchResultsInfoGenres = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

export const SearchMore = styled.div`
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: white;
  font-size: 30px;
`;
export const SearchResultsLeft = styled.div`
  flex-basis: 100%;
  > a {
    display: flex;

    text-decoration: none;
    color: black;
    padding-top: 15px;
    padding-left: 40px;
    padding-bottom: 10px;
  }
`;
