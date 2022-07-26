import styled from "styled-components";

export const FavouriteItemsWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0.5%;
  grid-row-gap: 15px;
  align-items: center;
  @media (max-width: 1410px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1130px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FavouritePageTitle = styled.div`
  color: white;
  font-size: 40px;
  padding-bottom: 30px;
  text-align: center;
`;
