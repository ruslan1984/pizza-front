import React, { FC, FormEvent, FormEventHandler } from "react";
import { Input, Form, Label, Textarea } from "@components/elements";
import { BtnBay, TotalPriceBlock, TotalPriceItem, PriceItem } from "./elements";
import { CurrencyPriceType } from "@components/types";

interface BayBasketProps {
  totalPrice: number;
  deliveryPrice: number;
  totalDeliveryPrice: number;
  currency: CurrencyPriceType;
  user: {
    name: string;
    email: string;
    address: string;
  };
  canBay: boolean;
  onBay: (e: FormEvent) => void;
  onChangeName: (e: FormEvent) => void;
  onChangeEmail: (e: FormEvent) => void;
  onChangeAddress: (e: FormEvent) => void;
}

export const Presenter: FC<BayBasketProps> = (props: BayBasketProps) => {
  return (
    <>
      <Form onSubmit={props.onBay}>
        <Label htmlFor="">
          <div>Name</div>
          <Input
            onChange={props.onChangeName}
            required
            type="text"
            value={props.user.name}
          />
        </Label>
        <Label htmlFor="">
          <div>Email</div>
          <Input
            onChange={props.onChangeEmail}
            required
            type="text"
            value={props.user.email}
          />
        </Label>
        <Label htmlFor="">
          <div>Address</div>
          <Textarea
            defaultValue={props.user.address}
            onChange={props.onChangeAddress}
            required
          />
        </Label>
        <TotalPriceBlock>
          <PriceItem>
            Price: {props.totalPrice} {props.currency}
          </PriceItem>
          <PriceItem>
            Delivery price: {props.deliveryPrice} {props.currency}
          </PriceItem>
          <TotalPriceItem>
            Total price: {props.totalDeliveryPrice} {props.currency}
          </TotalPriceItem>
        </TotalPriceBlock>
        <BtnBay active={props.canBay}>Bay</BtnBay>
      </Form>
    </>
  );
};
export default Presenter;
