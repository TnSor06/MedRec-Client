import { gql } from "apollo-boost";
import React, { useContext, useState } from "react";
import { Mutation, Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../../components/spinner/spinner.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import PatientHealth from "./patient-health.component";

const PatientHealthContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [err, setErr] = useState("");
  const query = gql`
    {
      mePatient {
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
      }
    }
  `;
  const mutation = gql`
    mutation updatePatient(
      $immunizationHistory: String
      $allergyStatus: Boolean
      $organDonorStatus: Boolean
      $PMH: String
      $DHx: String
      $Ca: Boolean
      $IDDM: Boolean
      $NIDDM: Boolean
      $COPD: Boolean
      $MI: Boolean
      $AF: Boolean
    ) {
      updatePatient(
        data: {
          immunizationHistory: $immunizationHistory
          allergyStatus: $allergyStatus
          organDonorStatus: $organDonorStatus
          PMH: $PMH
          DHx: $DHx
          Ca: $Ca
          IDDM: $IDDM
          NIDDM: $NIDDM
          COPD: $COPD
          MI: $MI
          AF: $AF
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
                <PatientHealth
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
                ></PatientHealth>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default PatientHealthContainer;
