import React from "react";

const GetRegion = (props) => {
  const {
    region,
    setRegion,
    regions,
    pincode,
    setPincode,
    loading,
    error,
  } = props;
  return (
    <div className="field">
      <label className="label">Region</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Region"
          value={region}
          onChange={(event) => {
            const value = event.target.value;
            setRegion(value);
          }}
        />
      </div>
      <div className={`select ${loading ? "is-loading" : ""}`}>
        <select
          value={pincode}
          onChange={(event) => {
            const { value, selectedOptions } = event.target;
            setPincode(value);
            setRegion(selectedOptions[0].innerText);
          }}
        >
          <option value="" disabled>
            Choose here
          </option>
          {regions.map((eachRegion, key) => {
            return (
              <option key={key} value={eachRegion.pincode}>
                {eachRegion.region}
              </option>
            );
          })}
        </select>
      </div>
      <p className="help is-danger">{error ? error : ""}</p>
    </div>
  );
};

export default GetRegion;
