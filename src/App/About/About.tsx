import React from "react";
import { Link } from "react-router-dom";

export class About extends React.Component<{}> {
  render() {
    return (
      <>
        <h1>Death Note - About</h1>

        <p>
          list of people that I would like to kill, but I can't because I'm
          afraid of a prison
        </p>

        <div className="pt-5">
          <Link to="/" className="btn btn-primary">
            Back to app
          </Link>
        </div>
      </>
    );
  }
}
