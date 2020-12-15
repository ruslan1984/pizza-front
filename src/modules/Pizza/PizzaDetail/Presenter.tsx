import React, { FC, FormEvent } from "react";
import { PizzaDetail, PizzaParams, PizzaPrice, Img } from "./elements";
import BayBlock from "@components/BayBlock/BayBlock";
import { Page } from "@components/elements";
import { Loading, PricesType } from "@components/types";

interface PizzaDetailProps {
  id: number;
  name: string;
  img: string;
  price: string;
  prices: any;
  description: string;
  currency: string;
  loading: Loading;
  onToBacket: (e: FormEvent) => void;
}
export const Presenter: FC<PizzaDetailProps> = (props: PizzaDetailProps) => {
  return (
    <Page loading={props.loading}>
      <PizzaDetail>
        <Img src={props.img} />
        <PizzaParams>
          <h1>{props.name}</h1>
          <PizzaPrice>
            {props.price} {props.currency}
          </PizzaPrice>
          <div>{props.description}</div>
          <BayBlock onToBacket={props.onToBacket} {...props} />
        </PizzaParams>
      </PizzaDetail>
    </Page>
  );
};

export default Presenter;
