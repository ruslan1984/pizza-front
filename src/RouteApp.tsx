import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "@modules/Auth/Login/Login";
import Register from "@modules/Auth/Register/Register";
import PizzaList from "@modules/Pizza/PizzaList/PizzaList";
import PizzaDetail from "@modules/Pizza/PizzaDetail/PizzaDetail";
import Basket from "@modules/Basket/Basket";
import OrderList from "@modules/OrderList/OrderList";
export const RouteApp: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={PizzaList} />
      <Route exact path="/orders" component={OrderList} />
      <Route exact path="/basket" component={Basket} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/:id" component={PizzaDetail} />
    </Switch>
  );
};

export default RouteApp;
