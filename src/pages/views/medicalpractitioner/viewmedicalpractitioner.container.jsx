import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import MedicalPractitioner from "./medicalpractitioner.component";

const ViewMedicalPractitionerContainer = (props) => {
  const [err, setErr] = useState("");
  const {
    match: { params },
  } = props;
  const query = gql`
    query viewMedicalPractitioner($id: String!) {
      viewMedicalPractitioner(id: $id) {
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
        registeredAt
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
        return (
          <MedicalPractitioner
            loading={loading}
            error={err}
            data={data ? data.viewMedicalPractitioner : null}
          ></MedicalPractitioner>
        );
      }}
    </Query>
  );
};

export default ViewMedicalPractitionerContainer;
