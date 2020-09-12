import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const onSubmit = () => {
    props.login(email, password);
  };
  return (
    <section className="hero is-medium is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Login</h1>
        </div>
        <div className="columns is-centered">
          <div className="column is-half-desktop">
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
                    const emailValid = value.match(
                      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                    );
                    setValidEmail(emailValid);
                    setEmail(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <p className="help is-danger">
                {!isValidEmail ? "This email is invalid" : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half-desktop">
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Password input"
                  value={password}
                  onChange={(event) => {
                    const value = event.target.value;
                    const passwordValid = value.match(
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
                    );
                    setValidPassword(passwordValid);
                    setPassword(value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-unlock"></i>
                </span>
              </div>
              <p className="help is-danger">
                {!isValidPassword ? "This password is invalid" : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half-desktop">
            <div className="buttons">
              <button
                className={`button is-success ${
                  props.isLoading ? "is-loading" : ""
                }`}
                disabled={!isValidEmail || !isValidPassword}
                onClick={(event) => {
                  event.preventDefault();
                  onSubmit();
                }}
              >
                Login
              </button>
            </div>
            <p className="help is-size-5 is-danger">
              {props.error ? props.error : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
