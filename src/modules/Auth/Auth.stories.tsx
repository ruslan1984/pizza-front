import React from "react";
import Presenter from "./Presenter";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Auth",
  decorators: [withKnobs],
};

export const Auth: React.FC = () => {
  return (
    <Presenter/>
  );
};
