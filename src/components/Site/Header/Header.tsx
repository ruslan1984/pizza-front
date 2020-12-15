import React, { FC } from "react";
import { Page } from "@components/elements";
import Currency from "@components/Currency/Currency";
import {
  HeaderBlock,
  HeaderPage,
  Img,
  LinkLogo,
  LogoText,
  BasketLink,
  HeaderRight,
} from "./elements";
import AuthBlock from "@components/AuthBlock/AuthBlock";

export const Header: FC = () => {
  return (
    <HeaderPage>
      <Page>
        <HeaderBlock>
          <LinkLogo to={"/"}>
            <Img src={process.env.HOST + "/img/logo.png"} alt="pizza" />
            <LogoText>Pizza</LogoText>
          </LinkLogo>
          <Currency />
          <HeaderRight>
            <AuthBlock />
            <BasketLink to={"/basket"}>Cart</BasketLink>
          </HeaderRight>
        </HeaderBlock>
      </Page>
    </HeaderPage>
  );
};

export default Header;
