import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetIcdCodeContainer from "../../../components/get-icd-code/get-icd-code.container";

const CreateCase = (props) => {
  const {
    loading,
    error,
    data,
    create,
    match: { params },
  } = props;
  const patientId = params.id;
  const [icdCode, setIcdCode] = useState("");
  const [icdSubCode, setIcdSubCode] = useState("");
  const [HPC, setHPC] = useState("");
  const [MoI, setMoI] = useState("");
  const [DandV, setDandV] = useState("");
  const [clinicalNote, setClinicalNote] = useState("");
  const [diagnosisType, setDiagnosisType] = useState("Provisional");
  const [currentClinicalStatus, setCurrentClinicalStatus] = useState(true);
  const onSubmit = () => {
    create({
      patientId,
      icdCode,
      icdSubCode,
      HPC,
      MoI,
      DandV,
      clinicalNote,
      diagnosisType,
      currentClinicalStatus,
    });
  };

  return (
    <section className="hero is-medium is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Create Patient Case</h1>
        </div>
        <GetIcdCodeContainer
          icdCode={icdCode}
          setIcdCode={setIcdCode}
          icdSubCode={icdSubCode}
          setIcdSubCode={setIcdSubCode}
        ></GetIcdCodeContainer>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">HPC</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="HPC"
                  value={HPC}
                  onChange={(event) => {
                    const value = event.target.value;
                    setHPC(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">MoI</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="MoI"
                  value={MoI}
                  onChange={(event) => {
                    const value = event.target.value;
                    setMoI(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">DandV</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="DandV"
                  value={DandV}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDandV(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">clinicalNote</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="clinicalNote"
                  value={clinicalNote}
                  onChange={(event) => {
                    const value = event.target.value;
                    setClinicalNote(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">diagnosisType</label>
              <div className="select">
                <select
                  value={diagnosisType}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDiagnosisType(value);
                  }}
                >
                  <option value="Provisional">Provisional</option>
                  <option value="Final">Final</option>
                  <option value="Interim">Interim</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">currentClinicalStatus</label>
              <div className="select">
                <select
                  value={currentClinicalStatus}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCurrentClinicalStatus(value === "true" ? true : false);
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
                Create
              </button>
            </div>

            <div className="help has-text-centered is-size-5 is-success">
              <h1 className="help has-text-centered is-size-5 is-success">
                {data
                  ? `${data.createPatientCase.caseId} create successfully`
                  : ""}
              </h1>
              {data ? (
                <Link
                  className="button is-success"
                  to={props.match.url.replace(
                    "create",
                    `view/${data.createPatientCase.caseId}`
                  )}
                >
                  Go to Case
                </Link>
              ) : (
                ""
              )}
            </div>
            <p className="help has-text-centered is-size-5 is-danger">
              {error ? error : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCase;
