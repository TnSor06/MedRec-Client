import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import CareProviderModify from "./care-provider-modify.component";

const CareProviderModifyContainer = (props) => {
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
        mutation ${type}CareProvider($cpPatientId: String!,$cpPatientRelation: String!) {
            ${type}CareProvider(data: { cpPatientId: $cpPatientId,cpPatientRelation:$cpPatientRelation}){
              id
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
          <CareProviderModify
            modify={(patientId, relation) => {
              modifyFn({
                variables: {
                  cpPatientId: patientId,
                  cpPatientRelation: relation,
                },
              });
            }}
            loading={loading}
            error={err}
            editData={editData}
            type={type}
            data={data}
          ></CareProviderModify>
        );
      }}
    </Mutation>
  );
};

export default CareProviderModifyContainer;
