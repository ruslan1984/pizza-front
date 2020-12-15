import React, { Component, FormEvent } from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";
import { setBasket, onBay, actions } from "./reducer";
import { Loading, CurrencyPriceType } from "@components/types";
import { reducerType } from "@store/reducers";
import { BasketItemType, OrderUserType } from "./types";
import { Page } from "@components/elements";
import { BayBasket } from "@components/BayBasket/BayBasket";
import { BasketTitle, EmptyBasket, ErrorItem, ErrorBlock } from "./elements";

interface BasketListProps {
  list: Array<BasketItemType>;
  totalPrice: number;
  loading: Loading;
  currency: CurrencyPriceType;
  deliveryCurrentPrice: number;
  totalDeliveryPrice: number;
  errors: [];
  orderUser: OrderUserType;
  canBay: boolean;
  onBay: () => void;
  setBasket: () => void;
  removeFromBasket: (e: FormEvent) => void;
  updateProductCount: (data: { id: number; count: number }) => void;
  setOrderUser: (orderUser: OrderUserType) => void;
}

export class Basket extends Component<BasketListProps> {
  async componentDidMount() {
    await this.props.setBasket();
  }
  onRemove = (e: FormEvent) => {
    this.props.removeFromBasket(e.target.id);
  };
  setCount = (id: number, count: number) => {
    this.props.updateProductCount({ id, count });
  };
  onChangeName = (name: string) => {
    this.props.setOrderUser({ name });
  };
  onChangeEmail = (email: string) => {
    this.props.setOrderUser({ email });
  };
  onChangeAddress = (address: string) => {
    this.props.setOrderUser({ address });
  };
  render() {
    if (this.props.list && Object.keys(this.props.list).length > 0) {
      return (
        <Page>
          <BasketTitle>Cart</BasketTitle>
          <Presenter
            list={this.props.list}
            totalPrice={this.props.totalPrice}
            currency={this.props.currency}
            onRemove={this.onRemove}
            setCount={this.setCount}
            loading={this.props.loading}
          />
          <BayBasket
            onBay={this.props.onBay}
            currency={this.props.currency}
            totalPrice={this.props.totalPrice}
            deliveryPrice={this.props.deliveryCurrentPrice}
            totalDeliveryPrice={this.props.totalDeliveryPrice}
            user={{
              name: this.props.orderUser.name,
              email: this.props.orderUser.email,
              address: this.props.orderUser.address,
            }}
            canBay={this.props.canBay}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            onChangeAddress={this.onChangeAddress}
          />
          <ErrorBlock>
            {(() => {
              return this.props.errors.map((item, id) => {
                return <ErrorItem key={id}>{item}</ErrorItem>;
              });
            })()}
          </ErrorBlock>
        </Page>
      );
    } else {
      return (
        <>
          <BasketTitle>Cart</BasketTitle>
          <EmptyBasket>Empty</EmptyBasket>
        </>
      );
    }
  }
}

const mapStateToProps = (state: reducerType) => {
  const {
    list,
    totalPrice,
    totalDeliveryPrice,
    deliveryCurrentPrice,
    loading,
    errors,
    orderUser,
    canBay,
  } = state.basket;
  const { currency } = state.currency;
  return {
    list,
    totalPrice,
    currency,
    totalDeliveryPrice,
    deliveryCurrentPrice,
    loading,
    errors,
    orderUser,
    canBay,
  };
};

const mapDispatchToProps = {
  setBasket,
  onBay,
  removeFromBasket: actions.removeFromBasket,
  updateProductCount: actions.updateProductCount,
  setOrderUser: actions.setOrderUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
