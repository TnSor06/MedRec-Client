import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import InsuranceModify from "./insurance-modify.component";

const InsuranceModifyContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [err, setErr] = useState("");
  const {
    state: { type, data },
  } = props.location;
  const editData = data;

  if (!currentUser || currentUser.role !== "Patient") {
    return <Redirect to="/"></Redirect>;
  }
  const mutation = gql`
        mutation ${type}Insurance($insuranceStatus: String!,$insuranceCompany1: String!,$insuranceCompany2: String!,$sponsorerDetails: String!,) {
            ${type}Insurance(data: { insuranceStatus: $insuranceStatus,insuranceCompany1:$insuranceCompany1,insuranceCompany2:$insuranceCompany2,sponsorerDetails:$sponsorerDetails}){
              insuranceId
            } 
        }
      `;
  return (
    <Mutation
      mutation={mutation}
      onError={(error) => {
        if (error.graphQLErrors) {
          setErr(
            error.graphQLErrors.map((eachErr) => {
              return eachErr.message;
            })
          );
        }
        if (error.networkError) {
          setErr(error.networkError.message);
        }
      }}
    >
      {(modifyFn, { loading, data }) => {
        return (
          <InsuranceModify
            modify={(status, company1, company2, details) => {
              modifyFn({
                variables: {
                  insuranceStatus: status,
                  insuranceCompany1: company1,
                  insuranceCompany2: company2,
                  sponsorerDetails: details,
                },
              });
            }}
            loading={loading}
            error={err}
            editData={editData}
            type={type}
            data={data}
          ></InsuranceModify>
        );
      }}
    </Mutation>
  );
};

export default InsuranceModifyContainer;
