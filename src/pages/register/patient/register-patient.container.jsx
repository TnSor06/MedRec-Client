import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { REGISTER_PATIENT } from "../../../graphql/mutation";
import RegisterPatient from "./register-patient.component";

const RegisterPatientContainer = (props) => {
  const [err, setErr] = useState("");
  return (
    <Mutation
      mutation={REGISTER_PATIENT}
      onError={(err) => {
        if (err.graphQLErrors) {
          setErr(
            err.graphQLErrors.map((error) => {
              return error.message;
            })
          );
        }
        if (err.networkError) {
          setErr(err.networkError.message);
        }
      }}
    >
      {(registerPatient, { loading, error, data }) => {
        if (loading) {
          setErr("");
        }
        return (
          <RegisterPatient
            {...props}
            registerPatient={(args) => {
              registerPatient({
                variables: { ...args },
              });
            }}
            loading={loading}
            error={err}
            data={data}
          ></RegisterPatient>
        );
      }}
    </Mutation>
  );
};

export default RegisterPatientContainer;
