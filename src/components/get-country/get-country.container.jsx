import React, { useState } from "react";
import { Query } from "react-apollo";
import GetCountry from "./get-country.component";
import { GET_COUNTRY } from "../../graphql/queries";

const GetCountryContainer = (props) => {
  const [countries, setCountries] = useState([]);
  const { countryCode, setCountryCode } = props;
  const [country, setCountry] = useState(props.country ? props.country : "");
  return (
    <Query
      query={GET_COUNTRY}
      variables={{
        name: country ? country : "a",
      }}
    >
      {({ loading, errors, data }) => {
        if (!loading && !errors) {
          setCountries(data.getCountry);
        }
        return (
          <GetCountry
            country={country}
            setCountry={setCountry}
            countries={countries}
            loading={loading}
            error={
              errors
                ? errors.graphQLErrors.map((error) => {
                    return error.message;
                  })
                : null
            }
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          ></GetCountry>
        );
      }}
    </Query>
  );
};

export default GetCountryContainer;
