import React, { ChangeEvent, FormEvent } from "react";
import { NameField } from "./NameField";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { State } from "../state";
import { ActionType } from "./deathList.action";
import { DeathListItem } from "./deathList.state";
import { Dispatch } from "redux";

export class DeathList extends React.Component<DeathListProps, DeathListState> {
  constructor(props: DeathListProps) {
    super(props);

    this.state = {
      personName: "",
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

    this.props.addPerson(this.state.personName);

    this.setState({
      personName: ''
    })
  }

  onDeletePersonClick(id: string) {
    return () => this.props.deletePerson(id);
  }

  render() {
    return (
      <>
        <form className="form-group" onSubmit={this.onAddPersonSubmit}>
          <label className="form-label" htmlFor="personName">
            Person name
          </label>
          <div className="input-group">
            <NameField
              inputValue={this.state.personName}
              onInputValueChange={this.onPersonNameChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit" disabled={!this.state.personName}>
                Add person
              </button>
            </div>
          </div>
        </form>
        {this.renderList()}
        <div className="pt-5">
          <Link to="/about">About</Link>
        </div>
      </>
    );
  }

  private renderList() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.people.map((item) => (
          <li className="list-group-item" key={item.id}>
            <span style={{ textDecoration: item.isDead ? 'line-through' : ''}}>{item.name}</span>{' '}
            <div className="float-right">
              {!item.isDead && <button type="button" className="btn btn-sm btn-success" onClick={() => this.props.killPerson(item.id)}>Kill</button>}
              {!!item.isDead && <button type="button" className="btn btn-sm btn-success" onClick={() => this.props.revivePerson(item.id)}>Revive</button>}
              {' '}
              <button type="button" className="btn btn-sm btn-danger" onClick={this.onDeletePersonClick(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: State) => ({
  people: Object.values(state.deathList)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addPerson: (name: string) => dispatch({
    type: ActionType.ADD_PERSON,
    payload: {
      name
    }
  }),
  deletePerson: (id: string) => dispatch({
    type: ActionType.DELETE_PERSON,
    payload: {
      id
    }
  }),
  killPerson: (id: string) => dispatch({
    type: ActionType.KILL_PERSON,
    payload: {
      id
    }
  }),
  revivePerson: (id: string) => dispatch({
    type: ActionType.REVIVE_PERSON,
    payload: {
      id
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(DeathList);

export interface DeathListProps {
  people: DeathListItem[];
  addPerson: (name: string) => void;
  deletePerson: (id: string) => void;
  killPerson: (id: string) => void;
  revivePerson: (id: string) => void;
}

interface DeathListState {
  personName: string;
}
