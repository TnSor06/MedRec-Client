import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import CreateCase from "./create-case.component";

const CreateCaseContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const mutation = gql`
    mutation CreatePatientCase(
      $patientId: String!
      $icdCode: String!
      $icdSubCode: String!
      $HPC: String!
      $MoI: String
      $DandV: String
      $clinicalNote: String!
      $diagnosisType: DiagnosisType!
      $currentClinicalStatus: Boolean!
    ) {
      createPatientCase(
        data: {
          patientId: $patientId
          icdCode: $icdCode
          icdSubCode: $icdSubCode
          HPC: $HPC
          MoI: $MoI
          DandV: $DandV
          clinicalNote: $clinicalNote
          diagnosisType: $diagnosisType
          currentClinicalStatus: $currentClinicalStatus
        }
      ) {
        caseId
      }
    }
  `;
  if (!currentUser || currentUser.role !== "MedicalPractitioner") {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Mutation
      mutation={mutation}
      onError={(error) => {
        if (error && error.graphQLErrors) {
          setErr(
            error.graphQLErrors.map((each) => {
              return each.message;
            })
          );
        } else if (error && error.networkError) {
          setErr(error.networkError.message);
        }
      }}
    >
      {(createFn, { loading, error, data }) => {
        return (
          <CreateCase
            {...props}
            loading={loading}
            error={err}
            create={(data) => {
              createFn({
                variables: {
                  ...data,
                },
              });
            }}
            data={data}
          ></CreateCase>
        );
      }}
    </Mutation>
  );
};

export default CreateCaseContainer;
