import { takeEvery, put, call } from "redux-saga/effects";
import { testSession } from "./reducer";
import { actions as loginAction } from "@modules/Auth/Login/reducer";
import { ls } from "@components/ls";

export function* authSession() {
  const user = yield call(ls.currentUser.get);
  if (user) {
    yield put(loginAction.loginUser(user));
  }
}

export function* authSaga() {
  yield takeEvery(testSession, authSession);
}
