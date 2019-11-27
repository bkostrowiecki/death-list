import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DeathList } from './DeathList/DeathList';

class App extends React.Component {
  render() {
    return <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <DeathList />
        </div>
      </div>
    </div>;
  }
}

export default App;
