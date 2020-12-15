import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Presenter from "./Presenter";

export default {
  title: "Site",
  decorators: [withKnobs],
};
const data = {
  id: 1,
  price: 100,
  currency: "USD",
};

export const SiteBayBlock = () => {
  return <Presenter {...data} />;
};
