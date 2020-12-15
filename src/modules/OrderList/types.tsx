import { CurrencyType, CurrencyPriceType, Loading } from "@components/types";

export type OrderListType = {
  id: number;
  name: string;
  img: string;
  price: number;
  currency: string;
  count: number;
  orderData: string;
};

export type OrderListSliceType = {
  list: Array<OrderListType> | [];
  loading: Loading;
  currentPage: number,
  pageLimit: number,
  pagesCount: number
};
