import React from "react";

const Gethospital = (props) => {
  const {
    hospitalSelected,
    setHospitalSelected,
    hospitals,
    hospital,
    setHospital,
    loading,
    error,
  } = props;
  return (
    <div className="field">
      <label className="label">Hospital</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Hospital"
          value={hospitalSelected}
          onChange={(event) => {
            const value = event.target.value;
            setHospitalSelected(value);
          }}
        />
      </div>
      <div className={`select ${loading ? "is-loading" : ""}`}>
        <select
          value={hospital}
          onChange={(event) => {
            const { value, selectedOptions } = event.target;
            setHospital(value);
            setHospitalSelected(selectedOptions[0].innerText);
          }}
        >
          <option value="" disabled>
            Choose here
          </option>
          {hospitals.map((eachHospital, key) => {
            return (
              <option key={key} value={eachHospital.hospitalId}>
                {eachHospital.name}
              </option>
            );
          })}
        </select>
      </div>
      <p className="help is-danger">{error ? error : ""}</p>
    </div>
  );
};

export default Gethospital;
