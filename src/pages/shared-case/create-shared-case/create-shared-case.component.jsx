import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import HL7 from "../../../components/hl7/hl7.component";

const CreateSharedCase = (props) => {
  const { loading, error, data, create, match } = props;
  const [receiver, setReceiver] = useState("");
  const onSubmit = () => {
    create(receiver);
  };
  return (
    <section className="hero is-medium is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Create Shared Patient Case</h1>
        </div>
        <div className="columns is-centered" style={{ margin: "10px 0" }}>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Receiver MpID</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Receiver MpID"
                  value={receiver}
                  onChange={(event) => {
                    const value = event.target.value;
                    setReceiver(value.replace(" ", ""));
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
                {data ? `Shared Case create successfully` : ""}
              </h1>
            </div>
            <p className="help has-text-centered is-size-5 is-danger">
              {error ? error : ""}
            </p>
          </div>
        </div>
        {data ? (
          <article
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
                    to={`${match.url
                      .replace(
                        "shared-case/",
                        `patient-case/view/${data.createSharedCase.case.caseId}`
                      )
                      .replace("create", "")}`}
                  >
                    {data.createSharedCase.case.caseId}
                  </Link>
                  .{" "}
                  <small>
                    <strong>No. of Visits:</strong>{" "}
                    {data.createSharedCase.case.noOfVisits}
                  </small>
                  <br />
                  <strong>Details: </strong>
                  {data.createSharedCase.case.icdCode.commonName} -{" "}
                  {data.createSharedCase.case.icdSubCode.scientificName}
                  <br />
                  Created At:{" "}
                  {moment(data.createSharedCase.case.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                  <br />
                  Last Updated At:{" "}
                  {moment(data.createSharedCase.case.updatedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                  <br />
                  &nbsp;
                </p>
                <p>
                  <strong>Sender: </strong>
                  {data.createSharedCase.sender.user.firstName}{" "}
                  {data.createSharedCase.sender.user.lastName}.{" "}
                  <small>
                    &nbsp;<strong>MpID:</strong>{" "}
                    <Link
                      to={`/medicalpractitioner/${data.createSharedCase.sender.mpId}`}
                    >
                      {data.createSharedCase.sender.mpId}
                    </Link>
                  </small>
                  <br />
                  <strong>Receiver: </strong>
                  {data.createSharedCase.receiver.user.firstName}{" "}
                  {data.createSharedCase.receiver.user.lastName}.{" "}
                  <small>
                    &nbsp;<strong>MpID:</strong>{" "}
                    <Link
                      to={`/medicalpractitioner/${data.createSharedCase.receiver.mpId}`}
                    >
                      {data.createSharedCase.receiver.mpId}
                    </Link>
                  </small>
                  <br />
                  Shared At:{" "}
                  {moment(data.createSharedCase.sharedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                  <br />
                  &nbsp;
                </p>
              </div>
            </div>
            <div className="media-right">
              <HL7
                HL7={data.createSharedCase.HL7}
                caseId={data.createSharedCase.case.caseId}
              ></HL7>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
};

export default CreateSharedCase;
