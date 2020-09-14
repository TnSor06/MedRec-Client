import React from "react";
import { Link } from "react-router-dom";
import UserCard from "../user-card/user-card.component";
const CareProviderCard = (props) => {
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
                <p className="card-header-title">Care Provider Information</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p className="title is-5">{data.id}</p>
                  <p className="subtitle is-6">
                    <strong>Care Provider Patient ID</strong>:{" "}
                    {data.cpPatientId.patientId}
                    <br />
                    <strong>Care Provider Relation</strong>:{" "}
                    {data.cpPatientRelation}
                  </p>
                  <UserCard user={data.cpPatientId.user}></UserCard>
                </div>
              </div>
            </div>
          ) : (
            <p className="notification is-danger has-text-centered">
              No Care Provider Detail Found
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
                pathname: "/care-provider/modify",
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

export default CareProviderCard;
