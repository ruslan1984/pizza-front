import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Presenter from "./Presenter";

export default {
  title: "Basket",
  decorators: [withKnobs],
};
const data = {
  totalPrice: "3000",
  deliveryPrice: "2000",
  totalDeliveryPrice: "1000",
  currency: "USD",
  user: {
    name: "user",
    email: "email",
  },
};

export const SiteBayBasket = () => {
  return (
    <Presenter
      onSubmit={(e) => {
        e.preventDefoult();
        action("bay");
      }}
      {...data}
    />
  );
};
