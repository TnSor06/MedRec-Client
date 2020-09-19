import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Patient from "./patient.component";
import { Spinner } from "../../../components/spinner/spinner.component";

const ViewPatientContainer = (props) => {
  const [err, setErr] = useState("");
  const {
    match: { params },
  } = props;
  const query = gql`
    query viewPatient($id: String!) {
      viewPatient(id: $id) {
        user {
          firstName
          middleName
          lastName
          sex
          dob
          email
          verified
        }
        patientId
        bloodGroup
        principleLanguage
        motherName
        aadharNo
        religion
        maritalStatus
        primaryLanguage
        birthPlace
        address
        pincode {
          pincode
          region
        }
        country {
          countryCode
          countryName
        }
        occupation
        contact1
        contact2
        socioEcoStatus
        immunizationHistory
        allergyStatus
        organDonorStatus
        PMH
        DHx
        Ca
        IDDM
        NIDDM
        COPD
        MI
        AF
        registeredAt
        cpId {
          id
          cpPatientId {
            patientId
            user {
              firstName
              middleName
              lastName
              sex
              dob
              email
              verified
            }
          }
          cpPatientRelation
        }
        insurance {
          insuranceId
          insuranceStatus
          insuranceCompany1
          insuranceCompany2
          sponsorerDetails
        }
        patientCase {
          caseId
          createdAt
        }
      }
    }
  `;
  return (
    <Query
      query={query}
      variables={{
        id: params.id,
      }}
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
      {({ loading, error, data }) => {
        if (loading) {
          setErr("");
          return <Spinner></Spinner>;
        }
        return (
          <Patient
            {...props}
            loading={loading}
            error={err}
            data={data ? data.viewPatient : null}
          ></Patient>
        );
      }}
    </Query>
  );
};

export default ViewPatientContainer;
