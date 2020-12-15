import { takeEvery, put } from "redux-saga/effects";
import { actions } from "./reducer";
import { actions as pizzaDetailAction } from "@modules/Pizza/PizzaDetail/reducer";
import { actions as pizzaListAction } from "@modules/Pizza/PizzaDetail/reducer";
import { actions as basketAction } from "@modules/Basket/reducer";

export function* setCurrency(data) {
  yield put(pizzaDetailAction.setCurrency(data.payload));
  yield put(pizzaListAction.setCurrency(data.payload));
  yield put(basketAction.setCurrency(data.payload));
}

export function* currencySaga() {
  yield takeEvery(actions.setCurrency, setCurrency);
}
