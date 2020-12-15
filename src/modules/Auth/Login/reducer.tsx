import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { LoginSliceType } from "./types";
import { Loading, Session, UserType } from "@components/types";

export const defaultState: LoginSliceType = {
  user: {},
  errors: [],
  session: Session.noUser,
  loading: Loading.none,
};

export const login = createAction("login");
export const loginSlice = createSlice({
  name: "Login",
  initialState: defaultState,
  reducers: {
    addErrors: (state, { payload }: PayloadAction<Array<string>>) => {
      const errors = [...state.errors, ...payload];
      return { ...state, errors };
    },
    clearErrors: (state) => {
      return { ...state, errors: [] };
    },
    loginUser: (state, { payload }: PayloadAction<UserType>) => {
      return { ...state, user: payload, session: Session.withUser };
    },
    logOut: (state) => {
      return { ...state, user: {}, session: Session.noUser };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
  },
});

export const { actions, reducer } = loginSlice;
