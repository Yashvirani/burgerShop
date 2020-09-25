import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <div className={classes.NavigationItem}>
  <li ><NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>{props.children}</NavLink></li>
  </div>
);

export default navigationItem;
