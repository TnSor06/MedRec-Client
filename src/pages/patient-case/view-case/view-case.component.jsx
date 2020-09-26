import React, { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import UserCard from "../../../components/user-card/user-card.component";
import HospitalCard from "../../../components/hospital-card/hospital-card.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";

const ViewCase = (props) => {
  const { error, data } = props;
  const { currentUser } = useContext(CurrentUserContext);
  const createdAt = data
    ? moment(data.createdAt).format("dddd, MMMM Do YYYY")
    : null;
  const updatedAt = data
    ? moment(data.updatedAt).format("dddd, MMMM Do YYYY")
    : null;
  const registeredAt = data
    ? moment(data.medicalPractitioner.registeredAt).fromNow()
    : null;
  const { params } = props.match;
  return (
    <div>
      <section className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title">Patient Case</h1>
            </div>
          </div>
          <p className="help is-size-5 is-danger">{error ? error : ""}</p>
          {data ? (
            <div>
              <div className="container has-text-centered">
                {currentUser.role === "MedicalPractitioner" ? (
                  <Link
                    className="button is-success"
                    to={`/patient/${params.id}/shared-case/${params.case}/create`}
                  >
                    Share Case
                  </Link>
                ) : null}
              </div>
              <div className="columns is-centered">
                <div className="column is-one-third-desktop">
                  <article className="media">
                    <div className="media-content">
                      <div className="content" style={{ padding: "10px" }}>
                        <p>
                          <strong>Case ID</strong>: {data.caseId} <br />
                          <strong>Created On</strong>: {createdAt} <br />
                          <strong>Updated On</strong>: {updatedAt} <br />
                          <strong>No of Visits</strong>: {data.noOfVisits}{" "}
                          <br />
                          <strong>Clinical Note</strong>: {data.clinicalNote}{" "}
                          <br />
                          <strong>Current Clinical Status</strong>:{" "}
                          {data.currentClinicalStatus ? "Yes" : "No"} <br />
                          <strong>Diagnosis Type</strong>: {data.diagnosisType}
                          <br />
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
                          <strong>HPC</strong>: {data.HPC} <br />
                          <strong>MoI</strong>: {data.MoI} <br />
                          <strong>DandV</strong>: {data.DandV} <br />
                          <strong>Icd Code</strong>: {data.icdCode.commonName}{" "}
                          <br />
                          <strong>Icd Sub Code</strong>:{" "}
                          {data.icdSubCode.scientificName} <br />
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <hr></hr>
              <div className="container" style={{ padding: "10px" }}>
                <div className="has-text-centered">
                  <h3 className="title is-5">
                    Medical Practitioner Information
                  </h3>
                </div>
              </div>
              <div className="columns is-centered">
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  <UserCard user={data.medicalPractitioner.user}></UserCard>
                </div>
                <div className="column is-one-third-desktop">
                  <article className="media">
                    <div className="media-content">
                      <div className="content" style={{ padding: "10px" }}>
                        <p>
                          <strong>MedicalPractitioner ID:</strong>:{" "}
                          {data.medicalPractitioner.mpId} <br />
                          <strong>Field</strong>:{" "}
                          {data.medicalPractitioner.field} <br />
                          <strong>Degree</strong>:{" "}
                          {data.medicalPractitioner.degree} <br />
                          <strong>Address</strong>:{" "}
                          {data.medicalPractitioner.address} <br />
                          <strong>Clinic Address</strong>:{" "}
                          {data.medicalPractitioner.clinicAddress} <br />
                          <strong>Registered At</strong>: {registeredAt} <br />
                        </p>
                        <HospitalCard
                          hospital={data.medicalPractitioner.hospital}
                        ></HospitalCard>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="columns is-centered">
                <div
                  className="column is-one-third-desktop"
                  style={{ padding: "10px" }}
                >
                  <div className="container has-text-centered">
                    <h1 className="title is-5">Patient Records</h1>
                    <div style={{ margin: "10px 0" }}>
                      <Link
                        className="button is-success"
                        to={`/patient/${params.id}/patient-case/view/${params.case}/patient-record/`}
                      >
                        View Records
                      </Link>
                    </div>
                    <div style={{ margin: "10px 0" }}>
                      {currentUser.role === "MedicalPractitioner" ? (
                        <Link
                          className="button is-success"
                          to={`/patient/${params.id}/patient-case/view/${params.case}/patient-record/create`}
                        >
                          Create Record
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ViewCase;
