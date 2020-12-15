import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { Loading } from "@components/types";
import { RegisterSliceType } from "./types";

export const defaultState: RegisterSliceType = {
  errors: [],
  loading: Loading.none,
};
export const register = createAction("register");
export const registerSlice = createSlice({
  name: "register",
  initialState: defaultState,
  reducers: {
    addErrors: (state, { payload }: PayloadAction<Array<string>>) => {
      const errors = [...state.errors, ...payload];
      return { ...state, errors };
    },
    clearErrors: (state) => {
      return { ...state, errors: [] };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = registerSlice;
