import React from "react";
import { Redirect } from "react-router-dom";
import "./homepage.styles.scss";
const Homepage = (props) => {
  const query = new URLSearchParams(props.location.search);
  const redirectURL = query.get("redirect");
  if (redirectURL) {
    return <Redirect to={redirectURL}></Redirect>;
  }
  return (
    <div className="homepage-wrapper">
      <section className="hero is-large is-light is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Medrec</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
