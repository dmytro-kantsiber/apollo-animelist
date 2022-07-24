import styled from "styled-components";

export const AnimeModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const AnimeModalItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 200px;
`;

export const AnimeItemTitle = styled.p`
  padding-right: 20px;
`;

export const AnimeModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
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

export const AnimeModalLeft = styled.div`
  margin-right: 10px;
`;
export const AnimeModalLeftImage = styled.div`
  > img {
    border-radius: 10px;
  }
`;
export const AnimeModalRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimeModalRightTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  @media (max-width: 600px) {
    text-align: center;
    margin-top: 20px;
  }
`;
