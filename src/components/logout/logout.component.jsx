import React, { useContext } from "react";
import { AUTH_TOKEN, USER_DATA } from "../../constants";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import { graphql } from "react-apollo";
import { ADD_CURRENT_USER } from "../../graphql/mutation";

const Logout = (props) => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_DATA);
  setCurrentUser(null);
  props.addCurrentUser({
    variables: {
      user: {
        __typename: "",
        id: "",
        firstName: "",
        lastName: "",
        role: "",
        isAdmin: "",
        verified: "",
      },
    },
  });
  if (!currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return <div>Logging out...</div>;
};

export default graphql(ADD_CURRENT_USER, { name: "addCurrentUser" })(Logout);
