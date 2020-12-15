import React, { FC } from "react";
import BayBlock from "@components/BayBlock/BayBlock";
import { PizzaListType } from "./types";
import {
  PizzaListBlock,
  PizzaListImg,
  PizzaListItem,
  PizzaListLink,
  PizzaName,
  PizzaPrice,
} from "./elements";

interface ListProps {
  list: Array<PizzaListType>;
  onToBacket: (id: number, count: number) => void;
}

const Presenter: FC<ListProps> = (props: ListProps) => {
  const pizzaList = () => {
    return props.list.map((item: PizzaListType) => {
      return (
        <PizzaListItem key={item.id}>
          <PizzaListLink to={"/" + item.id}>
            <PizzaListImg src={item.img} />
            <PizzaName>{item.name}</PizzaName>
            <PizzaPrice>
              {item.price} {item.currency}
            </PizzaPrice>
          </PizzaListLink>
          <BayBlock
            onToBacket={(count: number) => {
              props.onToBacket(item.id, count);
            }}
            {...item}
          />
        </PizzaListItem>
      );
    });
  };
  return <PizzaListBlock>{pizzaList()}</PizzaListBlock>;
};

export default Presenter;
