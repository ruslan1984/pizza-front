import styled from "@emotion/styled";
import { btnBackground, btnBackgroundHover } from "@components/variables";

export const LogOutBtn = styled.div`
  padding: 10px;
  margin-right: 10px;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.5s;
  background-color: ${btnBackground};
  &:hover {
    background-color: ${btnBackgroundHover};
  }
`;

export const LogOutBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
`;

export const UserName = styled.div`
  margin-right: 5px;
  font-size: 25px;
`;
