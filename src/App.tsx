import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteApp } from "./RouteApp";
import { Header } from "@components/Site/Header/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <RouteApp />
    </BrowserRouter>
  );
};

export default App;
