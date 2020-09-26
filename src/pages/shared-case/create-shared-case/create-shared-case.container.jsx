import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import CreateSharedCase from "./create-shared-case.component";

const CreateSharedCaseContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const caseId = params.case;
  const mutation = gql`
    mutation CreateSharedCase($case: String!, $receiver: String!) {
      createSharedCase(data: { receiver: $receiver, case: $case }) {
        sharedCaseId
        HL7
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
          <CreateSharedCase
            {...props}
            loading={loading}
            error={err}
            create={(receiver) => {
              createFn({
                variables: {
                  case: caseId,
                  receiver,
                },
              });
            }}
            data={data}
          ></CreateSharedCase>
        );
      }}
    </Mutation>
  );
};

export default CreateSharedCaseContainer;
