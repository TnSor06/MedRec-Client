import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateRecord = (props) => {
  const {
    loading,
    error,
    data,
    create,
    match: { params },
  } = props;
  const caseId = params.case;
  const [onArrival, setOnArrival] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [Tx, setTx] = useState("");
  const [reportSuggestions, setReportSuggestions] = useState("");
  const [cevsSp, setCevsSp] = useState(0);
  const [cevsDp, setCevsDp] = useState(0);
  const [cePr, setCePr] = useState(0);
  const [ceRr, setCeRr] = useState(0);
  const [ceHeight, setCeHeight] = useState(0);
  const [ceWeight, setCeWeight] = useState(0);
  const [diagnosisAfterReport, setDiagnosisAfterReport] = useState("");
  const [medication, setMedication] = useState("");
  const [advice, setAdvice] = useState("");
  const [query, setQuery] = useState("");
  const [followUpObservations, setFollowUpObservations] = useState("");
  const onSubmit = () => {
    create({
      case: caseId,
      onArrival: onArrival,
      diagnosis: diagnosis,
      Tx: Tx,
      reportSuggestions: reportSuggestions,
      cevsSp: cevsSp,
      cevsDp: cevsDp,
      cePr: cePr,
      ceRr: ceRr,
      ceHeight: ceHeight,
      ceWeight: ceWeight,
      diagnosisAfterReport: diagnosisAfterReport,
      medication: medication,
      advice: advice,
      query: query,
      followUpObservations: followUpObservations,
    });
  };
  return (
    <section className="hero is-medium is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Create Patient Record</h1>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">On Arrival</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="On Arrival"
                  value={onArrival}
                  onChange={(event) => {
                    const value = event.target.value;
                    setOnArrival(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Diagnosis</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Diagnosis"
                  value={diagnosis}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDiagnosis(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Tx</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Tx"
                  value={Tx}
                  onChange={(event) => {
                    const value = event.target.value;
                    setTx(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">cevsSp</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="cevsSp"
                  min="0"
                  value={cevsSp}
                  onChange={(event) => {
                    let value = parseInt(event.target.value);
                    setCevsSp(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">cevsDp</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="cevsDp"
                  min="0"
                  value={cevsDp}
                  onChange={(event) => {
                    let value = parseInt(event.target.value);
                    setCevsDp(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">cePr</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="cePr"
                  min="0"
                  value={cePr}
                  onChange={(event) => {
                    let value = parseInt(event.target.value);
                    setCePr(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">ceRr</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="ceRr"
                  min="0"
                  value={ceRr}
                  onChange={(event) => {
                    let value = parseInt(event.target.value);
                    setCeRr(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">ceHeight</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="ceHeight"
                  min="0"
                  value={ceHeight}
                  onChange={(event) => {
                    let value = parseInt(event.target.value);
                    setCeHeight(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">ceWeight</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="ceWeight"
                  min="0"
                  value={ceWeight}
                  onChange={(event) => {
                    let value = parseInt(event.target.value);
                    setCeWeight(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Report Suggestions</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Report Suggestions"
                  value={reportSuggestions}
                  onChange={(event) => {
                    const value = event.target.value;
                    setReportSuggestions(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Diagnosis After Report</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Diagnosis After Report"
                  value={diagnosisAfterReport}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDiagnosisAfterReport(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Medication</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Medication"
                  value={medication}
                  onChange={(event) => {
                    const value = event.target.value;
                    setMedication(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Advice</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Advice"
                  value={advice}
                  onChange={(event) => {
                    const value = event.target.value;
                    setAdvice(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Query</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Query"
                  value={query}
                  onChange={(event) => {
                    const value = event.target.value;
                    setQuery(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Follow Up Observations</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Follow Up Observations"
                  value={followUpObservations}
                  onChange={(event) => {
                    const value = event.target.value;
                    setFollowUpObservations(value);
                  }}
                />
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
                  ? `${data.createPatientRecord.recordId} create successfully`
                  : ""}
              </h1>
              {data ? (
                <Link
                  className="button is-success"
                  to={props.match.url.replace(
                    "create",
                    `view/${data.createPatientRecord.recordId}`
                  )}
                >
                  Go to Record
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

export default CreateRecord;
