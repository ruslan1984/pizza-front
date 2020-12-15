import React, { FC, FormEvent } from "react";
import { Form } from "@components/elements";
import {
  InputAuth,
  BtnAuth,
  TitleAuth,
  ErrorItem,
  ErrorBlock,
} from "@modules/Auth/elements";

import { RegisterBlock } from "./elements";
import { Link } from "react-router-dom";
import { Loading } from "@components/types";

interface LoginProps {
  errors: Array<string>;
  loading: Loading;
  onSubmit: (e: FormEvent) => void;
}

export const Presenter: FC<LoginProps> = (props: LoginProps) => {
  return (
    <>
      <TitleAuth>Sign In</TitleAuth>
      <Form action="" onSubmit={props.onSubmit}>
        <label>
          <InputAuth name="name" required placeholder="login" />
        </label>
        <label>
          <InputAuth
            name="password"
            required
            type="password"
            placeholder="password"
          />
        </label>
        <BtnAuth loading={props.loading}>Вход</BtnAuth>
        <RegisterBlock>
          <Link to="register">register</Link>
        </RegisterBlock>
        <ErrorBlock>
          {(() => {
            return props.errors.map((item, id) => {
              return <ErrorItem key={id}>{item}</ErrorItem>;
            });
          })()}
        </ErrorBlock>
      </Form>
    </>
  );
};

export default Presenter;
