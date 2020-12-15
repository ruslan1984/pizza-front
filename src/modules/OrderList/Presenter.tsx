import React, { FC } from "react";
import BayBlock from "@components/BayBlock/BayBlock";
import { PizzaListType } from "./types";
import {
  OrderListBlock,
  PizzaListImg,
  OrderListItem,
  PizzaListLink,
  PizzaName,
  PizzaPrice,
  PizzaPriceBlock,
  Count,
  Pizza,
  Date,
  OrderItem,
} from "./elements";

interface ListProps {
  list: Array<PizzaListType>;
  onToBacket: (id: number, count: number) => void;
}

const Presenter: FC<ListProps> = (props: ListProps) => {
  const orderList = () => {
    return props.list.map((item: PizzaListType, id: number) => {
      return (
        <OrderItem key={id}>
          <Date>Order date: {item.orderDate}</Date>
          <OrderListItem>
            <Pizza>
              <PizzaListImg src={item.img} />
              <PizzaName>{item.name}</PizzaName>
            </Pizza>
            <PizzaPriceBlock>
              <PizzaPrice>
                Price: {item.price} {item.currency}
              </PizzaPrice>
              <Count>Count: {item.count}</Count>
              <PizzaPrice>
                Total price: {item.price * item.count} {item.currency}
              </PizzaPrice>
            </PizzaPriceBlock>
          </OrderListItem>
        </OrderItem>
      );
    });
  };
  return (
    <>
      <h1>Orders</h1>
      <OrderListBlock>{orderList()}</OrderListBlock>
    </>
  );
};

export default Presenter;
