import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Presenter from "./Presenter";

export default {
  title: "Site",
  decorators: [withKnobs],
};

export const SiteCurrency = () => {
  return <Presenter />;
};
