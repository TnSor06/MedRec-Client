import React, { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      info: "",
    };
  }
  componentDidCatch(error, info) {
    this.setState(
      {
        ...this.state,
        hasError: true,
        error: error,
        info: info,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    return this.state.hasError ? (
      <div style={{ margin: "10px 0" }}>
        <div className="container has-text-centered">
          <i className="fa fa-frown-o" aria-hidden="true"></i>
          <h1 className="title">OOPS! There's some error</h1>
          <p>
            Web page has been broken due to some issues.<br></br>Please try
            re-loading!
          </p>
          <br />
          <button
            className="button is-success"
            onClick={(e) => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        </div>
      </div>
    ) : (
      this.props.children
    );
  }
}
