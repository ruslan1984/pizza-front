import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { btnBackground, btnBackgroundHover } from "@components/variables";
export const AuthLink = styled(Link)`
  margin-right: 5px;
  padding: 10px;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.5s;
  background-color: ${btnBackground};
  &:hover {
    background-color: ${btnBackgroundHover};
  }
`;
