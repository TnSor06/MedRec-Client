import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import HL7 from "../../../components/hl7/hl7.component";

const SearchSharedCase = (props) => {
  const {
    caseId,
    setCaseId,
    ToDate,
    setToDate,
    FromDate,
    setFromDate,
    error,
    loading,
    cases,
    match,
  } = props;
  return (
    <section className="hero is-small is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Search Shared Patient Case</h1>
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
              <label className="label">Case Id</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Case Id"
                  value={caseId}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCaseId(value);
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
          {cases.map((eachCase, key) => {
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
                      <strong>Case Id: </strong>
                      <Link
                        to={`${match.url.replace("shared", "patient")}/view/${
                          eachCase.case.caseId
                        }`}
                      >
                        {eachCase.case.caseId}
                      </Link>
                      .{" "}
                      <small>
                        <strong>No. of Visits:</strong>{" "}
                        {eachCase.case.noOfVisits}
                      </small>
                      <br />
                      <strong>Details: </strong>
                      {eachCase.case.icdCode.commonName} -{" "}
                      {eachCase.case.icdSubCode.scientificName}
                      <br />
                      Created At:{" "}
                      {moment(eachCase.case.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      Last Updated At:{" "}
                      {moment(eachCase.case.updatedAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      &nbsp;
                    </p>
                    <p>
                      <strong>Sender: </strong>
                      {eachCase.sender.user.firstName}{" "}
                      {eachCase.sender.user.lastName}.{" "}
                      <small>
                        &nbsp;<strong>MpID:</strong>{" "}
                        <Link
                          to={`/medicalpractitioner/${eachCase.sender.mpId}`}
                        >
                          {eachCase.sender.mpId}
                        </Link>
                      </small>
                      <br />
                      <strong>Receiver: </strong>
                      {eachCase.receiver.user.firstName}{" "}
                      {eachCase.receiver.user.lastName}.{" "}
                      <small>
                        &nbsp;<strong>MpID:</strong>{" "}
                        <Link
                          to={`/medicalpractitioner/${eachCase.receiver.mpId}`}
                        >
                          {eachCase.receiver.mpId}
                        </Link>
                      </small>
                      <br />
                      Shared At:{" "}
                      {moment(eachCase.sharedAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <HL7 HL7={eachCase.HL7} caseId={eachCase.case.caseId}></HL7>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchSharedCase;
