import styled from "styled-components";
import { MEDIA_QUERIES } from "../../utils/mediaQueriesList";

export const NothingFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  > img {
    width: 500px;
    ${MEDIA_QUERIES.md} {
      width: 300px;
    }
  }
`;
