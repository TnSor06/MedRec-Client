import React from "react";

const Approve = (props) => {
  const { loading, data, error, approve, role } = props;
  return (
    <div className="columns is-centered">
      <div className="column is-one-quarter-desktop">
        <button
          style={{ margin: "10px 0" }}
          className={`button is-success ${loading ? "is-loading" : ""}`}
          onClick={() => {
            approve();
          }}
        >
          Approve
        </button>
      </div>
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
          <p className="notification is-success">{data[`approve${role}`]}</p>
        ) : null}
      </div>
      <div className="column is-one-quarter-desktop">
        {error || data ? (
          <button
            style={{ margin: "10px 0" }}
            className={`button is-success ${loading ? "is-loading" : ""}`}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Approve;
