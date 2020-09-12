import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { REGISTER_MEDICAL_PRACTITIONER } from "../../../graphql/mutation";
import RegisterMedicalPractitioner from "./register-medical-practitioner.component";

const RegisterMedicalPractitionerContainer = (props) => {
  const [err, setErr] = useState("");
  return (
    <Mutation
      mutation={REGISTER_MEDICAL_PRACTITIONER}
      onError={(err) => {
        setErr(
          err.graphQLErrors.map((error) => {
            return error.message;
          })
        );
      }}
    >
      {(registerMedicalPractitioner, { loading, error, data }) => {
        if (loading) {
          setErr("");
        }
        return (
          <RegisterMedicalPractitioner
            {...props}
            registerMedicalPractitioner={(args) => {
              registerMedicalPractitioner({
                variables: { ...args },
              });
            }}
            loading={loading}
            error={err}
            data={data}
          ></RegisterMedicalPractitioner>
        );
      }}
    </Mutation>
  );
};

export default RegisterMedicalPractitionerContainer;
