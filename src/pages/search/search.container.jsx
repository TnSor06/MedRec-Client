import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import Search from "./search.component";
import { gql } from "apollo-boost";
import { CurrentUserContext } from "../../providers/currentUser.provider";
import { Redirect } from "react-router-dom";
const SearchContainer = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Patient");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const SEARCH_USER = gql`
    query searchUser(${name ? "$name: String" : ""}, ${
    email ? "$email: String" : ""
  }, ${type ? "$type: UserType_" : ""}) {
      searchUser(data: { ${name ? "name: $name" : ""}, ${
    email ? "email: $email" : ""
  }, ${type ? "type:$type" : ""} }) {
        id
        firstName
        middleName
        lastName
        email
        role
        verified
      }
    }
  `;
  if (!currentUser || currentUser.role === "Patient") {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <Query
      query={SEARCH_USER}
      variables={{
        name: name,
        email: email,
        type: type,
      }}
      onCompleted={(data) => {
        setUsers(data.searchUser);
      }}
      onError={(err) => {
        if (err.graphQLErrors) {
          setErr(
            err.graphQLErrors.map((error) => {
              return error.message;
            })
          );
        }
        if (err.networkError) {
          setErr(err.networkError.message);
        }
      }}
    >
      {({ loading }) => {
        if (loading) {
          setErr("");
        }
        return (
          <Search
            {...props}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            type={type}
            setType={setType}
            users={users}
            loading={loading}
            error={err}
          ></Search>
        );
      }}
    </Query>
  );
};

export default SearchContainer;
