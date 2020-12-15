import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Presenter from "./SignIn";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Site",
  decorators: [withKnobs],
};

export const SiteAuthSignIn = () => {
  return (
    <BrowserRouter>
      <Presenter />
    </BrowserRouter>
  );
};
