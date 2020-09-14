import React from "react";

const Footer = () => {
  return (
    <footer className="footer is-dark">
      <div className="content has-text-centered">
        <p>
          <strong className="is-size-4 is-uppercase is-family-code">
            Medrec
          </strong>
          <br />
          <a href="https://github.com/TnSor06/MedRec-Server_v2">
            Server Code
          </a>{" "}
          built over Node, Prisma, GraphQL.{" "}
          <a href="https://github.com/TnSor06/MedRec-Client">Client Code</a>{" "}
          built over React, React-GraphQL, Apollo-Client, Bulma.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
