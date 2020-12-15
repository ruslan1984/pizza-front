import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Presenter from "./Presenter";

export default {
  title: "Pizza",
  decorators: [withKnobs],
};
const data = {
  id: 1,
  name: "Carbonara",
  img: "http://test/img/1.jpg",
  price: 250,
  descripton:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, similique omnis quisquam molestias sint voluptatum facilis illo libero ut inventore sequi eveniet atque dolores error nisi fuga quis at? Iste!",
  currency: "USD",
};
export const PizzaDetail = () => {
  return <Presenter {...data} />;
};
