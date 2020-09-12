import React, { useState } from "react";
import { Query } from "react-apollo";
import { GET_HOSPITAL } from "../../graphql/queries";
import Gethospital from "./get-hospital.component";

const GetHospitalContainer = (props) => {
  const [hospitalSelected, setHospitalSelected] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const { hospital, setHospital } = props;
  return (
    <Query
      query={GET_HOSPITAL}
      variables={{
        name: hospitalSelected ? hospitalSelected : "a",
      }}
    >
      {({ loading, errors, data }) => {
        if (!loading && !errors) {
          setHospitals(data.getHospital);
        }
        return (
          <Gethospital
            hospitalSelected={hospitalSelected}
            setHospitalSelected={setHospitalSelected}
            hospitals={hospitals}
            loading={loading}
            error={
              errors
                ? errors.graphQLErrors.map((error) => {
                    return error.message;
                  })
                : null
            }
            hospital={hospital}
            setHospital={setHospital}
          ></Gethospital>
        );
      }}
    </Query>
  );
};

export default GetHospitalContainer;
