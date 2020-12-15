import React, { FC, FormEvent } from "react";
import { CurrencyBlock, CurrencyItem } from "./elements";
import { CurrencyPriceType } from "@components/types";

interface CurrencyProps {
  currency: CurrencyPriceType;
  setCurrency: (e: FormEvent) => void;
}

export const Presenter: FC<CurrencyProps> = (props: CurrencyProps) => {
  return (
    <CurrencyBlock>
      <CurrencyItem
        id="USD"
        onClick={props.setCurrency}
        active={props.currency == "USD"}
      >
        USD
      </CurrencyItem>
      <CurrencyItem
        id="EUR"
        onClick={props.setCurrency}
        active={props.currency == "EUR"}
      >
        EUR
      </CurrencyItem>
    </CurrencyBlock>
  );
};

export default Presenter;
