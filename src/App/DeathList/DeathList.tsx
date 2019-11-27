import React, { ChangeEvent, FormEvent } from "react";

export class DeathList extends React.Component<{}, DeathListState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      personName: "",
      people: []
    };

    this.onPersonNameChange = this.onPersonNameChange.bind(this);
    this.onAddPersonSubmit = this.onAddPersonSubmit.bind(this);
  }

  onPersonNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      personName: event.target.value
    });
  }

  onAddPersonSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.setState({
      people: [this.state.personName, ...this.state.people],
      personName: ""
    });
  }

  onDeletePersonClick(indexToDelete: number) {
    return () => {
      this.setState({
        people: [
          ...this.state.people.filter((_item, index) => index !== indexToDelete)
        ]
      });
    };
  }

  render() {
    return (
      <>
        <form className="form-group" onSubmit={this.onAddPersonSubmit}>
          <label className="form-label" htmlFor="personName">
            Person name
          </label>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              id="personName"
              value={this.state.personName}
              onChange={this.onPersonNameChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Add person
              </button>
            </div>
          </div>
        </form>
        {this.renderList()}
      </>
    );
  }

  private renderList() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.people.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}{" "}
            <button type="button" onClick={this.onDeletePersonClick(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

interface DeathListState {
  personName: string;
  people: string[];
}
