import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Counter from "./Counter";

export default {
  title: "Site",
  decorators: [withKnobs],
};
const data = {
  price: 100,
  currency: "USD",
  count: 2,
};
export const SiteCounter = () => {
  return <Counter {...data} />;
};
