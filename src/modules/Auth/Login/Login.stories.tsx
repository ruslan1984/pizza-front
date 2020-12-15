import React, { FormEvent } from "react";
import Presenter from "./Presenter";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Auth",
  decorators: [withKnobs],
};

export const Login: React.FC = () => {
  return (
    <BrowserRouter>
      <Presenter
        errors={["error"]}
        onSubmit={(e) => {
          e.preventDefault();
          action("form submitted")(e);
        }}
      />
    </BrowserRouter>
  );
};
