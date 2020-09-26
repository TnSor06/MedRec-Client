import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const SearchRecord = (props) => {
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
    match,
  } = props;
  return (
    <section className="hero is-small is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Search Patient Record</h1>
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
            console.log(eachRecord);
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
                      {eachRecord.recordId}.{" "}
                      <small>
                        <strong>Visits No.:</strong> {eachRecord.visitNo}
                      </small>
                      <br />
                      Created At:{" "}
                      {moment(eachRecord.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      <br />
                      <br />
                      <strong>Case Details: </strong>
                      {eachRecord.case.icdCode.commonName} -{" "}
                      {eachRecord.case.icdSubCode.scientificName}
                      <br />
                      &nbsp;
                      <small>
                        <strong>No. of Visits:</strong>{" "}
                        {eachRecord.case.noOfVisits}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <Link
                    to={`${match.url}/view/${eachRecord.recordId}`}
                    className="button is-success"
                  >
                    View Record
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchRecord;
