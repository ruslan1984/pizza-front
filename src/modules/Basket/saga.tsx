import { takeEvery, select, put, call } from "redux-saga/effects";
import { actions, setBasket, onBay } from "./reducer";
import { actions as loginActions } from "@modules/Auth/Login/reducer";
import { ls } from "@components/ls";
import { Loading, Session } from "@components/types";

export function* setBasketList() {
  const state = yield select();
  const { user } = state.login;
  const data = yield call(ls.basket.get, user!.name);
  yield put(actions.fetch(data.list));
  if (state.currency.currency !== data.currency) {
    yield put(actions.setCurrency(state.currency.currency));
  }
  if (user) {
    yield put(actions.setOrderUser(user));
  }
}

export function* updateBasket() {
  const state = yield select();
  const { list } = state.basket;
  const { user } = state.login;
  yield call(ls.basket.set.list, list, user!.name);
  yield put(actions.updateTotalPrice());
}
export function* updateTotalPrice() {
  yield put(actions.updateTotalPrice());
}
export function* bayBasket() {
  const state = yield select();
  yield put(actions.clearErrors());
  const { user } = state.login;
  const errors = [];
  const { list, orderUser } = state.basket;
  if (!orderUser.name) {
    errors.push("The name field is required");
  }
  if (!orderUser.email) {
    errors.push("The email field is required");
  }
  if (!orderUser.address) {
    errors.push("The address field is required");
  }
  const { session } = state.login;

  if (errors.length > 0) {
    yield put(actions.addErrors(errors));
  } else {
    if (session == Session.withUser) {
      yield put(actions.setLoading(Loading.start));
      try {
        const fetchData = yield call(async () => {
          const bodyData = JSON.stringify({
            userId: user.id,
            list: list,
          });
          const fetchOrder = await fetch(`${process.env.HOST}/api/order`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: bodyData,
          });
          const data = await fetchOrder.json();
          const status = await fetchOrder.status;
          return {
            data,
            status,
          };
        });

        if (fetchData.status == 200) {
          yield put(actions.clearBasket());
        } else {
          yield put(actions.addErrors(["Server error"]));
        }
      } catch (err) {
        console.error(err);
      } finally {
        yield put(actions.setLoading(Loading.ok));
      }
    } else {
      yield put(actions.clearBasket());
    }
  }
}

export function* basketSaga() {
  yield takeEvery(setBasket, setBasketList);
  yield takeEvery(loginActions.logOut, setBasketList);
  yield takeEvery(actions.addToBasket, updateBasket);
  yield takeEvery(actions.removeFromBasket, updateBasket);
  yield takeEvery(actions.updateProductCount, updateBasket);
  yield takeEvery(actions.clearBasket, updateBasket);
  yield takeEvery(actions.setCurrency, updateTotalPrice);
  yield takeEvery(onBay, bayBasket);
}
