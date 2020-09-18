import React, { useState } from "react";

const Details = (props) => {
  const { dataFromQuery, labels, error, loading, data, update } = props;
  const [value1, setValue1] = useState(dataFromQuery[labels[0].key]);
  const [value2, setValue2] = useState(dataFromQuery[labels[1].key]);
  const [isValidContact, setValidContact] = useState(false);
  const onSubmit = () => {
    update(value1, value2);
    window.location.reload();
  };
  return (
    <section className="hero is-small is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Update Details</h1>
          <br />
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third-desktop">
            <div className="field">
              <label className="label">{labels[0].name}</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder={labels[0].name}
                  value={value1}
                  onChange={(event) => {
                    const value = event.target.value;
                    setValue1(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-third-desktop">
            {labels[1].name === "Contact" ? (
              <div className="field">
                <label className="label">{labels[1].name}</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder={labels[1].name}
                    value={value2}
                    onChange={(event) => {
                      const value = event.target.value;
                      const contactValid = value.match(
                        /^[+]\d{2,4}-\d{3}\d{3}\d{4}$/
                      );
                      setValidContact(contactValid);
                      setValue2(value);
                    }}
                  />
                </div>
                <p className="help is-danger">
                  {!isValidContact
                    ? "Supported format +[CountryCode]-[10 digit number]"
                    : ""}
                </p>
              </div>
            ) : (
              <div className="field">
                <label className="label">{labels[1].name}</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder={labels[1].name}
                    value={value2}
                    onChange={(event) => {
                      const value = event.target.value;
                      setValue2(value);
                    }}
                  />
                </div>
              </div>
            )}
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
                style={{ margin: "0 auto" }}
              >
                Update
              </button>
            </div>

            {data ? (
              <div>
                <h1 className="help has-text-centered is-size-5 is-success">
                  Information Updated Successfully. Reload to watch the changes
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

export default Details;
