import React from "react";
import { Link } from "react-router-dom";
const Register = (props) => {
  return (
    <div className="homepage-wrapper">
      <section className="hero is-large is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Register</h1>
            <Link to="/register/patient">Register as Patient</Link>
            <Link to="/register/medical-practitioner">
              Register as Medical Practitioner
            </Link>
            <Link to="/register/database-admin">
              Register as Database Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
