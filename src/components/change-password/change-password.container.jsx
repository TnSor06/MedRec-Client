import React, { useContext, useState } from "react";
import ChangePassword from "./change-password.component";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const ChangePasswordContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const UPDATE_PASSWORD = gql`
  mutation update${currentUser.role}($password: String!) {
    update${currentUser.role}(data: { password: $password }) 
  }
`;
  return (
    <Mutation
      mutation={UPDATE_PASSWORD}
      onError={(err) => {
        setErr(
          err.graphQLErrors.map((error) => {
            return error.message;
          })
        );
      }}
    >
      {(updateFn, { loading, error, data }) => {
        return (
          <ChangePassword
            {...props}
            loading={loading}
            data={data}
            error={err}
            update={(password) => {
              updateFn({
                variables: { password },
              });
            }}
          ></ChangePassword>
        );
      }}
    </Mutation>
  );
};

export default ChangePasswordContainer;
