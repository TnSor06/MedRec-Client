import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import CreateRecord from "./create-record.component";

const CreateRecordContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const mutation = gql`
    mutation CreatePatientRecord(
      $case: String!
      $onArrival: String!
      $diagnosis: String!
      $Tx: String!
      $reportSuggestions: String
      $cevsSp: Int!
      $cevsDp: Int!
      $cePr: Int!
      $ceRr: Int!
      $ceHeight: Int!
      $ceWeight: Int!
      $diagnosisAfterReport: String
      $medication: String!
      $advice: String!
      $query: String!
      $followUpObservations: String!
    ) {
      createPatientRecord(
        data: {
          case: $case
          onArrival: $onArrival
          diagnosis: $diagnosis
          Tx: $Tx
          reportSuggestions: $reportSuggestions
          cevsSp: $cevsSp
          cevsDp: $cevsDp
          cePr: $cePr
          ceRr: $ceRr
          ceHeight: $ceHeight
          ceWeight: $ceWeight
          diagnosisAfterReport: $diagnosisAfterReport
          medication: $medication
          advice: $advice
          query: $query
          followUpObservations: $followUpObservations
        }
      ) {
        recordId
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
          <CreateRecord
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
          ></CreateRecord>
        );
      }}
    </Mutation>
  );
};

export default CreateRecordContainer;
