import React, { FC, useEffect, useState } from "react";
import Presenter from "./Presenter";

interface BtnBlockProps {
  id: number;
  price: number;
  currency: string;
  onToBacket: (count: number) => void;
}

export const BayBlock: FC<BtnBlockProps> = (props: BtnBlockProps) => {
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(false);
  const onToBacket = () => {
    props.onToBacket(count);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };
  return (
    <Presenter
      active={active}
      {...props}
      setCount={setCount}
      onToBacket={onToBacket}
    />
  );
};
export default BayBlock;
