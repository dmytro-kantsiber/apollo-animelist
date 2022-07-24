import styled from "styled-components";

export const AnimeListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnimeListItemWrapper = styled.div`
  width: 100%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: normal;
  }
  > * {
    text-align: center;
  }
`;

export const AnimeListItemTitle = styled.div`
  padding: 18px 25px;
  text-align: left;
  width: 15%;
  @media (max-width: 650px) {
    padding: 8px 10px;
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
  > a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 18px;
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
`;

export const AnimeListItemImage = styled.div`
  > img {
    max-width: 80px;
    object-fit: cover;
    height: 100px;
    @media (max-width: 650px) {
      font-size: 14px;
      max-width: 40px;
      height: 50px;
    }
  }
`;

export const AnimeListItemScore = styled.div`
  width: 100px;
  padding: 18px 20px;
  @media (max-width: 650px) {
    width: auto;
    padding: 8px 10px;
    font-size: 12px;
  }
  > span {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    @media (max-width: 650px) {
      font-size: 12px;
    }
  }
`;

export const AnimeListItemProgress = styled.div`
  padding: 18px 20px;
  width: 200px;
  > span {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    @media (max-width: 650px) {
      font-size: 12px;
    }
  }
  @media (max-width: 650px) {
    width: auto;
    padding: 8px 10px;
    font-size: 12px;
  }
`;

export const AnimeListItemType = styled.div`
  padding: 18px 20px;
  width: 70px;
  @media (max-width: 1366px) {
    display: none;
  }
`;

export const AnimeListAdaptive = styled.div`
  display: flex;
  justify-content: space-between;
`;
