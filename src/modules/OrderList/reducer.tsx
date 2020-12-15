import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { Loading, CurrencyPriceType } from "@components/types";
import { OrderListSliceType, OrderListType } from "./types";

export const defaultState: OrderListSliceType = {
  list: [],
  loading: Loading.none,
  currentPage: 1,
  pageLimit: 8,
  pagesCount: 1,
};

export const setList = createAction("setList");
export const orderListSlice = createSlice({
  name: "orderList",
  initialState: defaultState,
  reducers: {
    fetch: (state, { payload }: PayloadAction<Array<OrderListType>>) => {
      return { ...state, list: payload };
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      return { ...state, currentPage: payload };
    },
    setPageCount: (state, { payload }: PayloadAction<number>) => {
      return { ...state, pagesCount: payload };
    },
    clearOrders: (state) => {
      return { ...state, list: [], pagesCount: 1 };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = orderListSlice;
