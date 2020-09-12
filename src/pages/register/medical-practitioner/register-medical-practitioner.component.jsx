import React, { useState } from "react";
import GetHospitalContainer from "../../../components/get-hospital/get-hospital.container";

const RegisterMedicalPractitioner = (props) => {
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
  const [address, setAddress] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [hospital, setHospital] = useState("");
  const { registerMedicalPractitioner, loading, error, data } = props;
  const onSubmit = () => {
    registerMedicalPractitioner({
      firstName,
      middleName,
      lastName,
      dob,
      sex,
      email,
      password,
      address,
      clinicAddress,
      degree,
      field,
      hospital,
    });
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Register as Medical Practitioner</h1>
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
            <div className="field">
              <label className="label">Clinic Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Clinic Address"
                  value={clinicAddress}
                  onChange={(event) => {
                    const value = event.target.value;
                    setClinicAddress(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <GetHospitalContainer
              hospital={hospital}
              setHospital={setHospital}
            ></GetHospitalContainer>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Degree</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Degree"
                  value={degree}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDegree(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Field</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Field"
                  value={field}
                  onChange={(event) => {
                    const value = event.target.value;
                    setField(value);
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
                  !isValidConfirmPassword ||
                  password !== confirmPassword
                }
                style={{ margin: "0 auto" }}
              >
                Submit
              </button>
            </div>
            <h1 className="help has-text-centered is-size-5 is-success">
              {data ? data.registerMedicalPractitioner : ""}
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

export default RegisterMedicalPractitioner;
