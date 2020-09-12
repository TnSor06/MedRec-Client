import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { Spinner } from "../../../components/spinner/spinner.component";
import Details from "./details.component";

const DetailsContainer = (props) => {
  const [err, setErr] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser && currentUser.role === "Patient") {
    return <Redirect to="/"></Redirect>;
  }
  const query = gql`
        {
          me${currentUser.role} {
              address
            ${
              currentUser.role === "MedicalPractitioner"
                ? "clinicAddress"
                : "contact"
            }
          }
        }
      `;
  const mutation = gql`
        mutation update${currentUser.role}($address: String!,${
    currentUser.role === "MedicalPractitioner"
      ? "$clinicAddress: String!"
      : "$contact: String!"
  }) {
            update${currentUser.role}(data: { address: $address,${
    currentUser.role === "MedicalPractitioner"
      ? "clinicAddress:$clinicAddress"
      : "contact:$contact"
  } }) 
        }
      `;
  return (
    <Query
      query={query}
      onError={(err) => {
        setErr(
          err.graphQLErrors.map((error) => {
            return error.message;
          })
        );
      }}
    >
      {({ loading, errors, data }) => {
        const labels = [
          { name: "Address", key: "address" },
          currentUser.role === "MedicalPractitioner"
            ? { name: "Clinic Address", key: "clinicAddress" }
            : { name: "Contact", key: "contact" },
        ];
        const dataFromQuery = data ? data[`me${currentUser.role}`] : null;
        if (loading) {
          setErr("");
          return <Spinner></Spinner>;
        }
        if (err) {
          return (
            <section className="hero is-small is-light is-bold">
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">Update Details</h1>
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
                <Details
                  {...props}
                  labels={labels}
                  dataFromQuery={dataFromQuery}
                  loading={loading}
                  error={
                    error
                      ? error.graphQLErrors.map((error) => {
                          return error.message;
                        })
                      : null
                  }
                  update={(value1, value2) => {
                    updateFn({
                      variables: {
                        address: value1,
                        ...(currentUser.role === "MedicalPractitioner" && {
                          clinicAddress: value2,
                        }),
                        ...(currentUser.role === "DatabaseAdmin" && {
                          contact: value2,
                        }),
                      },
                    });
                  }}
                  data={data}
                ></Details>
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default DetailsContainer;
