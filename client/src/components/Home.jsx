import React, { Component } from "react";
import logo from "../images/icon_go.svg";
import classes from "../styles/Home.module.css";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showWorkoutTemplate: false,
    };
    this.handleGoClick = this.handleGoClick.bind(this);
  }
  handleGoClick() {
    this.setState({ showWorkoutTemplate: true });
  }

  render() {
    if (this.state.showWorkoutTemplate) {
      return <Redirect to="/workout" />;
    }

    return (
      <div className={classes.mainContainer}>
        <h1>
          <span className={classes.wod}>WOD</span>coach
        </h1>
        <h3>WORKOUT GENERATOR</h3>
        <br></br>
        <a
          href="https://fitt.co/austin/articles/crossfit-gyms-austin"
          style={{ fontSize: "25px" }}
        >
          Find a box near me{" "}
        </a>
        <div style={{ fontSize: "25px" }}>Do my thing</div>
        <img
          src={logo}
          width="40"
          height="40"
          alt="arrow"
          onClick={this.handleGoClick}
        ></img>
      </div>
    );
  }
}

export default Home;
