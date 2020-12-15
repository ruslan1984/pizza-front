import React, { FC } from "react";
import { AuthLink } from "@components/AuthBlock/elements";

export const Presenter: FC = () => {
  return <AuthLink to="login">Sign In </AuthLink>;
};

export default Presenter;
