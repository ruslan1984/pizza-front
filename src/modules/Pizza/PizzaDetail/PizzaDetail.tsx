import React, { Component } from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { reducerType } from "@store/reducers";
import { setDetail } from "./reducer";
import { actions as basketActions } from "@modules/Basket/reducer";
import { PizzaDetailType } from "./types";
import { Loading } from "@components/types";

interface PizzaDetailProps {
  data: PizzaDetailType;
  loading: Loading;
  setDetail: () => void;
  addToBasket: (data: PizzaDetailType) => void;
}

export class PizzaDetail extends Component<PizzaDetailProps> {
  state = {
    currentPrice: 0,
    currentCurrency: "USD",
  };
  async componentDidMount() {
    const id: number = this.props.match.params.id;
    await this.props.setDetail(id);
  }

  onToBacket = (count: number) => {
    const data = { ...this.props.data, count };
    this.props.addToBasket(data);
  };
  render() {
    return (
      <Presenter
        loading={this.props.loading}
        {...this.props.data}
        onToBacket={this.onToBacket}
      />
    );
  }
}

const mapStateToProps = (state: reducerType) => {
  const { data, loading } = state.pizzaDetail;
  return {
    data,
    loading,
  };
};

const mapDispatchToProps = {
  addToBasket: basketActions.addToBasket,
  setDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetail);
