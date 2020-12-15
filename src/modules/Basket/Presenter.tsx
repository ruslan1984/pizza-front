import React, { FC, FormEvent } from "react";
import { Loading } from "@components/types";
import { Counter } from "@components/Counter/Counter";
import {
  BasketItem,
  Img,
  Name,
  BasketImg,
  RemoveBtn,
  BasketPrice,
  Price,
  TotalPrice,
  BasketProducts,
} from "./elements";
import { BasketItemType } from "./types";

interface ListProps {
  list: Array<BasketItemType>;
  loading: Loading;
  totalPrice: number;
  currency: string;
  onRemove: (e: FormEvent) => void;
  setCount: (id: number, count: number) => void;
}

const Presenter: FC<ListProps> = (props: ListProps) => {
  const basketList = () => {
    return Object.keys(props.list).map((index: number) => {
      const item: BasketItemType = props.list[index];
      return (
        <BasketItem key={item.id}>
          <BasketImg>
            <Img src={item.img} />
            <Name>{item.name}</Name>
          </BasketImg>
          <BasketPrice>
            <Price>
              {item.price} {item.currency}
            </Price>
            <Counter
              setCount={(count: number) => {
                props.setCount(item.id, count);
              }}
              {...item}
            />
            <RemoveBtn id={item.id} onClick={props.onRemove} />
          </BasketPrice>
        </BasketItem>
      );
    });
  };
  return (
    <>
      <BasketProducts>{basketList()}</BasketProducts>
      <TotalPrice>
        {props.totalPrice} {props.currency}
      </TotalPrice>
    </>
  );
};

export default Presenter;
