import styled from "styled-components";

export const ListPageItem = styled.div`
  @media (max-width: 1366px) {
    margin-bottom: 20px;
  }
`;
export const ListPageAnimeList = styled.div`
  overflow-y: auto;
  height: 700px;
  margin-top: 20px;
  @media (max-width: 950px) {
    overflow-y: visible;
    margin-bottom: 20px;
  }
`;
export const ListPageItemType = styled.div`
  font-weight: 800;
  font-size: 25px;
`;
export const ListPageItemWrapper = styled.div`
  width: 100%;
`;
export const ListPageWrapper = styled.div`
  background-color: #383838;
  border-radius: 15px;
  padding: 15px;
  color: white;

  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
`;

export const ListPageTitle = styled.div`
  text-align: left;
  flex: 5;
  padding: 18px 20px;
  font-size: 18px;
`;

export const ListPageScore = styled.div`
  font-size: 18px;
  padding: 18px 20px;
  flex: 1;
`;

export const ListPageProgress = styled.div`
  flex: 1;
  padding: 18px 20px;
  font-size: 18px;
`;

export const ListPageType = styled.div`
  flex: 1;
  padding: 18px 20px;
  font-size: 18px;
`;

export const ListPageOptions = styled.div`
  width: 150px;
  border-radius: 20px;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  margin-right: 30px;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
`;

export const ListPageStats = styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
`;
export const ListPageTop = styled.div`
  display: flex;
  justify-content: start;
`;

export const ListPageSort = styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
  margin-right: 30px;
`;
