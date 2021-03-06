import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import SearchRecord from "./search-record.component";

const SearchRecordContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const caseId = params.case;
  const [recordId, setRecordId] = useState("");
  const [ToDate, setToDate] = useState("");
  const [FromDate, setFromDate] = useState("");
  const [err, setErr] = useState("");
  const [records, setRecords] = useState([]);
  const query = gql`
    query ViewPatientRecord(
      $caseId: String!
      $recordId: String
      $ToDate: String
      $FromDate: String
    ) {
      viewPatientRecord(
        caseId: $caseId
        recordId: $recordId
        ToDate: $ToDate
        FromDate: $FromDate
      ) {
        id
        recordId
        createdAt
        visitNo
        case {
          noOfVisits
          updatedAt
          icdCode {
            commonName
          }
          icdSubCode {
            scientificName
          }
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
        caseId,
        recordId,
        ToDate,
        FromDate,
      }}
      onCompleted={(data) => {
        setRecords(data.viewPatientRecord);
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
          <SearchRecord
            {...props}
            recordId={recordId}
            setRecordId={setRecordId}
            ToDate={ToDate}
            setToDate={setToDate}
            FromDate={FromDate}
            setFromDate={setFromDate}
            records={records}
            loading={loading}
            error={err}
          ></SearchRecord>
        );
      }}
    </Query>
  );
};

export default SearchRecordContainer;
