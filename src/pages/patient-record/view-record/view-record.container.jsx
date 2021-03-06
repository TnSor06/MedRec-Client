import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../../components/spinner/spinner.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import ViewRecord from "./view-record.component";

const ViewRecordContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const caseId = params.case;
  const recordId = params.record;
  const [records, setRecords] = useState([]);
  const query = gql`
    query ViewPatientRecord($recordId: String!, $caseId: String!) {
      viewPatientRecord(recordId: $recordId, caseId: $caseId) {
        id
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
        recordId
        medicalPractitioner {
          id
          user {
            firstName
            middleName
            lastName
            sex
            dob
            email
            verified
          }
          mpId
          address
          clinicAddress
          degree
          field
          hospital {
            hospitalId
            name
            address
            district
            pincode {
              pincode
              region
            }
            country {
              countryCode
              countryName
            }
          }
          registeredAt
        }
        visitNo
        onArrival
        diagnosis
        Tx
        reportSuggestions
        cevsSp
        cevsDp
        cePr
        ceRr
        ceHeight
        ceWeight
        diagnosisAfterReport
        medication
        advice
        query
        followUpObservations
        createdAt
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
        recordId,
        caseId,
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
          return <Spinner></Spinner>;
        }
        return (
          <ViewRecord
            {...props}
            data={records[0]}
            loading={loading}
            error={err}
          ></ViewRecord>
        );
      }}
    </Query>
  );
};

export default ViewRecordContainer;
