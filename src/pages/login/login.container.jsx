import React, { useState, useContext } from "react";
import { Mutation, graphql } from "react-apollo";

import { LOGIN, ADD_CURRENT_USER } from "../../graphql/mutation";
import Login from "./login.component";
import { AUTH_TOKEN } from "../../constants";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";

const LoginContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  if (currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Mutation
      mutation={LOGIN}
      onCompleted={(data) => {
        const { token, user } = data.login;
        localStorage.setItem(AUTH_TOKEN, token);
        props.history.push("/");
        props.addCurrentUser({
          variables: {
            user,
          },
        });
        setCurrentUser(user);
      }}
      onError={(err) => {
        setErr(
          err.graphQLErrors.map((error) => {
            return error.message;
          })
        );
      }}
    >
      {(login, { loading }) => {
        if (loading) {
          setErr("");
        }
        return (
          <Login
            {...props}
            currentUser={currentUser}
            login={(email, password) => {
              login({
                variables: { email, password },
              });
            }}
            error={err}
            isLoading={loading}
          ></Login>
        );
      }}
    </Mutation>
  );
};

export default graphql(ADD_CURRENT_USER, { name: "addCurrentUser" })(
  LoginContainer
);
