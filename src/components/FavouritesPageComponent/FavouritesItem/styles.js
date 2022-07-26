import styled from "styled-components";

export const FavouritesItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    > div > * {
      display: block;
    }
  }
`;

export const FavouritesItem = styled.div`
  max-width: 230px;
  height: 370px;
  border-radius: 15px;
  background-color: #383838;
  padding: 20px;
  justify-self: center;
  position: relative;
`;

export const FavouritesItemTitle = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 20px;
`;

export const FavouritesItemImage = styled.div`
  > img {
    max-width: 230px;
    max-height: 320px;
    object-fit: cover;
  }
`;
export const FavouritesItemButton = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  display: none;
  z-index: 9999;
  cursor: pointer;
`;
