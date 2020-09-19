import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Mutation, Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../../components/spinner/spinner.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import PatientDetails from "./patient-details.component";

const PatientDetailsContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [err, setErr] = useState("");
  const query = gql`
    {
      mePatient {
        religion
        maritalStatus
        primaryLanguage
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
      }
    }
  `;
  const mutation = gql`
    mutation updatePatient(
      $religion: String
      $maritalStatus: MaritalStatus
      $primaryLanguage: String
      $address: String
      $pincode: String
      $country: String
      $occupation: String
      $contact1: String
      $contact2: String
      $socioEcoStatus: String
    ) {
      updatePatient(
        data: {
          religion: $religion
          maritalStatus: $maritalStatus
          primaryLanguage: $primaryLanguage
          address: $address
          pincode: $pincode
          country: $country
          occupation: $occupation
          contact1: $contact1
          contact2: $contact2
          socioEcoStatus: $socioEcoStatus
        }
      )
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
          setErr("");
          return <Spinner></Spinner>;
        }
        const dataFromQuery = data ? data["mePatient"] : null;
        if (err) {
          return (
            <section className="hero is-small is-light is-bold">
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">Update Patient Details</h1>
                  <br />
                  <p className="help is-size-5 is-danger">{err ? err : ""}</p>
                </div>
              </div>
            </section>
          );
        }
        return (
          <Mutation mutation={mutation}>
            {(updateFn, { loading, error, data }) => {
              return (
                <PatientDetails
                  {...props}
                  dataFromQuery={dataFromQuery}
                  loading={loading}
                  error={
                    error
                      ? error.graphQLErrors.map((error) => {
                          return error.message;
                        })
                      : null
                  }
                  update={(data) => {
                    updateFn({
                      variables: {
                        ...data,
                      },
                    });
                  }}
                  data={data}
                ></PatientDetails>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default PatientDetailsContainer;
