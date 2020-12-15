import React, { Component } from "react";
import Presenter from "./Presenter";
import { connect } from "react-redux";
import { setList, actions } from "./reducer";
import { Loading } from "@components/types";
import { Page } from "@components/elements";
import { Pagination } from "@components/Pagination/Pagination";
import { reducerType } from "@store/reducers";
import { PizzaListType } from "./types";
import { actions as basketActions } from "@modules/Basket/reducer";

interface OrderListProps {
  list: Array<PizzaListType> | [];
  loading: Loading;
  pagesCount: number;
  currentPage: number;
  setList: () => void;
  setPage: (page: number) => void;
}

export class OrderList extends Component<OrderListProps> {
  async componentDidMount() {
    await this.props.setPage(1);
  }
  onToBacket = (id: number, count: number) => {
    const data = this.props.list.filter((item) => item.id == id);
    this.props.addToBasket({ ...data[0], count });
  };
  render() {
    return (
      <Page loading={this.props.loading}>
        <Presenter onToBacket={this.onToBacket} list={this.props.list} />
        <Pagination
          currentPage={this.props.currentPage}
          pageCount={this.props.pagesCount}
          onPageClick={this.props.setPage}
        />
      </Page>
    );
  }
}

const mapStateToProps = (state: reducerType) => {
  const { list, loading, pagesCount, currentPage } = state.orderList;
  return {
    list,
    loading,
    pagesCount,
    currentPage,
  };
};

const mapDispatchToProps = {
  setList,
  setPage: actions.setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
