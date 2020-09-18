import React, { useState, useContext } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Spinner } from "../../../components/spinner/spinner.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";
import CareProviderCard from "../../../components/care-provider-card/care-provider-card.component";

const CareProviderContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [err, setErr] = useState("");
  const query = gql`
    {
      mePatient {
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
      }
    }
  `;
  if (!currentUser || currentUser.role !== "Patient") {
    return <Redirect to="/"></Redirect>;
  }
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
        if (loading) {
          return <Spinner></Spinner>;
        }
        return (
          <CareProviderCard
            error={err}
            data={data.mePatient.cpId}
            modifiable={true}
          ></CareProviderCard>
        );
      }}
    </Query>
  );
};

export default CareProviderContainer;
