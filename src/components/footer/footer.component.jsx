import React from "react";
import { SERVER_URL } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer is-dark">
      <div className="content has-text-centered">
        <p>
          <span
            style={{
              border: "3px solid #3398fe22",
              borderRadius: "20px",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/medrec-64.png"}
              alt="Medrec Logo"
              className="is-64x64"
            />{" "}
            <br />
            <strong className="is-size-4 is-uppercase is-family-code">
              Medrec
            </strong>
          </span>
          <br />
          <a href="https://github.com/TnSor06/MedRec-Server_v2">
            Server Code
          </a>{" "}
          built over Node, Prisma, GraphQL.{" "}
          <a href="https://github.com/TnSor06/MedRec-Client">Client Code</a>{" "}
          built over React, React-GraphQL, Apollo-Client, Bulma.
          <br />
          <a href={`${SERVER_URL}/playground`}>
            <strong>Documentation for API.</strong>
          </a>{" "}
        </p>
        <p>
          <strong className="is-size-5 is-uppercase is-family-code">
            Note
          </strong>
          <br />
          Don't see some changes immediately?
          <br />
          <button
            className="button is-dark"
            onClick={() => {
              window.location.reload();
            }}
          >
            Press This!
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
