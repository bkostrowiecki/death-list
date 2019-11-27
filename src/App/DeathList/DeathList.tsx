import React, { ChangeEvent } from "react";

export class DeathList extends React.Component<{}, DeathListState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      personName: ''
    };

    this.onPersonNameChange = this.onPersonNameChange.bind(this);
  }

  onPersonNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      personName: event.target.value
    }, () => {
      console.log(this.state.personName);
    });
  }

  render() {
    return <div className="form-group">
      <label className="form-label" htmlFor="personName">Person name</label>
      <div className="input-group">
        <input className="form-control" type="text" id="personName" value={this.state.personName} onChange={this.onPersonNameChange} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Add person</button>
        </div>
      </div>
    </div>;
  }
}

interface DeathListState {
  personName: string;
}