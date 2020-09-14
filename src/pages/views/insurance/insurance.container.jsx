import React, { useState, useContext } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Spinner } from "../../../components/spinner/spinner.component";
import InsuranceCard from "../../../components/insurance-card/insurance-card.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";

const InsuranceContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [err, setErr] = useState("");
  const query = gql`
    {
      mePatient {
        insurance {
          insuranceId
          insuranceStatus
          insuranceCompany1
          insuranceCompany2
          sponsorerDetails
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
          <InsuranceCard
            error={err}
            data={data.mePatient.insurance}
            modifiable={true}
          ></InsuranceCard>
        );
      }}
    </Query>
  );
};

export default InsuranceContainer;
