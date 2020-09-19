import React from "react";

const GetIcdSubCode = (props) => {
  const {
    scientificName,
    setScientificName,
    icdSubCodes,
    icdSubCode,
    setIcdSubCode,
    loading,
    error,
  } = props;
  return (
    <div className="field">
      <label className="label">ICD Sub Code</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="ICD Sub Code"
          value={scientificName}
          onChange={(event) => {
            const value = event.target.value;
            setScientificName(value);
          }}
        />
      </div>
      <div className={`select ${loading ? "is-loading" : ""}`}>
        <select
          value={icdSubCode}
          onChange={(event) => {
            const { value, selectedOptions } = event.target;
            setIcdSubCode(value);
            setScientificName(selectedOptions[0].innerText);
          }}
        >
          <option value="" disabled>
            Choose here
          </option>
          {icdSubCodes.map((eachICDSub, key) => {
            return (
              <option key={key} value={eachICDSub.icdSubCode}>
                {eachICDSub.scientificName}
              </option>
            );
          })}
        </select>
      </div>
      <p className="help is-danger">{error ? error : ""}</p>
    </div>
  );
};

export default GetIcdSubCode;
