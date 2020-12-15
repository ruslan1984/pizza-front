import React, { FC, FormEvent } from "react";
import { PaginationList, PaginationItem } from "./elements";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageClick: (e: FormEvent) => void;
}

export const Presenter: FC<PaginationProps> = (props: PaginationProps) => {
  const pageList = () => {
    let pages: Array<JSX.Element> = [];
    for (let i = 1; i <= props.pageCount; i++) {
      const item = (
        <PaginationItem
          key={i}
          active={props.currentPage == i}
          id={i}
          onClick={props.onPageClick}
        >
          {i}
        </PaginationItem>
      );
      pages = [...pages, item];
    }
    return pages;
  };
  return <PaginationList>{pageList()}</PaginationList>;
};

export default Presenter;
