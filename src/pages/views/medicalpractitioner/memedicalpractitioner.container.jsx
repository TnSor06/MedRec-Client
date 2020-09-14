import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import MedicalPractitioner from "./medicalpractitioner.component";

const MeMedicalPractitionerContainer = (props) => {
  const [err, setErr] = useState("");
  const query = gql`
    {
      meMedicalPractitioner {
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
            data={data ? data.meMedicalPractitioner : null}
          ></MedicalPractitioner>
        );
      }}
    </Query>
  );
};

export default MeMedicalPractitionerContainer;
