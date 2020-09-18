import React from "react";
import moment from "moment";
const UserCard = ({ user }) => {
  const dob = moment(user.dob);
  return (
    <div
      className="card"
      style={{
        position: "relative",
      }}
    >
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {user.firstName} {user.middleName} {user.lastName}
            </p>
            <p className="subtitle is-5">{user.email}</p>
          </div>
        </div>

        <div className="content">
          <p className="is-6">Gender: {user.sex}</p>
          <p className="is-6">
            Verified:{" "}
            {user.verified ? (
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            )}
          </p>
          <p className="is-6">DOB: {dob.format("dddd, MMMM Do YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
