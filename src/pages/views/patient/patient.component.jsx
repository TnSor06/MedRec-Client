import React, { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import UserCard from "../../../components/user-card/user-card.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";
import ApproveContainer from "../../../components/approve/approve.container";
import InsuranceCard from "../../../components/insurance-card/insurance-card.component";
import CareProviderCard from "../../../components/care-provider-card/care-provider-card.component";

const Patient = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { error, data } = props;
  const registeredAt = data
    ? moment(data.registeredAt).format("dddd, MMMM Do YYYY, h:mm:ss a")
    : null;
  return (
    <div>
      <section className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title">Profile</h1>
              {currentUser.role === "DatabaseAdmin" && !data.user.verified ? (
                <ApproveContainer
                  role="Patient"
                  id={data.patientId}
                ></ApproveContainer>
              ) : null}
            </div>
          </div>
          <p className="help is-size-5 is-danger">{error ? error : ""}</p>
          {data ? (
            <div>
              <div className="columns is-centered">
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  <UserCard user={data.user}></UserCard>
                </div>
                <div className="column is-one-third-desktop">
                  <article className="media">
                    <div className="media-content">
                      <div className="content" style={{ padding: "10px" }}>
                        <p>
                          <strong>Patient ID</strong>: {data.patientId} <br />
                          <strong>Blood Group</strong>: {data.bloodGroup} <br />
                          <strong>Principle Language</strong>:{" "}
                          {data.principleLanguage} <br />
                          <strong>Mother Name</strong>: {data.motherName} <br />
                          <strong>Religion</strong>: {data.religion} <br />
                          <strong>Marital Status</strong>: {data.maritalStatus}{" "}
                          <br />
                          <strong>Primary Language</strong>:{" "}
                          {data.primaryLanguage}
                          <br />
                          <strong>Birth Place</strong>: {data.birthPlace} <br />
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="column is-one-third-desktop">
                  <article className="media">
                    <div className="media-content">
                      <div className="content" style={{ padding: "10px" }}>
                        <p>
                          <strong>Contact-1</strong>: {data.contact1} <br />
                          <strong>Contact-2</strong>: {data.contact2} <br />
                          <strong>AadharNo</strong>: {data.aadharNo} <br />
                          <strong>Occupation</strong>: {data.occupation} <br />
                          <strong>SocioEcoStatus</strong>: {data.socioEcoStatus}{" "}
                          <br />
                          <strong>Address</strong>: {data.address},{" "}
                          {data.pincode.region},{data.country.countryName}{" "}
                          <br />
                          <strong>Registered At</strong>: {registeredAt} <br />
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <hr></hr>
              <div className="container has-text-centered">
                <h1 className="title is-4">Medical Information</h1>
              </div>
              <div className="columns is-centered">
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  <article className="media">
                    <div className="media-content">
                      <div className="content" style={{ padding: "10px" }}>
                        <p>
                          <strong>Immunization History</strong>:{" "}
                          {data.immunizationHistory} <br />
                          <strong>Allergy Status</strong>:{" "}
                          {data.allergyStatus ? "Yes" : "No"} <br />
                          <strong>Organ Donor Status</strong>:{" "}
                          {data.organDonorStatus ? "Yes" : "No"} <br />
                          <strong>PMH</strong>: {data.PMH} <br />
                          <strong>DHx</strong>: {data.DHx} <br />
                          <strong>Ca</strong>: {data.Ca ? "Yes" : "No"} <br />
                          <strong>IDDM</strong>: {data.IDDM ? "Yes" : "No"}{" "}
                          <br />
                          <strong>NIDDM</strong>: {data.NIDDM ? "Yes" : "No"}{" "}
                          <br />
                          <strong>COPD</strong>: {data.COPD ? "Yes" : "No"}{" "}
                          <br />
                          <strong>MI</strong>: {data.MI ? "Yes" : "No"} <br />
                          <strong>AF</strong>: {data.AF ? "Yes" : "No"} <br />
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  <div className="container has-text-centered">
                    <h1 className="title is-5">Patient Cases</h1>
                    <div style={{ margin: "10px 0" }}>
                      <Link
                        className="button is-success"
                        to={`/patient/${data.patientId}/patient-case`}
                      >
                        View Cases
                      </Link>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                      {currentUser.role === "MedicalPractitioner" ? (
                        <Link
                          className="button is-success"
                          to={`/patient/${data.patientId}/patient-case/create`}
                        >
                          Create Case
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  <hr />
                  {currentUser.role === "MedicalPractitioner" ? (
                    <div className="container has-text-centered">
                      <h1 className="title is-5">Shared Patient Cases</h1>
                      <div style={{ margin: "10px 0" }}>
                        <Link
                          className="button is-success"
                          to={`/patient/${data.patientId}/shared-case`}
                        >
                          View Shared Cases
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <hr></hr>
              <div className="container has-text-centered">
                <h1 className="title is-4">Insurance and Care Provider</h1>
              </div>
              <div className="columns is-centered">
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  {data.cpId ? (
                    <CareProviderCard
                      data={data.cpId}
                      modifiable={false}
                      error={null}
                    ></CareProviderCard>
                  ) : (
                    <p className="help is-size-5 is-danger  has-text-centered">
                      No Care Provider Information Provided
                    </p>
                  )}
                </div>
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  {data.insurance ? (
                    <InsuranceCard
                      data={data.insurance}
                      modifiable={false}
                      error={null}
                    ></InsuranceCard>
                  ) : (
                    <p className="help is-size-5 is-danger  has-text-centered">
                      No Insurance Information Provided
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Patient;
