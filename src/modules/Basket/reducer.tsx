import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { Loading, CurrencyPriceType } from "@components/types";
import { BasketSliceType, BasketItemType, OrderUserType } from "./types";

export const defaultState: BasketSliceType = {
  list: {},
  loading: Loading.none,
  totalPrice: 0,
  errors: [],
  deliveryPrice: 50,
  deliveryCurrentPrice: 50,
  totalDeliveryPrice: 0,
  orderUser: {
    name: "",
    email: "",
    address: "",
  },
  canBay: false,
};

export const setBasket = createAction("setBasket");
export const onBay = createAction("onBay");
export const basketSlice = createSlice({
  name: "basket",
  initialState: defaultState,
  reducers: {
    fetch: (state, { payload }: PayloadAction<Array<BasketItemType>>) => {
      return { ...state, list: payload };
    },
    setLoading: (state, { payload }: PayloadAction<Loading>) => {
      return { ...state, loading: payload };
    },
    addToBasket: (state, { payload }: PayloadAction<BasketItemType>) => {
      const id: number = payload.id;
      let list = { ...state.list };
      if (list[id]) {
        const data = { ...state.list[id] };
        data.count = data.count + payload.count;
        list[id] = data;
      } else {
        const newData = {};
        newData[id] = { ...payload };
        list = { ...list, ...newData };
      }
      return { ...state, list };
    },
    removeFromBasket: (state, { payload }: PayloadAction<number>) => {
      const list = { ...state.list };
      delete list[payload];
      return { ...state, list };
    },
    updateProductCount: (
      state,
      { payload }: PayloadAction<{ id: number; count: number }>
    ) => {
      const id = payload.id;
      const count = payload.count;
      const list = { ...state.list };
      const data = { ...state.list[id] };
      data.count = count;
      list[id] = data;
      return { ...state, list };
    },
    setCurrency: (state, { payload }: PayloadAction<CurrencyPriceType>) => {
      const list = { ...state.list };
      const listKeys = Object.keys(list);
      if (listKeys.length > 0) {
        let deliveryCurrentPrice;
        for (const key in list) {
          const currentData = { ...list[key] };
          const prices = { ...currentData.prices };
          const current = { ...prices[payload] };
          list[key] = {
            ...currentData,
            price: current.price,
            currency: current.currency,
          };
          if (listKeys[0] == key) {
            deliveryCurrentPrice = state.deliveryPrice * current.cource;
          }
        }
        return { ...state, list, deliveryCurrentPrice };
      }
      return { ...state };
    },
    updateTotalPrice: (state) => {
      const list = { ...state.list };
      let totalPrice = 0;
      for (const key in list) {
        totalPrice += list[key].price * list[key].count;
      }
      const totalDeliveryPrice = state.deliveryCurrentPrice + totalPrice;
      return { ...state, totalPrice, totalDeliveryPrice };
    },
    clearBasket: (state) => {
      return { ...state, list: {} };
    },
    addErrors: (state, { payload }: PayloadAction<Array<string>>) => {
      const errors = [...state.errors, ...payload];
      return { ...state, errors };
    },
    clearErrors: (state) => {
      return { ...state, errors: [] };
    },
    setOrderUser: (state, { payload }: PayloadAction<OrderUserType>) => {
      const orderUser = { ...state.orderUser, ...payload };
      const canBay = orderUser.name && orderUser.email && orderUser.address;
      return { ...state, orderUser, canBay };
    },
    clearOrderUser: (state) => {
      return { ...state, orderUser: {}, canBay: false };
    },
  },
});
export const { actions, reducer } = basketSlice;
