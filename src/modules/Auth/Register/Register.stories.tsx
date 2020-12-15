import React from "react";
import Presenter from "./Presenter";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Auth",
  decorators: [withKnobs],
};

export const Register: React.FC = () => {
  return (
    <BrowserRouter>
      <Presenter
        errors={[]}
        onSubmit={(e) => {
          e.preventDefault();
          action("form submitted")(e);
        }}
      />
    </BrowserRouter>
  );
};
