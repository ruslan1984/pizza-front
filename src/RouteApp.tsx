import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export const RouteApp: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          Index
          <hr />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouteApp;
