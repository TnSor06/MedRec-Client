import React, { useState } from "react";

const CareProviderModify = (props) => {
  const { loading, data, editData, error, type, modify } = props;
  const [patientId, setPatientId] = useState(
    editData ? editData.cpPatientId.patientId : ""
  );
  const [patientIdValid, setPatientIdValid] = useState(
    editData ? (editData.cpPatientId.length >= 12 ? true : false) : false
  );
  const [relation, setRelation] = useState(
    editData ? editData.cpPatientRelation : ""
  );
  const onSubmit = () => {
    modify(patientId, relation);
    window.location.reload();
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Care Provider</h1>
          <br />
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Care Provider Patient Id</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Care Provider Patient Id"
                  value={patientId}
                  onChange={(event) => {
                    const value = event.target.value;
                    const patientIdValid = value.length >= 12 ? true : false;
                    setPatientIdValid(patientIdValid);
                    setPatientId(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!patientIdValid ? "This Id is invalid" : ""}
              </p>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Patient Relation</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Patient Relation"
                  value={relation}
                  onChange={(event) => {
                    const value = event.target.value;
                    setRelation(value);
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
                disabled={!patientIdValid}
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
                {data[`${type}CareProvider`].id} {type}ed successfully!
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareProviderModify;
