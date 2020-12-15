import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import { Provider } from "react-redux";
import App from "@/App";
import reducer from "@store/reducers";
import { pizzaListSaga } from "@modules/Pizza/PizzaList/saga";
import { pizzaDetailSaga } from "@modules/Pizza/PizzaDetail/saga";
import { basketSaga } from "@modules/Basket/saga";
import { currencySaga } from "@components/Currency/saga";
import { registerSaga } from "@modules/Auth/Register/saga";
import { loginSaga } from "@modules/Auth/Login/saga";
import { orderListSaga } from "@modules/OrderList/saga";
import { authSaga } from "@components/AuthBlock/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield fork(loginSaga);
  yield fork(pizzaListSaga);
  yield fork(pizzaDetailSaga);
  yield fork(basketSaga);
  yield fork(currencySaga);
  yield fork(registerSaga);
  yield fork(orderListSaga);
  yield fork(authSaga);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
