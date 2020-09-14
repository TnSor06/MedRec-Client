import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import Approve from "./approve.component";

const ApproveContainer = (props) => {
  const [err, setErr] = useState("");
  const { role, id } = props;
  const mutation = gql`
      mutation approve${role}($id: String!) {
          approve${role}(data: { id: $id})
      }
      `;
  return (
    <Mutation
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
      mutation={mutation}
    >
      {(approveFn, { loading, error, data }) => {
        return (
          <Approve
            {...props}
            loading={loading}
            error={err}
            approve={() => {
              approveFn({
                variables: {
                  id: id,
                },
              });
            }}
            data={data}
          ></Approve>
        );
      }}
    </Mutation>
  );
};

export default ApproveContainer;
