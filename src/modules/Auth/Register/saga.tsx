import { takeEvery, put, call } from "redux-saga/effects";
import { actions, register } from "./reducer";
import { actions as loginActions } from "@modules/Auth/Login/reducer";
import { Loading } from "@components/types";

export function* registerUser(data) {
  yield put(actions.clearErrors());
  const user = data.payload;
  const errors = [];
  if (!user.name) {
    errors.push("The name field is required");
  }
  if (!user.email) {
    errors.push("The email field is required");
  }
  if (user.password !== user.confirm || !user.password) {
    errors.push("Password confirmation error");
  }

  if (errors.length > 0) {
    yield put(actions.addErrors(errors));
  } else {
    yield put(actions.setLoading(Loading.start));
    try {
      const fetchData = yield call(async () => {
        const fetchData = await fetch(`${process.env.HOST}/api/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
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
        yield put(loginActions.loginUser(fetchData.data));
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

export function* registerSaga() {
  yield takeEvery(register, registerUser);
}
