import React from "react";
import { Link } from "react-router-dom";

const InsuranceCard = (props) => {
  const { data, error, modifiable } = props;
  return (
    <div>
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
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column">
          {data ? (
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Insurance Information</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p className="title is-5">
                    <strong>Insurance ID</strong>: {data.insuranceId}
                  </p>
                  <p className="subtitle is-6">
                    <strong>Status</strong>: {data.insuranceStatus}
                    <br />
                    <strong>Company 1</strong>: {data.insuranceCompany1}
                    <br />
                    <strong>Company 2</strong>: {data.insuranceCompany2}
                    <br />
                    <strong>Details</strong>: {data.sponsorerDetails}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="notification is-danger has-text-centered">
              No Insurance Detail Found
            </p>
          )}
        </div>
      </div>
      {modifiable ? (
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
            <Link
              to={{
                pathname: "/insurance/modify",
                state: { data: data, type: data ? "update" : "add" },
              }}
              className="button is-success"
            >
              Change
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InsuranceCard;
