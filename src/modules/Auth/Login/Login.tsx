import { Loading } from "@components/types";
import React, { Component, FormEvent } from "react";
import { connect } from "react-redux";
import Presenter from "./Presenter";
import { actions, login } from "./reducer";
import { Session } from "@components/types";
import { LogOutBtn } from "./elements";

interface LoginProps {
  errors: Array<string>;
  loading: Loading.none;
  session: Session;
  logOut: () => void;
  onSubmit: (e: FormEvent) => void;
  login: () => void;
}
export class Login extends Component<LoginProps> {
  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = {
      name: target.querySelector("input[name=name]")!.value,
      password: target.querySelector("input[name=password]")!.value,
    };
    this.props.login(data);
  };
  render() {
    if (this.props.session === Session.noUser) {
      return (
        <Presenter
          loading={this.props.loading}
          errors={this.props.errors}
          onSubmit={this.onSubmit}
        />
      );
    } else {
      return <LogOutBtn onClick={this.props.logOut}>LogOut</LogOutBtn>;
    }
  }
}

const mapStateToProps = (state: reducerType) => {
  const { errors, session, loading } = state.login;
  return {
    errors,
    session,
    loading,
  };
};
const mapDispatchToProps = {
  login,
  logOut: actions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
