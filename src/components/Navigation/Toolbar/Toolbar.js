import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
      <Logo height="80%"></Logo>
      <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
      </nav>
  </header>

);



export default toolbar;
