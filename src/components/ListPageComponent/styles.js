import styled from "styled-components";

export const ListPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  margin-left: 90px;
  margin-right: 95px;
  > * {
    text-align: center;
  }
`;
export const ListPageContainer = styled.div`
  display: flex;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ListPageItem = styled.div``;

export const ListPageItemType = styled.div`
  font-weight: 800;
  font-size: 25px;
`;

export const ListPageWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 15px;
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
  height: auto;
`;
export const ListPageTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const ListPageSort = styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 20%);
  margin-right: 30px;
`;

export const ListPageCharts = styled.div`
  display: flex;
`;
