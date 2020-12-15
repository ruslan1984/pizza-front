import { takeEvery, put, call, select } from "redux-saga/effects";
import { actions, setDetail } from "./reducer";
import { Loading } from "@components/types";

export function* setPizzaDetail(data: { payload: number }) {
  const id = data.payload;
  try {
    const state = yield select();
    yield put(actions.setLoading(Loading.start));
    const data = yield call(() => {
      return fetch(`${process.env.HOST}/api/pizza/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((res) => res.json());
    });

    yield put(actions.fetch(data));
    if (state.currency.currency !== data.currency) {
      yield put(actions.setCurrency(state.currency.currency));
    }
  } finally {
    yield put(actions.setLoading(Loading.ok));
  }
}

export function* pizzaDetailSaga() {
  yield takeEvery(setDetail, setPizzaDetail);
}
