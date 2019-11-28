import React from "react";
import "./App.css";
import DeathList from "./DeathList/DeathList";
import { About } from "./About/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
        <div className="container pt-5">
          <div className="row justify-content-center">
              <div className="col-8">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/">
                    <DeathList />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </Switch>
              </BrowserRouter>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
