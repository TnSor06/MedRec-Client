import React, { useState } from "react";

const InsuranceModify = (props) => {
  const { loading, data, editData, error, type, modify } = props;
  const [status, setStatus] = useState(
    editData ? editData.insuranceStatus : ""
  );
  const [company1, setCompany1] = useState(
    editData ? editData.insuranceCompany1 : ""
  );
  const [company2, setCompany2] = useState(
    editData ? editData.insuranceCompany2 : ""
  );
  const [details, setDetails] = useState(
    editData ? editData.sponsorerDetails : ""
  );
  const onSubmit = () => {
    modify(status, company1, company2, details);
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Insurance</h1>
          <br />
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Insurance Status</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Insurance Status"
                  value={status}
                  onChange={(event) => {
                    const value = event.target.value;
                    setStatus(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Insurance Company 1</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Insurance Company 1"
                  value={company1}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCompany1(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Insurance Company 2</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Insurance Company 2"
                  value={company2}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCompany2(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Sponserer Details</label>
              <div className="control">
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Sponserer Details"
                  value={details}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDetails(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div
            className="column is-half-desktop"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div className="buttons">
              <button
                className={`button is-success ${loading ? "is-loading" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSubmit();
                }}
                style={{ margin: "10px auto" }}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div
            className="column is-half-desktop"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {error ? <p className="notification is-danger">{error}</p> : null}
            {data ? (
              <p className="notification is-success">
                {data[`${type}Insurance`].insuranceId} added successfully!
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceModify;
