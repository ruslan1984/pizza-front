import React, { FC, useState, useEffect, FormEvent } from "react";
import { CounterBlock, CounterBtn, CounterInput, PriceTotal } from "./elements";
import { Btn } from "@components/elements";

interface CounterProps {
  id: number;
  count: number;
  price: number;
  currency: string;
  inc: () => void;
  dec: () => void;
  inputUpdate: (e: FormEvent) => void;
}

export const Presenter: FC<CounterProps> = (props: CounterProps) => {
  return (
    <>
      <CounterBlock>
        <CounterBtn onClick={props.dec} disabled={props.count <= 1}>
          -
        </CounterBtn>
        <CounterInput
          onChange={props.inputUpdate}
          type="number"
          value={props.count}
        />
        <CounterBtn onClick={props.inc} disabled={props.count >= 99}>
          +
        </CounterBtn>
        <PriceTotal>
          {props.price * props.count} {props.currency}
        </PriceTotal>
      </CounterBlock>
    </>
  );
};
export default Presenter;
