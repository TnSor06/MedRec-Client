import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import SearchCase from "./search-case.component";

const SearchCaseContainer = (props) => {
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
    query ViewPatientCase(
      $patientId: String!
      $caseId: String
      $ToDate: String
      $FromDate: String
    ) {
      viewPatientCase(
        patientId: $patientId
        caseId: $caseId
        ToDate: $ToDate
        FromDate: $FromDate
      ) {
        id
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
        setCases(data.viewPatientCase);
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
          <SearchCase
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
          ></SearchCase>
        );
      }}
    </Query>
  );
};

export default SearchCaseContainer;
