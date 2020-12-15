import React, { FC, FormEvent } from "react";
import { Form } from "@components/elements";
import {
  InputAuth,
  BtnAuth,
  TitleAuth,
  ErrorItem,
  ErrorBlock,
} from "@modules/Auth/elements";
import { Loading } from "@components/types";

interface RegistrationProps {
  errors: Array<string>;
  loading: Loading;
  onSubmit: (e: FormEvent) => void;
}

export const Presenter: FC<RegistrationProps> = (props: RegistrationProps) => {
  return (
    <>
      <TitleAuth>Register</TitleAuth>
      <Form action="" onSubmit={props.onSubmit}>
        <div>
          <InputAuth name="name" required placeholder="name" />
        </div>
        <div>
          <InputAuth
            name="email"
            required
            pattern="[^@\s]+@[^@\s]+"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <InputAuth
            name="password"
            required
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <InputAuth
            name="confirm"
            required
            type="password"
            placeholder="confirm password"
          />
        </div>
        <BtnAuth loading={props.loading}>Register</BtnAuth>
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
