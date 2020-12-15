import React, { Component, FormEvent } from "react";
import Presenter from "./Presenter";
import { CurrencyPriceType } from "@components/types";
import { actions } from "./reducer";
import { reducerType } from "@store/reducers";
import { connect } from "react-redux";

interface CurrencyProps {
  currency: CurrencyPriceType;
  setCurrency: (currency: CurrencyPriceType) => void;
}

export class Currency extends Component<CurrencyProps> {
  setCurrency = (e: FormEvent) => {
    const target = e.target as HTMLElement;
    const code: CurrencyPriceType = target.id || "USD";
    this.props.setCurrency(code);
  };
  render() {
    return (
      <Presenter
        currency={this.props.currency}
        setCurrency={this.setCurrency}
      />
    );
  }
}

const mapStateToProps = (state: reducerType) => {
  const { currency } = state.currency;
  return {
    currency,
  };
};
const mapDispatchToProps = {
  setCurrency: actions.setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
