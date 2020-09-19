import React, { useState } from "react";
import { Query } from "react-apollo";
import GetRegion from "./get-region.component";
import { GET_REGION } from "../../graphql/queries";

const GetRegionContainer = (props) => {
  const [regions, setRegions] = useState([]);
  const { pincode, setPincode } = props;
  const [region, setRegion] = useState(props.region ? props.region : "");
  return (
    <Query
      query={GET_REGION}
      variables={{
        name: region ? region : "a",
      }}
    >
      {({ loading, errors, data }) => {
        if (!loading && !errors) {
          setRegions(data.getRegion);
        }
        return (
          <GetRegion
            region={region}
            setRegion={setRegion}
            regions={regions}
            loading={loading}
            error={
              errors
                ? errors.graphQLErrors.map((error) => {
                    return error.message;
                  })
                : null
            }
            pincode={pincode}
            setPincode={setPincode}
          ></GetRegion>
        );
      }}
    </Query>
  );
};

export default GetRegionContainer;
