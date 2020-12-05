import React, { FC } from "react";
import { Input, Button } from "@components/elements";
import { Link } from "react-router-dom";

export const Presenter: FC = () => {
  return (
    <>
      <h1>Авторизация</h1>
      <form action="">
        <div>
          <Input placeholder="Логин" />
        </div>
        <div>
          <Input type="password" placeholder="Пароль" />
        </div>
        <Button>Вход</Button>
      </form>
      <Link to="register">регистрация</Link>
    </>
  );
};

export default Presenter;
