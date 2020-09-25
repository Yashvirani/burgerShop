import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

// if we use () with arrow function then by default it sets to return
// if we use {} we could write some javascript logic and then return some JSX with ()

export default backdrop;
