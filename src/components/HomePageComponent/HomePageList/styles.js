import styled from "styled-components";
import { MEDIA_QUERIES } from "../../../utils/mediaQueriesList";

export const HomePageList = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2.5%;
  grid-row-gap: 30px;
  align-items: center;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  ${MEDIA_QUERIES.lg} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HomePageListItem = styled.div`
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  display: flex;
  height: 255px;
  background-color: #404040;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 430px) {
    width: 100%;
    height: auto;
  }
`;
export const HomePageListLogo = styled.div`
  > a img {
    object-fit: cover;
    width: 184px;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 412px) {
      width: 100px;
    }
    @media (max-width: 360px) {
      width: 80px;
    }
  }
`;
export const HomePageListTitle = styled.div`
  font-size: 20px;
  > p {
    text-decoration: none;

    text-align: center;
    line-height: 23px;
  }
`;
export const HomePageListInfo = styled.div`
  display: flex;
  line-height: 14px;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  font-size: 14px;

  > a {
    text-decoration: none;
    font-size: 14px;
    margin: 5px;
    color: white;
  }
  > div {
    margin: 5px;
  }
`;
export const HomePageListRate = styled.p`
  display: inline;
  font-size: 20px;
  color: ${({ averageScore }) => {
    if (averageScore < 45) {
      return "red";
    }
    if (averageScore >= 45 && averageScore < 80) {
      return "orange";
    }
    if (averageScore >= 80) {
      return "green";
    }
  }};
  font-weight: 700;
  @media (max-width: 430px) {
    margin-bottom: 10px;
  }
`;

export const HomePageListRateWrapper = styled.div`
  color: white;
  padding-bottom: 15px;
  @media (max-width: 430px) {
  }
`;
