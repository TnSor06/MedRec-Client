import React from "react";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Hospital Information</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="title is-5">{hospital.name}</p>
          <p className="subtitle is-6">
            <strong>Address</strong>:<br /> {hospital.address}
            <br />
            {hospital.district}, {hospital.pincode.region},{" "}
            {hospital.country.countryName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
