import styled from "styled-components";

export const AnimeListSortWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  background-color: #383838;
  justify-content: space-around;
  width: 100%;
  overflow-x: auto;
  @media (max-width: 950px) {
    margin-top: 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AnimeListSortItem = styled.div`
  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  width: 33%;
  color: white;
  text-align: center;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ sort, currentSort }) => {
    return sort === currentSort ? "grey" : "#383838";
  }};
  font-size: 30px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
  @media (max-width: 700px) {
    width: 100%;
    &:last-child {
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
`;

export const AnimeListSortTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: white;
  font-size: 22px;
  width: 100px;
  padding-left: 20px;
  @media (max-width: 700px) {
    margin-bottom: 10px;
    margin-right: 0;
    margin-top: 10px;
  }
`;
