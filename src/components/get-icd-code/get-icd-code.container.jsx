import React, { useState } from "react";
import { Query } from "react-apollo";
import { GET_ICD_CODE, GET_ICD_SUB_CODE } from "../../graphql/queries";
import GetIcdCode from "./get-icd-code.component";
import GetIcdSubCode from "./get-icd-sub-code.component";

const GetIcdCodeContainer = (props) => {
  const [icdCodes, setIcdCodes] = useState([]);
  const [icdSubCodes, setIcdSubCodes] = useState([]);
  const { icdCode, setIcdCode, icdSubCode, setIcdSubCode } = props;
  const [commonName, setCommonName] = useState(
    props.icdCode ? props.icdCode.commonName : ""
  );
  const [scientificName, setScientificName] = useState(
    props.icdSubCode ? props.icdSubCode.scientificName : ""
  );
  return (
    <div className="columns is-centered">
      <Query
        query={GET_ICD_CODE}
        variables={{
          commonName: commonName ? commonName : "a",
        }}
      >
        {({ loading, errors, data }) => {
          if (!loading && !errors) {
            setIcdCodes(data.icdcodes);
          }
          return (
            <div className="column is-one-third-desktop">
              <GetIcdCode
                commonName={commonName}
                setCommonName={setCommonName}
                icdCodes={icdCodes}
                loading={loading}
                error={
                  errors
                    ? errors.graphQLErrors.map((error) => {
                        return error.message;
                      })
                    : null
                }
                icdCode={icdCode}
                setIcdCode={setIcdCode}
              ></GetIcdCode>
            </div>
          );
        }}
      </Query>
      <Query
        query={GET_ICD_SUB_CODE}
        variables={{
          commonName: commonName ? commonName : "a",
          scientificName: scientificName ? scientificName : "a",
        }}
      >
        {({ loading, errors, data }) => {
          if (!loading && !errors) {
            setIcdSubCodes(data.icdsubcodes);
          }
          return (
            <div className="column is-one-third-desktop">
              <GetIcdSubCode
                scientificName={scientificName}
                setScientificName={setScientificName}
                icdSubCodes={icdSubCodes}
                loading={loading}
                error={
                  errors
                    ? errors.graphQLErrors.map((error) => {
                        return error.message;
                      })
                    : null
                }
                icdSubCode={icdSubCode}
                setIcdSubCode={setIcdSubCode}
              ></GetIcdSubCode>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default GetIcdCodeContainer;
