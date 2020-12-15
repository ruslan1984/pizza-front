import React, { Component, FormEvent } from "react";
import { reducerType } from "@store/reducers";
import { connect } from "react-redux";
import SignIn from "./Presenter/SignIn/Presenter";
import LogOut from "./Presenter/LogOut/Presenter";
import { Session } from "@components/types";
import { actions as loginActions } from "@modules/Auth/Login/reducer";
import { testSession } from "./reducer";

interface AuthBlockProps {
  session: Session;
  user: string;
  logOut: () => void;
  testSession: () => void;
}

export class AuthBlock extends Component<AuthBlockProps> {
  componentDidMount() {
    this.props.testSession();
  }

  render() {
    if (this.props.session === Session.noUser) {
      return <SignIn />;
    } else {
      return (
        <LogOut user={this.props.user} onLogOutClick={this.props.logOut} />
      );
    }
  }
}

const mapStateToProps = (state: reducerType) => {
  const { session, user } = state.login;
  return {
    session,
    user: user.name,
  };
};
const mapDispatchToProps = {
  logOut: loginActions.logOut,
  testSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);
