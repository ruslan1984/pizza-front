import { CurrencyType, CurrencyPriceType, Loading } from "@components/types";

export type PizzaListType = {
  id: number;
  name: string;
  img: string;
  price: number;
  currency: string;
  count: number;
  prices: {
    USD: CurrencyType;
    EUR: CurrencyType;
  };
};

export type PizzaListSliceType = {
  list: Array<PizzaListType> | [];
  loading: Loading;
  currency: CurrencyPriceType;
  currentPage: number,
  pageLimit: number,
  pagesCount: number
};
