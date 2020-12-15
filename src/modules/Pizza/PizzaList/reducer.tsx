import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { Loading, CurrencyPriceType } from "@components/types";
import { PizzaListSliceType, PizzaListType } from "./types";

export const defaultState: PizzaListSliceType = {
  list: [],
  loading: Loading.ok,
  currentPage: 1,
  pageLimit: 2,
  pagesCount: 1,
};

export const setList = createAction("setList");
export const pizzaListSlice = createSlice({
  name: "pizzaList",
  initialState: defaultState,
  reducers: {
    fetch: (state, { payload }: PayloadAction<Array<PizzaListType>>) => {
      return { ...state, list: payload };
    },
    setCurrency: (state, { payload }: PayloadAction<CurrencyPriceType>) => {
      const list = state.list.map((item) => {
        const currentData = { ...item };
        const prices = { ...currentData.prices };
        const current = { ...prices[payload] };
        return {
          ...item,
          price: current.price,
          currency: current.currency,
        };
      });
      return { ...state, list };
    },

    setPage: (state, { payload }: PayloadAction<number>) => {
      return { ...state, currentPage: payload };
    },
    setPageCount: (state, { payload }: PayloadAction<number>) => {
      return { ...state, pagesCount: payload };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = pizzaListSlice;
