import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { PizzaDetailType, PizzaDetailSliceType } from "./types";
import { CurrencyPriceType } from "@components/types";
import { Loading } from "@components/types";

export const defaultState: PizzaDetailSliceType = {
  data: {},
  currency: "USD",
  loading: Loading.none,
};

export const setDetail = createAction("setDetail");
export const pizzaDetailSlice = createSlice({
  name: "pizzaDetail",
  initialState: defaultState,
  reducers: {
    fetch: (state, { payload }: PayloadAction<PizzaDetailType>) => {
      return { ...state, data: payload };
    },
    setCurrency: (state, { payload }: PayloadAction<CurrencyPriceType>) => {
      const currency = payload;
      const currentData = { ...state.data };
      const prices = { ...currentData.prices };
      const current = { ...prices[currency] };
      const data = {
        ...state.data,
        price: current.price,
        currency: current.currency,
      };
      return { ...state, data, currency };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = pizzaDetailSlice;
