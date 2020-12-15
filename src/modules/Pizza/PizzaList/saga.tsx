import { takeEvery, put, call, select } from "redux-saga/effects";
import { actions, setList } from "./reducer";
import { Loading } from "@components/types";
import { actions as currencyActions } from "@components/Currency/reducer";

export function* setPizzaList(data) {
  const page: number = data.payload || 1;
  const state = yield select();
  yield put(actions.setLoading(Loading.start));
  try {
    const fetchData = yield call(() => {
      return fetch(`${process.env.HOST}/api/pizza?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((res) => res.json());
    });
    yield put(actions.fetch(fetchData.data));
    yield put(actions.setPageCount(fetchData.pagesCount));
    if (state.currency.currency !== fetchData.currency) {
      yield put(actions.setCurrency(state.currency.currency));
    }
  } catch (err) {
    console.error(err);
  } finally {
    yield put(actions.setLoading(Loading.ok));
  }
}

export function* setCurrency(data) {
  yield put(actions.setCurrency(data.payload));
}

export function* pizzaListSaga() {
  yield takeEvery(setList, setPizzaList);
  yield takeEvery(currencyActions.setCurrency, setCurrency);
  yield takeEvery(actions.setPage, setPizzaList);
}
