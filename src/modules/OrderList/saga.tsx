import { takeEvery, put, call, select } from "redux-saga/effects";
import { actions, setList } from "./reducer";
import { Loading } from "@components/types";

export function* setOrderList(data) {
  const page: number = data.payload || 1;
  const state = yield select();
  const { user } = state.login;
  if (user.id) {
    yield put(actions.setLoading(Loading.start));
    try {
      const fetchData = yield call(() => {
        return fetch(`${process.env.HOST}/api/order/${user.id}?page=${page}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }).then((res) => res.json());
      });
      yield put(actions.fetch(fetchData.data));
      yield put(actions.setPageCount(fetchData.pagesCount));
    } catch (err) {
      console.error(err);
    } finally {
      yield put(actions.setLoading(Loading.ok));
    }
  }
}

export function* orderListSaga() {
  yield takeEvery(setList, setOrderList);
  yield takeEvery(actions.setPage, setOrderList);
}
