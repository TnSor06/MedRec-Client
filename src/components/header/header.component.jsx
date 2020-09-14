import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../providers/currentUser.provider";

const headerLinks = {
  DatabaseAdmin: [{ name: "Search User", link: "/search" }],
  MedicalPractitioner: [{ name: "Search User", link: "/search" }],
  Patient: [
    { name: "Insurance", link: "/insurance" },
    { name: "Care Provider", link: "/care-provider" },
  ],
};

const Header = (props) => {
  const error = props.error ? props.error : null;
  const networkError = error
    ? error.networkError
      ? error.networkError
      : null
    : null;
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Medrec
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/#"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {currentUser ? (
          <div className="navbar-start">
            {headerLinks[currentUser.role].map((link, key) => {
              return (
                <Link className="navbar-item" key={[key]} to={link.link}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="navbar-start">
            <Link className="navbar-item" to="/login">
              Login
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/register" className="navbar-link">
                Register
              </Link>

              <div className="navbar-dropdown">
                <Link to="/register/patient" className="navbar-item">
                  Patient
                </Link>
                <Link
                  to="/register/medical-practitioner"
                  className="navbar-item"
                >
                  Medical Practitioner
                </Link>
                <Link to="/register/database-admin" className="navbar-item">
                  Database Admin
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="navbar-end">
          {networkError ? (
            <div
              className="navbar-item notification is-danger"
              style={{ margin: "0 auto" }}
            >
              It seems like server is taking a nap
            </div>
          ) : null}
          {currentUser ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                Hello, {currentUser.firstName} {currentUser.lastName}
              </p>

              <div className="navbar-dropdown">
                <p className="navbar-item">
                  {currentUser.verified ? (
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                  ) : null}
                  &nbsp;
                  {currentUser.role}
                </p>
                <Link
                  to={`/${currentUser.role.toLowerCase()}`}
                  className="navbar-item"
                >
                  My Profile
                </Link>
                <hr className="navbar-divider"></hr>
                <Link to={`/update`} className="navbar-item">
                  Update Details
                </Link>
                <Link to={`/update/password`} className="navbar-item">
                  Update Password
                </Link>
                <hr className="navbar-divider"></hr>
                <Link to="/logout" className="navbar-item">
                  Logout
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
