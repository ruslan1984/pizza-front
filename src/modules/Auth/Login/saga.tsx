import { takeEvery, put, call } from "redux-saga/effects";
import { actions, login } from "./reducer";
import { actions as basketActions } from "@modules/Basket/reducer";
import { actions as ordersActions } from "@modules/OrderList/reducer";

import { Loading, UserType } from "@components/types";
import { ls } from "@components/ls";

export function* loginUser(data) {
  yield put(actions.clearErrors());
  const user: UserType = data.payload;
  const errors = [];
  if (!user.name) {
    errors.push("The name field is required");
  }
  if (!user.password) {
    errors.push("Password confirmation error");
  }

  if (errors.length > 0) {
    yield put(actions.addErrors(errors));
  } else {
    yield put(actions.setLoading(Loading.start));

    try {
      const fetchData = yield call(async () => {
        const fetchData = await fetch(`${process.env.HOST}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            name: user.name,
            password: user.password,
          }),
        });
        const data = await fetchData.json();
        const status = await fetchData.status;
        return {
          data,
          status,
        };
      });
      if (fetchData.status === 200) {
        yield put(actions.loginUser(fetchData.data));
        yield call(ls.currentUser.set, fetchData.data);
      } else {
        yield put(actions.addErrors(fetchData.data));
      }
    } catch (err) {
      console.error(err);
    } finally {
      yield put(actions.setLoading(Loading.ok));
    }
  }
}

export function* logOut() {
  yield call(ls.currentUser.clear);
  yield put(basketActions.clearOrderUser());
  yield put(ordersActions.clearOrders());
}
export function* loginSaga() {
  yield takeEvery(login, loginUser);
  yield takeEvery(actions.logOut, logOut);
}
