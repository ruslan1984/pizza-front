import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Presenter from "./Presenter";
import { action } from "@storybook/addon-actions";

export default {
  title: "Site",
  decorators: [withKnobs],
};

export const SitePagination = () => {
  return (
    <Presenter currentPage={1} pageCount={3} onPageClick={action("click")} />
  );
};
