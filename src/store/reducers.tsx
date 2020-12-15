import { combineReducers } from "redux";
import { reducer as pizzaList } from "@modules/Pizza/PizzaList/reducer";
import { reducer as pizzaDetail } from "@modules/Pizza/PizzaDetail/reducer";
import { reducer as basket } from "@modules/Basket/reducer";
import { reducer as currency } from "@components/Currency/reducer";
import { reducer as register } from "@modules/Auth/Register/reducer";
import { reducer as login } from "@modules/Auth/Login/reducer";
import { reducer as orderList } from "@modules/OrderList/reducer";

export const reducer = combineReducers({
  pizzaList,
  pizzaDetail,
  basket,
  currency,
  register,
  login,
  orderList,
});

export type reducerType = ReturnType<typeof reducer>;
export default reducer;
