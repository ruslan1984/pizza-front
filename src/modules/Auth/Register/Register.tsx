import React, { Component, FormEvent } from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { Page } from "@components/elements";
import { register } from "./reducer";
import { actions as loginActions } from "@modules/Auth/Login/reducer";
import { Loading, Session } from "@components/types";
import { LogOutBtn } from "./elements";

interface RegisterProps {
  errors: Array<string>;
  loading: Loading;
  session: Session;
  register: () => void;
  logOut: () => void;
}

export class Register extends Component<RegisterProps> {
  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = {
      name: target.querySelector("input[name=name]")!.value,
      email: target.querySelector("input[name=email]")!.value,
      password: target.querySelector("input[name=password]")!.value,
      confirm: target.querySelector("input[name=confirm]")!.value,
    };
    this.props.register(data);
  };
  render() {
    if (this.props.session === Session.noUser) {
      return (
        <Page>
          <Presenter
            onSubmit={this.onSubmit}
            loading={this.props.loading}
            errors={this.props.errors}
          />
        </Page>
      );
    } else {
      return <LogOutBtn onClick={this.props.logOut}>LogOut</LogOutBtn>;
    }
  }
}

const mapStateToProps = (state: reducerType) => {
  const { errors, loading } = state.register;
  const { session } = state.login;
  return {
    errors,
    loading,
    session,
  };
};
const mapDispatchToProps = {
  register,
  logOut: loginActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
