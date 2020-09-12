import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../providers/currentUser.provider";
const Update = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="homepage-wrapper">
      <section className="hero is-large is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Update Details</h1>
            <Link to="/update/password">Change Password</Link>
            {currentUser.role === "Patient" ? (
              <div>
                <Link to="/update/patient-details">
                  Change Personal Details
                </Link>
                <Link to="/update/patient-health">
                  Change Health Related Details
                </Link>
              </div>
            ) : (
              <Link to="/update/details">Change Personal Details</Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Update;
