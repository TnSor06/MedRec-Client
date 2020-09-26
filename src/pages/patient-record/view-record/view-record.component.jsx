import React, { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import HospitalCard from "../../../components/hospital-card/hospital-card.component";
import UserCard from "../../../components/user-card/user-card.component";
import { CurrentUserContext } from "../../../providers/currentUser.provider";

const ViewRecord = (props) => {
  const { error, data } = props;
  const { currentUser } = useContext(CurrentUserContext);
  const {
    match: { params },
  } = props;
  const registeredAt = data
    ? moment(data.medicalPractitioner.registeredAt).format(
        "dddd, MMMM Do YYYY, h:mm:ss a"
      )
    : null;
  return (
    <div>
      <section className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="has-text-centered">
              <h1 className="title">Patient Record</h1>
            </div>
          </div>
          <p className="help is-size-5 is-danger">{error ? error : ""}</p>
          {data ? (
            <div>
              <div className="container has-text-centered">
                {currentUser.role === "MedicalPractitioner" ? (
                  <Link
                    className="button is-success"
                    to={`/patient/${params.id}/patient-case/view/${params.case}/shared-record/${params.record}/create`}
                  >
                    Share Record
                  </Link>
                ) : null}
              </div>
              <div className="columns is-centered">
                <div className="column is-one-third-desktop">
                  <article className="media">
                    <div className="media-content">
                      <div className="content" style={{ padding: "10px" }}>
                        <p>
                          <strong>Record Id</strong>: {data.recordId} <br />
                          <strong>Visit No</strong>: {data.visitNo} <br />
                          <strong>Created At</strong>:{" "}
                          {moment(data.createdAt).format("dddd, MMMM Do YYYY")}{" "}
                          <strong>On Arrival</strong>: {data.onArrival} <br />
                          <strong>Diagnosis</strong>: {data.diagnosis} <br />
                          <strong>Tx</strong>: {data.Tx} <br />
                          <strong>Report Suggestions</strong>:{" "}
                          {data.reportSuggestions} <br />
                          <strong>Diagnosis After Report</strong>:{" "}
                          {data.diagnosisAfterReport} <br />
                          <strong>Follow Up Observations</strong>:{" "}
                          {data.followUpObservations} <br />
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
                          <strong>cevsSp</strong>: {data.cevsSp} <br />
                          <strong>cevsDp</strong>: {data.cevsDp} <br />
                          <strong>cePr</strong>: {data.cePr} <br />
                          <strong>ceRr</strong>: {data.ceRr} <br />
                          <strong>ceHeight</strong>: {data.ceHeight} <br />
                          <strong>ceWeight</strong>: {data.ceWeight} <br />
                          <strong>Medication</strong>: {data.medication} <br />
                          <strong>Advice</strong>: {data.advice} <br />
                          <strong>Query</strong>: {data.query} <br />
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <hr></hr>
              <div className="container" style={{ padding: "10px" }}>
                <div className="has-text-centered">
                  <h3 className="title is-5">Patient Case Information</h3>
                </div>
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
                          <strong>Case ID:</strong>:{" "}
                          <Link
                            to={`/patient/${params.id}/patient-case/view/${params.case}/`}
                          >
                            {data.case.caseId}
                          </Link>{" "}
                          <br />
                          <strong>Icd Code</strong>:{" "}
                          {data.case.icdCode.commonName} <br />
                          <strong>Icd Sub Code</strong>:{" "}
                          {data.case.icdSubCode.scientificName} <br />
                          <strong>No. Of Visits:</strong>:{" "}
                          {data.case.noOfVisits} <br />
                          <strong>Created At</strong>:{" "}
                          {moment(data.case.createdAt).format(
                            "dddd, MMMM Do YYYY, h:mm:ss a"
                          )}{" "}
                          <br />
                          <strong>Updated At</strong>:{" "}
                          {moment(data.case.updatedAt).format(
                            "dddd, MMMM Do YYYY, h:mm:ss a"
                          )}
                          <br />
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
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ViewRecord;
