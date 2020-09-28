import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import HL7 from "../../../components/hl7/hl7.component";

const SearchSharedRecord = (props) => {
  const {
    recordId,
    setRecordId,
    ToDate,
    setToDate,
    FromDate,
    setFromDate,
    error,
    loading,
    records,
    match: { params },
  } = props;
  return (
    <section className="hero is-small is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Search Shared Patient Records</h1>
          <p className="help is-size-5 is-danger">{error ? error : ""}</p>
          {loading ? (
            <button className="button is-success is-loading">Loading</button>
          ) : (
            ""
          )}
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Record Id</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Record Id"
                  value={recordId}
                  onChange={(event) => {
                    const value = event.target.value;
                    setRecordId(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-quarter-desktop">
            <div className="field">
              <label className="label">From Date</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="date"
                  placeholder="From Date"
                  value={FromDate}
                  onChange={(event) => {
                    const value = event.target.value;
                    setFromDate(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter-desktop">
            <div className="field">
              <label className="label">To Date</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="date"
                  placeholder="To Date"
                  value={ToDate}
                  onChange={(event) => {
                    const value = event.target.value;
                    setToDate(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="navbar-divider"
          style={{ backgroundColor: "#363636" }}
        ></hr>
        <div className="container">
          {records.map((eachRecord, key) => {
            return (
              <article
                key={key}
                className="media"
                style={{
                  border: "1px solid #dbdbdb",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Record Id: </strong>
                      <Link
                        to={`/patient/${params.id}/patient-case/view/${params.case}/patient-record/view/${eachRecord.record.recordId}`}
                      >
                        {eachRecord.record.recordId}
                      </Link>
                      .{" "}
                      <small>
                        <strong>Visit No.:</strong> {eachRecord.record.visitNo}
                      </small>
                      <br />
                      Created At:{" "}
                      {moment(eachRecord.record.createdAt).format(
                        "dddd, MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      <strong>Case Id: </strong>
                      <Link
                        to={`/patient/${params.id}/patient-case/view/${params.case}`}
                      >
                        {eachRecord.case.caseId}
                      </Link>
                      .{" "}
                      <small>
                        <strong>No. of Visits:</strong>{" "}
                        {eachRecord.case.noOfVisits}
                      </small>
                      <br />
                      <strong>Details: </strong>
                      {eachRecord.case.icdCode.commonName} -{" "}
                      {eachRecord.case.icdSubCode.scientificName}
                      <br />
                      Created At:{" "}
                      {moment(eachRecord.case.createdAt).format(
                        "dddd, MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      Last Updated At:{" "}
                      {moment(eachRecord.case.updatedAt).format(
                        "dddd, MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      &nbsp;
                    </p>
                    <p>
                      <strong>Sender: </strong>
                      {eachRecord.sender.user.firstName}{" "}
                      {eachRecord.sender.user.lastName}.{" "}
                      <small>
                        &nbsp;<strong>MpID:</strong>{" "}
                        <Link
                          to={`/medicalpractitioner/${eachRecord.sender.mpId}`}
                        >
                          {eachRecord.sender.mpId}
                        </Link>
                      </small>
                      <br />
                      <strong>Receiver: </strong>
                      {eachRecord.receiver.user.firstName}{" "}
                      {eachRecord.receiver.user.lastName}.{" "}
                      <small>
                        &nbsp;<strong>MpID:</strong>{" "}
                        <Link
                          to={`/medicalpractitioner/${eachRecord.receiver.mpId}`}
                        >
                          {eachRecord.receiver.mpId}
                        </Link>
                      </small>
                      <br />
                      Shared At:{" "}
                      {moment(eachRecord.sharedAt).format(
                        "dddd, MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <HL7
                    HL7={eachRecord.HL7}
                    caseId={eachRecord.case.caseId}
                  ></HL7>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchSharedRecord;
