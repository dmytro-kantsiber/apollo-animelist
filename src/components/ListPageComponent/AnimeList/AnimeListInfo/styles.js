import styled from "styled-components";

export const AnimeListInfoWrapper = styled.div`
  background-color: #383838;
  border-radius: 15px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-right: 20px;
  @media (max-width: 950px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    margin-bottom: 20px;
    margin-right: 0px;
  }
`;
export const AnimeListProfileImage = styled.div`
  padding-top: 30px;
  > img {
    border-radius: 90px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
  }
`;
export const AnimeListProfileNickname = styled.div`
  color: white;
  padding-top: 20px;
  font-size: 30px;
  padding-bottom: 20px;
`;
export const AnimeListProfileTabs = styled.div`
  padding-top: 30px;
`;
export const AnimeListProfileTabsItem = styled.div`
  background-color: ${({ list, currentList }) => {
    return list === currentList ? "grey" : "#383838";
  }};
  width: 320px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  color: white;
  font-size: 38px;
  &:hover {
    background-color: grey;
  }
  @media (max-width: 550px) {
    font-size: 23px;
    width: auto;
  }
`;
export const AnimeListProfileTabsItemAll = styled.div`
  background-color: ${({ list, currentList }) => {
    return currentList === "All" ? "grey" : "#383838";
  }};
  width: 320px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  color: white;
  font-size: 38px;
  &:hover {
    background-color: grey;
  }
  @media (max-width: 550px) {
    font-size: 23px;
    width: auto;
  }
`;
export const AnimeListProfileLogout = styled.div`
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 550px) {
    > button {
      font-size: 16px;
    }
  }
`;
