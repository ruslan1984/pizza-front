import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyPriceType } from "@components/types";
import { CurrencySliceType } from "./types";

export const defaultState: CurrencySliceType = {
  currency: "USD",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState: defaultState,
  reducers: {
    setCurrency: (state, { payload }: PayloadAction<CurrencyPriceType>) => {
      return { ...state, currency: payload };
    },
  },
});
export const { actions, reducer } = currencySlice;
