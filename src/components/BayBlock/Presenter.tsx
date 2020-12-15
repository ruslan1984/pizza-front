import React, { FC, FormEvent } from "react";
import { BtnBlock } from "./elements";
import { Btn } from "@components/elements";
import { Counter } from "@components/Counter/Counter";

interface BtnBlockProps {
  id: number;
  count: number;
  price: number;
  currency: string;
  active: boolean;
  onToBacket: () => void;
  setCount?: (count: number) => void;
}

export const Presenter: FC<BtnBlockProps> = (props: BtnBlockProps) => {
  return (
    <>
      <BtnBlock active={props.active}>
        <Btn onClick={props.onToBacket}>Add To Cart</Btn>
      </BtnBlock>
      <Counter
        price={props.price}
        currency={props.currency}
        count={props.count}
        setCount={props.setCount}
      />
    </>
  );
};
export default Presenter;
