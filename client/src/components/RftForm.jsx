import React, { useState }from 'react';
import classes from '../styles/Forms.module.css';

const RftForm = (props) => {
  let [inputExercise, setInputExercise] = useState([{exerciseName: '', reps: ''}]);

  //handle exercise input change
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputExercise];

    list[index][name] = value;
    setInputExercise(list);
  };
 
  //handle remove-field button click
  const handleRemoveClick = (index) => {
    const list = [...inputExercise];

    list.splice(index, 1);
    setInputExercise(list);
  };
 
  //handle add-field button click
  const handleAddClick = () => {
    setInputExercise([...inputExercise, {exerciseName: '', reps: ''}]);
  };

  return(
    <div>
    <label>Reps/rounds for Time
    <br></br>
    </label>
    {inputExercise.map((movement, i) => {
      return(
        <div className={classes.box}>
            <input
              name="exerciseName"
              value={movement.exerciseName}
              placeholder="exercise name"
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className={classes.inputField}
              name="reps"
              value={movement.reps}
              placeholder="# of reps"
              onChange={e => handleInputChange(e, i)}
            />
            <div className={classes.btnBox}>
              {inputExercise.length !== 1 && <button className={classes.arBtn} onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputExercise.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
      )
    })}
    <button onClick={() => {
       setTimeout(() => {
        props.reset();
        props.update('rft', inputExercise);
        }, 0)
    }}>Add all</button>
    </div>
  )
};

export default RftForm;