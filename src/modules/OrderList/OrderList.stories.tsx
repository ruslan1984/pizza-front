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
    count: 2,
    orderDate: "12.12.2020",
  },
  {
    id: 2,
    name: "Quattro Stagioni",
    img: "http://test/img/2.jpg",
    price: 200,
    currency: "USD",
    count: 2,
    orderDate: "12.12.2020",
  },
  {
    id: 3,
    name: "Carbonara",
    img: "http://test/img/3.jpg",
    price: 250,
    currency: "EUR",
    count: 2,
    orderDate: "12.12.2020",
  },
];
export const OrderList = () => {
  return <Presenter list={list} />;
};
