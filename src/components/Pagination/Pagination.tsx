import React, { Component, FormEvent } from "react";
import Presenter from "./Presenter";
import { CurrencyPriceType } from "@components/types";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

export class Pagination extends Component<PaginationProps> {
  onPageClick = (e: FormEvent) => {
    const target = e.target as HTMLDivElement;
    const page: number = target.id;
    this.props.onPageClick(page);
  };
  render() {
    if (this.props.pageCount > 1) {
      return (
        <Presenter
          pageCount={this.props.pageCount}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
        />
      );
    } else {
      return "";
    }
  }
}
export default Pagination;
