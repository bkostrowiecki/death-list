import React from "react";

export class DeathList extends React.Component<{}> {
  render() {
    return <div class="form-group">
      <label class="form-label" for="personName">Person name</label>
      <input class="form-input" type="text" id="personName" />
    </div>;
  }
}
