import React, { Component, FormEvent } from "react";
import Presenter from "./Presenter";
import { CurrencyPriceType } from "@components/types";

interface BayBasketProps {
  totalPrice: number;
  deliveryPrice: number;
  totalDeliveryPrice: number;
  currency: CurrencyPriceType;
  canBay: boolean;
  onBay: () => void;
  onChangeName: (name: string) => void;
  onChangeEmail: (name: string) => void;
  onChangeAddress: (name: string) => void;
}

export class BayBasket extends Component {
  onBay = (e: FormEvent) => {
    e.preventDefault();
    this.props.onBay();
  };
  onChangeName = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    this.props.onChangeName(target.value.trim());
  };
  onChangeEmail = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    this.props.onChangeEmail(target.value.trim());
  };
  onChangeAddress = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    this.props.onChangeAddress(target.value.trim());
  };
  render() {
    return (
      <Presenter
        {...this.props}
        onBay={this.onBay}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        onChangeAddress={this.onChangeAddress}
      />
    );
  }
}
export default BayBasket;
