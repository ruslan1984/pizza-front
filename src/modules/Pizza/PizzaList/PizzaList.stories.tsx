import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { BrowserRouter } from "react-router-dom";
import Presenter from "./Presenter";

export default {
  title: "Pizza",
  decorators: [withKnobs],
};
const list = [
  {
    id: 1,
    name: "Margherita",
    img: "http://test/img/1.jpg",
    price: 300,
    currency: "USD",
  },
  {
    id: 2,
    name: "Quattro Stagioni",
    img: "http://test/img/2.jpg",
    price: 200,
    currency: "USD",
    prices: {
      usd: {
        price: 200,
        code: "USD",
      },
      eur: {
        price: 180,
        code: "EUR",
      },
    },
  },
  {
    id: 3,
    name: "Carbonara",
    img: "http://test/img/3.jpg",
    price: 250,
    currency: "USD",
  },
];
export const PizzaList = () => {
  return (
    <BrowserRouter>
      <Presenter list={list} />
    </BrowserRouter>
  );
};
