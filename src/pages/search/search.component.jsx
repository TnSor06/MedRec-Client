import React from "react";
import { Link } from "react-router-dom";
const Search = (props) => {
  const {
    email,
    setEmail,
    name,
    setName,
    type,
    setType,
    error,
    loading,
    users,
  } = props;
  return (
    <section className="hero is-small is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Search User</h1>
          <p className="help is-size-5 is-danger">{error ? error : ""}</p>
          {loading ? (
            <button className="button is-success is-loading">Loading</button>
          ) : (
            ""
          )}
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  value={email}
                  onChange={(event) => {
                    const value = event.target.value;
                    setEmail(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => {
                    const value = event.target.value;
                    setName(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Type</label>
              <div className="select is-rounded">
                <select
                  value={type}
                  onChange={(event) => {
                    const value = event.target.value;
                    setType(value);
                  }}
                >
                  <option value="Patient">Patient</option>
                  <option value="MedicalPractitioner">
                    Medical Practitioner
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="navbar-divider"
          style={{ backgroundColor: "#363636" }}
        ></hr>
        <div className="container">
          {users.map((user, key) => {
            return (
              <article
                key={key}
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
                      <strong>
                        {user.firstName} {user.middleName} {user.lastName}
                      </strong>{" "}
                      <small>{user.email}</small>
                      <br />
                      {user.verified ? (
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-times-circle"
                          aria-hidden="true"
                        ></i>
                      )}
                      &nbsp;
                      {user.role}
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <Link
                    to={`${user.role.toLowerCase()}/${user.id}`}
                    className="button is-success"
                  >
                    View Profile
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
