import React, { useState } from "react";

const ChangePassword = (props) => {
  const [passwordTouch, setPasswordTouch] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidConfirmPassword, setValidConfirmPassword] = useState(false);
  const { update, loading, error, data } = props;
  const onSubmit = () => {
    update(password);
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Update Password</h1>
          <br />
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPasswordTouch(true);
                    const value = event.target.value;
                    const passwordValid = value.match(
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
                    );
                    setValidPassword(passwordValid);
                    setPassword(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidPassword
                  ? "This password should have atleast one number and one character from @$!%*#?&"
                  : ""}
              </p>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setPasswordTouch(true);
                    const value = event.target.value;
                    const passwordValid = value.match(
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
                    );
                    setValidConfirmPassword(passwordValid);
                    setConfirmPassword(value);
                  }}
                />
              </div>
              <p className="help is-danger">
                {!isValidConfirmPassword
                  ? "This password is invalid"
                  : password !== confirmPassword
                  ? "Passwords Do not Match"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-quarter-desktop">
            <div className="buttons">
              <button
                className={`button is-success ${loading ? "is-loading" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSubmit();
                }}
                disabled={
                  !passwordTouch ||
                  !isValidPassword ||
                  !isValidConfirmPassword ||
                  password !== confirmPassword
                }
                style={{ margin: "0 auto" }}
              >
                Update
              </button>
            </div>
            {data ? (
              <div>
                <h1 className="help has-text-centered is-size-5 is-success">
                  Password Changed Successfully
                </h1>
                <button
                  className={`button is-success is-centered`}
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.reload();
                  }}
                  style={{ margin: "0 auto", width: "100%" }}
                >
                  Reload
                </button>
              </div>
            ) : (
              ""
            )}
            <p className="help has-text-centered is-size-5 is-danger">
              {error ? error : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
