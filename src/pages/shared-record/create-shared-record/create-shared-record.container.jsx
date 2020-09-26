import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import CreateSharedRecord from "./create-shared-record.component";

const CreateSharedRecordContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const recordId = params.record;
  const mutation = gql`
    mutation CreateSharedRecord($record: String!, $receiver: String!) {
      createSharedRecord(data: { receiver: $receiver, record: $record }) {
        sharedRecordId
        HL7
        record {
          recordId
          visitNo
          createdAt
        }
        case {
          caseId
          createdAt
          updatedAt
          noOfVisits
          icdCode {
            commonName
          }
          icdSubCode {
            scientificName
          }
        }
        sender {
          mpId
          user {
            firstName
            lastName
            email
          }
        }
        receiver {
          mpId
          user {
            firstName
            lastName
            email
          }
        }
        sharedAt
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
          setErr(error.networkEdatarror.message);
        }
      }}
    >
      {(createFn, { loading, error, data }) => {
        return (
          <CreateSharedRecord
            {...props}
            loading={loading}
            error={err}
            create={(receiver) => {
              createFn({
                variables: {
                  record: recordId,
                  receiver,
                },
              });
            }}
            data={data}
          ></CreateSharedRecord>
        );
      }}
    </Mutation>
  );
};

export default CreateSharedRecordContainer;
