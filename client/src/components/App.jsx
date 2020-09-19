import React, { Component } from "react";
import Home from "./Home.jsx";
import Workout from "./Workout.jsx";
import Searchbar from "./Searchbar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import classes from '../styles/Header.module.css';

class App extends Component {
  constructor() {
    super();

    this.state = {};
    //bind functions here
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home |&ensp;</Link>
            </li>
            <li>
              <Link to="/workout">Workout |&ensp;</Link>
            </li>
            <li>
              <Link to="/search">Browse exercises &ensp;</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/workout" component={Workout}></Route>
            <Route path="/search" component={Searchbar}></Route>
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
