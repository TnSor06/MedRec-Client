import React, { useState } from "react";
import GetCountryContainer from "../../../components/get-country/get-country.container";
import GetRegionContainer from "../../../components/get-region/get-region.container";

const RegisterPatient = (props) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidConfirmPassword, setValidConfirmPassword] = useState(false);
  const [dob, setDOB] = useState("");
  const [sex, setSex] = useState("Male");
  const [principleLanguage, setPrincipleLanguage] = useState("");
  const [motherName, setMotherName] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contact1, setContact1] = useState("");
  const [isValidContact1, setValidContact1] = useState(false);
  const [contact2, setContact2] = useState("");
  const [isValidContact2, setValidContact2] = useState(false);
  const [socioEcoStatus, setSocioEcoStatus] = useState("");
  const [immunizationHistory, setImmunizationHistory] = useState("");
  const { registerPatient, loading, error, data } = props;
  const onSubmit = () => {
    registerPatient({
      firstName,
      middleName,
      lastName,
      dob,
      sex,
      email,
      principleLanguage,
      aadharNo,
      motherName,
      password,
      address,
      bloodGroup,
      religion,
      maritalStatus,
      primaryLanguage,
      birthPlace,
      pincode,
      country: countryCode,
      occupation,
      contact1,
      contact2,
      socioEcoStatus,
      immunizationHistory,
    });
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Register as Patient</h1>
          <br />
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(event) => {
                    const value = event.target.value;
                    setFirstName(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Middle Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(event) => {
                    const value = event.target.value;
                    setMiddleName(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(event) => {
                    const value = event.target.value;
                    setLastName(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Date of Birth</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  placeholder="DOB"
                  value={dob}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDOB(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    const value = event.target.value;
                    const emailValid = value.match(
                      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                    );
                    setValidEmail(emailValid);
                    setEmail(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidEmail ? "This email is invalid" : ""}
              </p>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Gender</label>
              <div className="select">
                <select
                  value={sex}
                  onChange={(event) => {
                    const value = event.target.value;
                    setSex(value);
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    const value = event.target.value;
                    const passwordValid = value.match(
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
                    );
                    setValidPassword(passwordValid);
                    setPassword(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidPassword
                  ? "This password should have atleast one number and one character from @$!%*#?&"
                  : ""}
              </p>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => {
                    const value = event.target.value;
                    const passwordValid = value.match(
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
                    );
                    setValidConfirmPassword(passwordValid);
                    setConfirmPassword(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidConfirmPassword
                  ? "This password is invalid"
                  : password !== confirmPassword
                  ? "Passwords Do not Match"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Principle Language</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Principle Language"
                  value={principleLanguage}
                  onChange={(event) => {
                    const value = event.target.value;
                    setPrincipleLanguage(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Mother Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Mother Name"
                  value={motherName}
                  onChange={(event) => {
                    const value = event.target.value;
                    setMotherName(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Aadhar no</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Aadhar no"
                  value={aadharNo}
                  onChange={(event) => {
                    const value = event.target.value;
                    setAadharNo(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Blood Group</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Blood Group"
                  value={bloodGroup}
                  onChange={(event) => {
                    const value = event.target.value;
                    setBloodGroup(value);
                  }}
                />
              </div>
            </div>
          </div>
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
        </div>
        <div className="columns is-centered">
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
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Birth Place</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Birth Place"
                  value={birthPlace}
                  onChange={(event) => {
                    const value = event.target.value;
                    setBirthPlace(value);
                  }}
                />
              </div>
            </div>
          </div>
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
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <GetRegionContainer
              pincode={pincode}
              setPincode={setPincode}
            ></GetRegionContainer>
          </div>
          <div className="column is-one-third-desktop">
            <GetCountryContainer
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            ></GetCountryContainer>
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
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Immunization History</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Immunization History"
                  value={immunizationHistory}
                  onChange={(event) => {
                    const value = event.target.value;
                    setImmunizationHistory(value);
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
                disabled={
                  !isValidEmail ||
                  !isValidPassword ||
                  !isValidContact1 ||
                  !isValidConfirmPassword ||
                  !isValidContact2 ||
                  password !== confirmPassword
                }
                style={{ margin: "0 auto" }}
              >
                Submit
              </button>
            </div>
            <h1 className="help has-text-centered is-size-5 is-success">
              {data ? data.registerPatient : ""}
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

export default RegisterPatient;
