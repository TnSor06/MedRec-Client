import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import SearchSharedCase from "./search-shared-case.component";

const SearchSharedCaseContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const patientId = params.id;
  const [caseId, setCaseId] = useState("");
  const [ToDate, setToDate] = useState("");
  const [FromDate, setFromDate] = useState("");
  const [err, setErr] = useState("");
  const [cases, setCases] = useState([]);
  const query = gql`
    query ViewSharedCase(
      $patientId: String!
      $caseId: String
      $ToDate: String
      $FromDate: String
    ) {
      viewSharedCase(
        patientId: $patientId
        caseId: $caseId
        ToDate: $ToDate
        FromDate: $FromDate
      ) {
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
  if (!currentUser) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Query
      query={query}
      variables={{
        patientId,
        caseId,
        ToDate,
        FromDate,
      }}
      onCompleted={(data) => {
        setCases(data.viewSharedCase);
      }}
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
      {({ loading }) => {
        if (loading) {
          setErr("");
        }
        return (
          <SearchSharedCase
            {...props}
            caseId={caseId}
            setCaseId={setCaseId}
            ToDate={ToDate}
            setToDate={setToDate}
            FromDate={FromDate}
            setFromDate={setFromDate}
            cases={cases}
            loading={loading}
            error={err}
          ></SearchSharedCase>
        );
      }}
    </Query>
  );
};

export default SearchSharedCaseContainer;
