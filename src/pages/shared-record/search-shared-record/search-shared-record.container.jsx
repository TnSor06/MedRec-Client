import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import SearchSharedRecord from "./search-shared-record.component";

const SearchSharedRecordContainer = (props) => {
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
    query ViewSharedRecord(
      $caseId: String!
      $recordId: String
      $ToDate: String
      $FromDate: String
    ) {
      viewSharedRecord(
        caseId: $caseId
        recordId: $recordId
        ToDate: $ToDate
        FromDate: $FromDate
      ) {
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
        setRecords(data.viewSharedRecord);
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
          <SearchSharedRecord
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
          ></SearchSharedRecord>
        );
      }}
    </Query>
  );
};

export default SearchSharedRecordContainer;
