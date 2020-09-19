import React, { useState } from "react";
import GetCountryContainer from "../../../components/get-country/get-country.container";
import GetRegionContainer from "../../../components/get-region/get-region.container";

const PatientDetails = (props) => {
  const { dataFromQuery, error, loading, data, update } = props;
  const [religion, setReligion] = useState(dataFromQuery.religion);
  const [maritalStatus, setMaritalStatus] = useState(
    dataFromQuery.maritalStatus
  );
  const [primaryLanguage, setPrimaryLanguage] = useState(
    dataFromQuery.primaryLanguage
  );
  const [address, setAddress] = useState(dataFromQuery.address);
  const [pincode, setPincode] = useState(dataFromQuery.pincode.pincode);
  const [countryCode, setCountryCode] = useState(
    dataFromQuery.country.countryCode
  );
  const [occupation, setOccupation] = useState(dataFromQuery.occupation);
  const [contact1, setContact1] = useState(dataFromQuery.contact1);
  const [isValidContact1, setValidContact1] = useState(true);
  const [contact2, setContact2] = useState(dataFromQuery.contact2);
  const [isValidContact2, setValidContact2] = useState(true);
  const [socioEcoStatus, setSocioEcoStatus] = useState(
    dataFromQuery.socioEcoStatus
  );
  const onSubmit = () => {
    update({
      religion,
      maritalStatus,
      primaryLanguage,
      address,
      pincode: pincode.toString(),
      country: countryCode.toString(),
      occupation,
      contact1,
      contact2,
      socioEcoStatus,
    });
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Update Patient Details</h1>
          <br />
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Religion</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Religion"
                  value={religion}
                  onChange={(event) => {
                    const value = event.target.value;
                    setReligion(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Marital Status</label>
              <div className="select">
                <select
                  value={maritalStatus}
                  onChange={(event) => {
                    const value = event.target.value;
                    setMaritalStatus(value);
                  }}
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Primary Language</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Primary Language"
                  value={primaryLanguage}
                  onChange={(event) => {
                    const value = event.target.value;
                    setPrimaryLanguage(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(event) => {
                    const value = event.target.value;
                    setAddress(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <GetRegionContainer
              region={dataFromQuery.pincode.region}
              pincode={pincode}
              setPincode={setPincode}
            ></GetRegionContainer>
          </div>
          <div className="column is-one-third-desktop">
            <GetCountryContainer
              country={dataFromQuery.country.countryName}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            ></GetCountryContainer>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Contact 1</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Contact 1"
                  value={contact1}
                  onChange={(event) => {
                    const value = event.target.value;
                    const contactValid = value.match(
                      /^[+]\d{2,4}-\d{3}\d{3}\d{4}$/
                    );
                    setValidContact1(contactValid);
                    setContact1(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidContact1
                  ? "Supported format +[CountryCode]-[10 digit number]"
                  : ""}
              </p>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Contact 2</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Contact 2"
                  value={contact2}
                  onChange={(event) => {
                    const value = event.target.value;
                    const contactValid = value.match(
                      /^[+]\d{2,4}-\d{3}\d{3}\d{4}$/
                    );
                    setValidContact2(contactValid);
                    setContact2(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidContact2
                  ? "Supported format +[CountryCode]-[10 digit number]"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Occupation</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Occupation"
                  value={occupation}
                  onChange={(event) => {
                    const value = event.target.value;
                    setOccupation(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Socio Eco Status</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Socio Eco Status"
                  value={socioEcoStatus}
                  onChange={(event) => {
                    const value = event.target.value;
                    setSocioEcoStatus(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-quarter-desktop">
            <div className="buttons">
              <button
                className={`button is-success ${loading ? "is-loading" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSubmit();
                }}
                disabled={!isValidContact1 || !isValidContact2}
                style={{ margin: "0 auto" }}
              >
                Update
              </button>
            </div>
            <h1 className="help has-text-centered is-size-5 is-success">
              {data ? data.updatePatient : ""}
            </h1>
            <p className="help has-text-centered is-size-5 is-danger">
              {error ? error : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientDetails;
