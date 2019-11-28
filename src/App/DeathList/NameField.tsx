import React, { ChangeEvent } from "react";

export class NameField extends React.Component<SearchFieldProps> {
  render() {
    return (
      <input
        className="form-control"
        type="text"
        id="personName"
        value={this.props.inputValue}
        onChange={this.props.onInputValueChange}
      />
    );
  }
}

export interface SearchFieldProps {
  inputValue: string;
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
