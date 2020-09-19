import React, { useState } from "react";

const PatientHealth = (props) => {
  const { dataFromQuery, error, loading, data, update } = props;
  const [immunizationHistory, setImmunizationHistory] = useState(
    dataFromQuery.immunizationHistory
  );
  const [allergyStatus, setAllergyStatus] = useState(
    dataFromQuery.allergyStatus
  );
  const [organDonorStatus, setOrganDonorStatus] = useState(
    dataFromQuery.organDonorStatus
  );
  const [PMH, setPMH] = useState(dataFromQuery.PMH);
  const [DHx, setDHx] = useState(dataFromQuery.DHx);
  const [Ca, setCa] = useState(dataFromQuery.Ca);
  const [IDDM, setIDDM] = useState(dataFromQuery.IDDM);
  const [NIDDM, setNIDDM] = useState(dataFromQuery.NIDDM);
  const [COPD, setCOPD] = useState(dataFromQuery.COPD);
  const [MI, setMI] = useState(dataFromQuery.MI);
  const [AF, setAF] = useState(dataFromQuery.AF);
  const onSubmit = () => {
    update({
      immunizationHistory,
      allergyStatus,
      organDonorStatus,
      PMH,
      DHx,
      Ca,
      IDDM,
      NIDDM,
      COPD,
      MI,
      AF,
    });
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Update Patient Health Details</h1>
          <br />
        </div>
        <div className="columns is-centered">
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
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">PMH</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="PMH"
                  value={PMH}
                  onChange={(event) => {
                    const value = event.target.value;
                    setPMH(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">DHx</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="DHx"
                  value={DHx}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDHx(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Allergy Status</label>
              <div className="select">
                <select
                  value={allergyStatus}
                  onChange={(event) => {
                    const value = event.target.value;
                    setAllergyStatus(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Organ Donor Status</label>
              <div className="select">
                <select
                  value={organDonorStatus}
                  onChange={(event) => {
                    const value = event.target.value;
                    setOrganDonorStatus(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Ca</label>
              <div className="select">
                <select
                  value={Ca}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCa(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">IDDM</label>
              <div className="select">
                <select
                  value={IDDM}
                  onChange={(event) => {
                    const value = event.target.value;
                    setIDDM(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">NIDDM</label>
              <div className="select">
                <select
                  value={NIDDM}
                  onChange={(event) => {
                    const value = event.target.value;
                    setNIDDM(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">COPD</label>
              <div className="select">
                <select
                  value={COPD}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCOPD(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">MI</label>
              <div className="select">
                <select
                  value={MI}
                  onChange={(event) => {
                    const value = event.target.value;
                    setMI(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">AF</label>
              <div className="select">
                <select
                  value={AF}
                  onChange={(event) => {
                    const value = event.target.value;
                    setAF(value === "true" ? true : false);
                  }}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
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
                style={{ margin: "0 auto" }}
              >
                Update
              </button>
            </div>
            <h1 className="help has-text-centered is-size-5 is-success">
              {data ? data.updatePatient : ""}
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

export default PatientHealth;
