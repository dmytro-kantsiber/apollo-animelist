import styled from "styled-components";

export const Dropdown = styled.div`
  z-index: 99999;
  top: 70;
  right: 0;
  width: 100px;
  position: absolute;
  color: white;
  font-size: 20px;
  background-color: #404040;
  border-radius: 30px;
  padding: 20px;

  > div {
    cursor: pointer;
    &:hover {
      color: #3457f3;
    }
  }
`;
export const DropdownLink = styled.div`
  margin-bottom: 20px;
  > a {
    text-decoration: none;

    color: white;
    &:hover {
      color: #3457f3;
    }
  }
`;
