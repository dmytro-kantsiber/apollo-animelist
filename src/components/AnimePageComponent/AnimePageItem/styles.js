import styled from "styled-components";

export const AnimePageItem = styled.div``;

export const AnimePageItemMain = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AnimePageItemMainLeft = styled.div`
  margin-right: 45px;
  @media (max-width: 650px) {
    margin-right: 0;
    align-items: center;
  }
`;

export const AnimePageItemMainLeftImage = styled.img`
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
  margin-bottom: 10px;
`;

export const AnimePageItemMainLeftOptions = styled.div``;

export const AnimePageItemMainLeftOptionsButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AnimePageItemMainLeftOptionsScore = styled.div`
  text-align: center;
  padding-top: 20px;
`;
export const AnimePageAdditionalLeft = styled.div`
  margin-top: 20px;
`;

export const AnimePageAdditionalLeftRankings = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 30px;
  width: 100%;
`;

export const AnimePageAdditionalLeftRankingsItem = styled.div`
  padding-left: 20px;
  > p {
    color: white;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const AnimePageItemMainRight = styled.div``;

export const AnimePageItemMainRightTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
  @media (max-width: 650px) {
    text-align: center;
    padding-top: 20px;
  }
`;

export const AnimePageItemMainRightDescription = styled.div`
  color: white;
  > p {
    font-size: 20px;
    text-align: justify;
  }
`;

export const AnimePageAdditional = styled.div``;

export const AnimePageAdditionalTabs = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  > a {
    text-decoration: none;
    font-size: 30px;
    text-transform: capitalize;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AnimePageAdditionalTabsText = styled.p`
  font-size: 30px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ tab, item }) => {
    return tab === item ? "#1565c0" : "white";
  }};
  text-decoration: ${({ tab, item }) => {
    return tab === item ? "underline" : "none";
  }};
  &:hover {
    color: #1565c0;
  }
`;

export const AnimePage = styled.div``;

export const AnimePageChild = styled.div``;
export const AnimePageChildTitle = styled.p`
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

export const AnimePageInfo = styled.div``;
export const AnimePageInfoItem = styled.p`
  margin-right: 30px;
  color: white;
`;
export const AnimePageInfoItems = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
`;

export const AnimePageChildItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-column-gap: 2.5%;
  grid-row-gap: 10px;
  > a {
    text-decoration: none;
    color: black;
    word-break: break-all;
  }
`;

export const AnimePageChildItem = styled.div`
  width: 100px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const AnimePageChildItemImage = styled.div`
  object-fit: contain;
  width: 100px;
  height: 140px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const AnimePageChildItemTitle = styled.p`
  font-size: 14px;
  word-break: normal;
  color: white;
`;

export const AnimePageYoutube = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const AnimePageYoutubeVideo = styled.div`
  > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
