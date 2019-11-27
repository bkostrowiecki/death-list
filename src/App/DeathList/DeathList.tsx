import React from "react";

export class DeathList extends React.Component<{}> {
  render() {
    return <div className="form-group">
      <label className="form-label" htmlFor="personName">Person name</label>
      <div className="input-group">
        <input className="form-control" type="text" id="personName" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Add person</button>
        </div>
      </div>
    </div>;
  }
}
