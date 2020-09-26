import React from "react";
import "./homepage.styles.scss";
const Homepage = (props) => {
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
