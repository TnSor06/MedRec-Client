import React from "react";
import moment from "moment";
import { Spinner } from "../../../components/spinner/spinner.component";
import UserCard from "../../../components/user-card/user-card.component";
import HospitalCard from "../../../components/hospital-card/hospital-card.component";

const DatabaseAdmin = (props) => {
  const { loading, error, data } = props;
  const registeredAt = data ? moment(data.registeredAt).fromNow() : null;
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <section className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Profile</h1>
          </div>
          <br />
          <p className="help is-size-5 is-danger">{error ? error : ""}</p>
          {data ? (
            <div className="columns is-centered">
              <div
                className="column is-one-third-desktop"
                style={{ padding: "10px" }}
              >
                <UserCard user={data.user}></UserCard>
              </div>
              <div className="column is-one-third-desktop">
                <article className="media">
                  <div className="media-content">
                    <div className="content" style={{ padding: "10px" }}>
                      <p>
                        <strong>Contact</strong>: {data.contact} <br />
                        <strong>Address</strong>: {data.address},{" "}
                        {data.country.countryName} <br />
                        <strong>Registered At</strong>: {registeredAt} <br />
                      </p>
                      <HospitalCard hospital={data.hospital}></HospitalCard>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default DatabaseAdmin;
