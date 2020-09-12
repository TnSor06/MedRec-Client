import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { REGISTER_DATABASE_ADMIN } from "../../../graphql/mutation";
import RegisterDatabaseAdmin from "./register-database-admin.component";

const RegisterDatabaseAdminContainer = (props) => {
  const [err, setErr] = useState("");
  return (
    <Mutation
      mutation={REGISTER_DATABASE_ADMIN}
      onError={(err) => {
        setErr(
          err.graphQLErrors.map((error) => {
            return error.message;
          })
        );
      }}
    >
      {(registerDatabaseAdmin, { loading, error, data }) => {
        if (loading) {
          setErr("");
        }
        return (
          <RegisterDatabaseAdmin
            {...props}
            registerDatabaseAdmin={(args) => {
              registerDatabaseAdmin({
                variables: { ...args },
              });
            }}
            loading={loading}
            error={err}
            data={data}
          ></RegisterDatabaseAdmin>
        );
      }}
    </Mutation>
  );
};

export default RegisterDatabaseAdminContainer;
