import React from "react";

const GetCountry = (props) => {
  const {
    country,
    setCountry,
    countries,
    countryCode,
    setCountryCode,
    loading,
    error,
  } = props;
  return (
    <div className="field">
      <label className="label">Country</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(event) => {
            const value = event.target.value;
            setCountry(value);
          }}
        />
      </div>
      <div className={`select ${loading ? "is-loading" : ""}`}>
        <select
          value={countryCode}
          onChange={(event) => {
            const { value, selectedOptions } = event.target;
            setCountryCode(value);
            setCountry(selectedOptions[0].innerText);
          }}
        >
          <option value="" disabled>
            Choose here
          </option>
          {countries.map((eachCountry, key) => {
            return (
              <option key={key} value={eachCountry.countryCode}>
                {eachCountry.countryName}
              </option>
            );
          })}
        </select>
      </div>
      <p className="help is-danger">{error ? error : ""}</p>
    </div>
  );
};

export default GetCountry;
