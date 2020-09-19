import React from "react";

const GetIcdCode = (props) => {
  const {
    commonName,
    setCommonName,
    icdCodes,
    icdCode,
    setIcdCode,
    loading,
    error,
  } = props;
  return (
    <div className="field">
      <label className="label">ICD Code</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="ICD Code"
          value={commonName}
          onChange={(event) => {
            const value = event.target.value;
            setCommonName(value);
          }}
        />
      </div>
      <div className={`select ${loading ? "is-loading" : ""}`}>
        <select
          value={icdCode}
          onChange={(event) => {
            const { value, selectedOptions } = event.target;
            setIcdCode(value);
            setCommonName(selectedOptions[0].innerText);
          }}
        >
          <option value="" disabled>
            Choose here
          </option>
          {icdCodes.map((eachICD, key) => {
            return (
              <option key={key} value={eachICD.icdCode}>
                {eachICD.commonName}
              </option>
            );
          })}
        </select>
      </div>
      <p className="help is-danger">{error ? error : ""}</p>
    </div>
  );
};

export default GetIcdCode;
