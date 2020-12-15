import React, { FC, FormEvent, useState } from "react";
import Presenter from "./Presenter";

interface CounterProps {
  price: number;
  count: number;
  currency: string;
  setCount?: (count: number) => void;
}

export const Counter: FC<CounterProps> = (props: CounterProps) => {
  const [count, setCount] = useState(props.count || 1);
  const inc = () => {
    if (count < 99) {
      const newCount = count + 1;
      setCount(newCount);
      props.setCount && props.setCount(newCount);
    }
  };
  const dec = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      props.setCount && props.setCount(newCount);
    }
  };
  const inputUpdate = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const newCount = Number(target.value);
    if (newCount > 0 && newCount < 100) {
      setCount(newCount);
      props.setCount && props.setCount(newCount);
    }
  };

  return (
    <Presenter
      {...props}
      count={count}
      inc={inc}
      dec={dec}
      inputUpdate={inputUpdate}
    />
  );
};
export default Counter;
