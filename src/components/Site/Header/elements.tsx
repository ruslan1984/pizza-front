import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  btnBackground,
  btnBackgroundHover,
  basketIcon,
} from "@components/variables";

export const HeaderBlock = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const HeaderPage = styled.div`
  box-shadow: 0px 2px 5px 0px #c7c7c7;
`;

export const Img = styled.img`
  margin-right: 10px;
  max-width: 60px;
`;
export const LogoText = styled.div``;

export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 27px;
  text-decoration: none;
  color: black;
`;
export const BasketLink = styled(Link)`
  padding: 10px 30px 10px 10px;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-image: url(${basketIcon});
  transition: 0.5s;
  background-position: 41px 10px;
  background-size: 22px;
  background-color: ${btnBackground};
  &:hover {
    background-color: ${btnBackgroundHover};
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
