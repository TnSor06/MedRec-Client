import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../../components/spinner/spinner.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import ViewCase from "./view-case.component";

const ViewCaseContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const patientId = params.id;
  const caseId = params.case;
  const [cases, setCases] = useState([]);
  const query = gql`
    query ViewPatientCase($patientId: String!, $caseId: String!) {
      viewPatientCase(patientId: $patientId, caseId: $caseId) {
        id
        caseId
        createdAt
        updatedAt
        noOfVisits
        HPC
        MoI
        DandV
        clinicalNote
        noOfVisits
        diagnosisType
        currentClinicalStatus
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
          return <Spinner></Spinner>;
        }
        return (
          <ViewCase
            {...props}
            data={cases[0]}
            loading={loading}
            error={err}
          ></ViewCase>
        );
      }}
    </Query>
  );
};

export default ViewCaseContainer;
