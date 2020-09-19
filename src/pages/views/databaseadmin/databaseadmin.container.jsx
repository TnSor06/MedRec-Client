import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Spinner } from "../../../components/spinner/spinner.component";
import DatabaseAdmin from "./databaseadmin.component";

const DatabaseAdminContainer = (props) => {
  const [err, setErr] = useState("");
  const query = gql`
    {
      meDatabaseAdmin {
        user {
          firstName
          middleName
          lastName
          sex
          dob
          email
          verified
        }
        contact
        address
        country {
          countryCode
          countryName
        }
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
    }
  `;
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (error && error.graphQLErrors) {
          setErr(
            error.graphQLErrors.map((each) => {
              return each.message;
            })
          );
        } else if (error && error.networkError) {
          setErr(error.networkError.message);
        }
        if (loading) {
          setErr("");
          return <Spinner></Spinner>;
        }
        return (
          <DatabaseAdmin
            loading={loading}
            error={err}
            data={data ? data.meDatabaseAdmin : null}
          ></DatabaseAdmin>
        );
      }}
    </Query>
  );
};

export default DatabaseAdminContainer;
