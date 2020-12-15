import React, { FC } from "react";
import { LogOutBtn, LogOutBlock, UserName } from "./elements";
import { AuthLink } from "@components/AuthBlock/elements";

interface LogOutProps {
  user: string;
  onLogOutClick: () => void;
}

export const Presenter: FC<LogOutProps> = (props: LogOutProps) => {
  return (
    <LogOutBlock>
      <UserName>{props.user}</UserName>
      <LogOutBtn onClick={props.onLogOutClick}>LogOut</LogOutBtn>
      <AuthLink to="/orders">Orders</AuthLink>
    </LogOutBlock>
  );
};

export default Presenter;
