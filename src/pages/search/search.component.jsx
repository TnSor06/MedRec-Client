import React from "react";

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
  console.log(users);
  return (
    <section className="hero is-small is-light is-bold">
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
              <div className="select">
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
      </div>
    </section>
  );
};

export default Search;
