import React, { Component } from "react";
import classes from "../styles/Workout.module.css";
import AmrapForm from "./AmrapForm.jsx";
import RftForm from "./RftForm.jsx";
import BasicTable from "./WorkoutTables.jsx";
import ConventionalForm from "./ConventionalForm.jsx";

class Workout extends Component {
  constructor() {
    super();
    this.state = {
      selectedBlock: "Select one",
      blockCount: 0,
      showDropdown: false,
      workouts: {},
      workoutStarted: false,
    };
    //bind functions here
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropdownState = this.toggleDropdownState.bind(this);
    this.resetSelectedBlock = this.resetSelectedBlock.bind(this);
    this.updateCurrentWorkout = this.updateCurrentWorkout.bind(this);
    this.handleStartWorkout = this.handleStartWorkout.bind(this);
  }

  handleStartWorkout() {
    this.toggleDropdownState();
    this.setState({ workoutStarted: true });
    console.log(this.state.workouts);
  }

  resetSelectedBlock() {
    //resets dropdown menu to default => hides form
    //and update blockCount
    this.setState({
      selectedBlock: "Select one",
      blockCount: this.state.blockCount + 1,
    });
  }

  updateCurrentWorkout(type, moves, time = 0) {
    let obj = {};
    let validMoves = moves.filter((move) => move["exerciseName"].length > 1);

    obj[`Block${this.state.blockCount}`] = {
      type: type,
      moves: validMoves,
      duration: time,
    };
    let updatedWorkouts = Object.assign(this.state.workouts, obj);
    this.setState({ workouts: updatedWorkouts });
  }

  handleSubmit(event) {
    document.getElementById("app").append(this.state.selectedBlock);
    event.preventDefault();
  }

  handleChange(e) {
    this.setState({ selectedBlock: e.target.value });
  }

  toggleDropdownState() {
    const { showDropdown } = this.state;
    this.setState({ showDropdown: !showDropdown });
  }

  render() {
    const {
      showDropdown,
      selectedBlock,
      blockCount,
      workoutStarted,
      workouts,
    } = this.state;

    return (
      <div className={classes.workoutMain}>
        <h1>
          <span className={classes.wod}>WOD</span>builder
        </h1>
        {workoutStarted ? (
          <></>
        ) : (
          <button onClick={this.toggleDropdownState}>Add block</button>
        )}
        {showDropdown ? (
          <label>
            &nbsp;Block style:&nbsp;
            <select value={selectedBlock} onChange={this.handleChange}>
              <option value="">(Select one)</option>
              <option value="emom">EMOM</option>
              <option value="amrap">AMRAP</option>
              <option value="rft">Rft</option>
              <option value="conventional">Conventional</option>
            </select>
          </label>
        ) : (
          <></>
        )}
        {selectedBlock === "Select one" ? (
          <></>
        ) : selectedBlock === "amrap" ? (
          <div>
            <AmrapForm
              reset={this.resetSelectedBlock}
              update={this.updateCurrentWorkout}
            />
          </div>
        ) : selectedBlock === "emom" ? (
          <div>show emom form</div>
        ) : selectedBlock === "rft" ? (
          <div>
            <RftForm
              reset={this.resetSelectedBlock}
              update={this.updateCurrentWorkout}
            />
          </div>
        ) : selectedBlock === "conventional" ? (
          <div>
            <ConventionalForm />
          </div>
        ) : (
          <></>
        )}
        {blockCount > 0 && !workoutStarted ? (
          <button onClick={this.handleStartWorkout} className={classes.btnBox}>
            Start workout
          </button>
        ) : workoutStarted ? (
          <div>
            Enjoy the workout!
            <BasicTable blocks={workouts} />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Workout;

{
  /* <form onSubmit={this.handleSubmit}>
        <label>
          Block style:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="amrap">AMRAP</option>
            <option value="emom">EMOM</option>
            <option value="tabata">Tabata</option>
            <option value="conventional">Conventional</option>
          </select>
        </label>
        <br></br>
        {/* <button onClick={this.handleSubmit}>Create Block</button> */
}
//     <input type="submit" value="Create block" />
//   </form> */}
